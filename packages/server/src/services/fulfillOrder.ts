import crypto from "crypto";
import moment from "moment-timezone";
import Order from "../models/Order.model.js";
import User from "../models/User.model.js";
import PendingCheckout from "../models/PendingCheckout.model.js";
import { log } from "../logger.js";
import { pubsub, ORDER_CREATED } from "../pubsub.js";

async function selectRider(parish?: string | null) {
  const query = User.find()
    .where("isAvailable")
    .ne(null)
    .where("disabled")
    .ne(null)
    .where("Position")
    .equals("Rider");

  if (parish != null && parish !== "") {
    query.where("Parish").equals(parish);
  }

  const ridersList = await query;
  let available = ridersList.filter(
    (r) => r.isAvailable === true && r.disabled === false,
  );
  if (available.length === 0 && ridersList.length > 0) {
    available = [ridersList[0]];
  }
  if (available.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * available.length);
  return available[index];
}

export async function fulfillOrderFromPending(
  pendingId: string,
  billingId: string,
  checkoutTraceId?: string,
) {
  const traceFields = { pendingId, billingId, checkoutTraceId };

  log.info({ event: "order.create_attempt", ...traceFields });

  const existingByBilling = await Order.findOne({ BillingInfo: billingId });
  if (existingByBilling) {
    log.info({
      event: "order.created",
      ...traceFields,
      orderId: existingByBilling._id,
      idempotent: true,
    });
    return existingByBilling;
  }

  const pending = await PendingCheckout.findOne({ pendingId });
  if (!pending) {
    log.warn({
      event: "order.create_failed",
      ...traceFields,
      error: "pending_checkout_not_found",
    });
    return null;
  }

  if (pending.status === "completed" && pending.orderId != null) {
    const existing = await Order.findById(pending.orderId);
    if (existing) {
      log.info({
        event: "order.created",
        ...traceFields,
        orderId: existing._id,
        idempotent: true,
      });
      return existing;
    }
  }

  const rider =
    pending.riderId != null
      ? await User.findById(pending.riderId)
      : await selectRider(pending.generalLocation);

  const estTime = moment.tz(new Date(), "America/Jamaica").format();

  const orderItem = new Order({
    Id: pending.userId,
    OrderItems: pending.orderItems,
    OrderStatus: "Pending",
    OrderTotal: pending.orderTotal,
    OrderDate: estTime,
    Rider: rider?._id ?? "",
    BillingInfo: billingId,
    DeliveryAddress: pending.deliveryAddress,
    PaymentMethod: pending.paymentMethod,
    AdditionalInfo: pending.additionalInfo,
    DeliveryFee: pending.deliveryFee,
    GCT: pending.gct,
    ServiceCharge: pending.serviceCharge,
    CartTotal: pending.cartTotal,
    OrderType: "Food",
    Restaurant: pending.restaurant,
  });

  try {
    const newOrder = await orderItem.save();
    const finalOrder = await Order.find()
      .where("_id")
      .equals(newOrder._id)
      .populate("Rider")
      .populate("Restaurant")
      .populate("BillingInfo");

    pending.status = "completed";
    pending.orderId = newOrder._id;
    pending.billingId = billingId as unknown as typeof pending.billingId;
    await pending.save();

    pubsub.publish(ORDER_CREATED, { orderCreated: finalOrder[0] });

    log.info({
      event: "order.created",
      ...traceFields,
      orderId: newOrder._id,
    });

    return finalOrder[0];
  } catch (error) {
    pending.status = "failed";
    await pending.save();
    log.error({
      event: "order.create_failed",
      ...traceFields,
      error: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}

export function generateCheckoutTraceId() {
  return crypto.randomUUID();
}
