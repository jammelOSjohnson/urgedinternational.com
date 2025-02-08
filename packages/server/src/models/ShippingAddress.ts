import mongoose from "mongoose";

const ShippingAddressSchema = new mongoose.Schema({
  AirFreight: {
    type: Object,
    required: false,
  },
  SeaFreight: {
    type: Object,
    required: false,
  },
});

const ShippingAddress = mongoose.model(
  "shippingaddress",
  ShippingAddressSchema
);
export default ShippingAddress;
