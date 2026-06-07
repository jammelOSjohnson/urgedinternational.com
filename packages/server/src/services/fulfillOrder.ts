import crypto from "crypto";
import moment from "moment-timezone";
import Order from "../models/Order.model.js";
import PendingCheckout from "../models/PendingCheckout.model.js";
import { log } from "../logger.js";
import { pubsub, ORDER_CREATED } from "../pubsub.js";
import { resolveRiderForAssignment } from "./riderAssignment.js";

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

  const rider = await resolveRiderForAssignment(
    pending.riderId?.toString(),
    pending.generalLocation,
  );

  const estTime = moment.tz(new Date(), "America/Jamaica").format();
  const orderStatus = rider != null ? "Pending" : "Not Assigned";

  if (rider == null) {
    log.info({
      event: "order.no_assignable_rider",
      ...traceFields,
      generalLocation: pending.generalLocation,
    });
  }

  const orderItem = new Order({
    Id: pending.userId,
    OrderItems: pending.orderItems,
    OrderStatus: orderStatus,
    OrderTotal: pending.orderTotal,
    OrderDate: estTime,
    ...(rider != null ? { Rider: rider._id } : {}),
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
      orderStatus,
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
