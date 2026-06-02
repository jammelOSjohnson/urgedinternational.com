import mongoose from "mongoose";

const PendingCheckoutSchema = new mongoose.Schema({
  pendingId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  userId: {
    type: String,
    required: true,
  },
  cartItems: {
    type: Object,
    required: true,
  },
  orderItems: {
    type: Object,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: false,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
  gct: {
    type: Number,
    required: true,
  },
  serviceCharge: {
    type: Number,
    required: true,
  },
  cartTotal: {
    type: Number,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  generalLocation: {
    type: String,
    required: false,
  },
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  billingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderbilling",
    required: false,
  },
  orderId: {
    type: Number,
    required: false,
  },
  checkoutTraceId: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const PendingCheckout = mongoose.model("pendingcheckout", PendingCheckoutSchema);
export default PendingCheckout;
