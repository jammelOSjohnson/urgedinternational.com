import mongoose from "mongoose";
import Counter from "./Counter.model.js";

const OrderSchema = new mongoose.Schema({
  _id: Number,
  Id: {
    type: String,
    required: true,
  },
  OrderItems: {
    type: Object,
    required: true,
  },
  OrderStatus: {
    type: String,
    required: true,
  },
  OrderTotal: {
    type: Number,
    required: true,
  },
  OrderDate: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  Rider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  BillingInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderbilling",
    required: false,
  },
  DeliveryAddress: {
    type: String,
    required: true,
  },
  PaymentMethod: {
    type: String,
    required: true,
  },
  AdditionalInfo: {
    type: String,
    required: false,
  },
  DeliveryFee: {
    type: Number,
    required: true,
  },
  GCT: {
    type: Number,
    required: true,
  },
  ServiceCharge: {
    type: Number,
    required: true,
  },
  CartTotal: {
    type: Number,
    required: true,
  },
  OrderType: {
    type: String,
    required: false,
  },
  Restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

OrderSchema.pre("save", async function (next) {
  if (this.isNew) {
    // Use "order_id" to match existing prod counter document and continue sequence
    const counterDoc = await Counter.findByIdAndUpdate(
      "order_id",
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this._id = counterDoc.seq;
  }
  next();
});

const Order = mongoose.model("order", OrderSchema);
export default Order;
