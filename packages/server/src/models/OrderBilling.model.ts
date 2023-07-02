const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const OrderBillingSchema = new Schema({
  oId: {
    type: String,
    required: false,
  },
  txndate: {
    type: Schema.Types.Date,
    required: false,
  },
  ccbin: {
    type: String,
    required: false,
  },
  processor: {
    type: String,
    required: false,
  },
  saddr2: {
    type: String,
    required: false,
  },
  saddr1: {
    type: String,
    required: false,
  },
  cccountry: {
    type: String,
    required: false,
  },
  Expmonth: {
    type: String,
    required: false,
  },
  hashalgorithm: {
    type: String,
    required: false,
  },
  endpointTransactionId: {
    type: String,
    required: false,
  },
  currency: {
    type: String,
    required: false,
  },
  processorresponse_code: {
    type: String,
    required: false,
  },
  chargetotal: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  terminalid: {
    type: String,
    required: false,
  },
  associationResponseCode: {
    type: String,
    required: false,
  },
  approvalcode: {
    type: String,
    required: false,
  },
  expyear: {
    type: String,
    required: false,
  },
  responsehash: {
    type: String,
    required: false,
  },
  responsecode3dsecure: {
    type: String,
    required: false,
  },
  bstate: {
    type: String,
    required: false,
  },
  schemeTransactionId: {
    type: String,
    required: false,
  },
  tdate: {
    type: String,
    required: false,
  },
  installmentsinterest: {
    type: String,
    required: false,
  },
  bname: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  ccbrand: {
    type: String,
    required: false,
  },
  sname: {
    type: String,
    required: false,
  },
  sstate: {
    type: String,
    required: false,
  },
  refnumber: {
    type: String,
    required: false,
  },
  txntype: {
    type: String,
    required: false,
  },
  paymentMethod: {
    type: String,
    required: false,
  },
  txndatetime: {
    type: String,
    required: false,
  },
  cardnumber: {
    type: String,
    required: false,
  },
  ipgTransactionId: {
    type: String,
    required: false,
  },
  scountry: {
    type: String,
    required: false,
  },
  baddr1: {
    type: String,
    required: false,
  },
  bcountry: {
    type: String,
    required: false,
  },
  baddr2: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
});

const OrderBilling = model("orderbilling", OrderBillingSchema);
export default OrderBilling;
