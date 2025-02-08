import mongoose from "mongoose";

const OrderRejectionSchema = new mongoose.Schema({
  OrderId: {
    type: Number,
    ref: "order",
    required: true,
  },
  RejectionList: {
    type: [String],
    required: true,
  },
});

const OrderRejection = mongoose.model("orderrejection", OrderRejectionSchema);
export default OrderRejection;
