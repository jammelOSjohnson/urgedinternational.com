import mongoose from "mongoose";

const PaySettingSchema = new mongoose.Schema({
  perDeliveryEnabled: {
    type: Boolean,
    required: true,
  },
  percentagePerOrderTotal: {
    type: Boolean,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  closed: {
    type: Boolean,
    required: false,
  },
  badWeather: {
    type: Boolean,
    required: false,
  },
  holiday: {
    type: Boolean,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
});

const PaySetting = mongoose.model("paysetting", PaySettingSchema);
export default PaySetting;
