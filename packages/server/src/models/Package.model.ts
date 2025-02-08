import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  PackageInfo: {
    type: Object,
    required: true,
  },
  Customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  TrackingNumber: {
    type: String,
    required: true,
  },
  Pickup: {
    type: Boolean,
    required: true,
  },
  Deliver: {
    type: Boolean,
    required: true,
  },
});

const Package = mongoose.model("package", PackageSchema);
export default Package;
