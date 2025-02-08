import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: false,
  },
  LastName: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required: true,
  },
  AddressLine1: {
    type: String,
    required: false,
  },
  AddressLine2: {
    type: String,
    required: false,
  },
  City: {
    type: String,
    required: false,
  },
  ContactNumber: {
    type: String,
    required: false,
  },
  OpeningHrs: {
    type: Object,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: false,
  },
  MenuItems: {
    type: [Object],
    required: false,
  },
  ImageName: {
    type: String,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  Position: {
    type: String,
    required: false,
  },
  Parish: {
    type: String,
    required: false,
  },
  deliveryFee: {
    type: Number,
    default: 500, // Default delivery fee
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
