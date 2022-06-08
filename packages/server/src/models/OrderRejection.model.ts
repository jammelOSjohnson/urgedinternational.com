const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const OrderRejectionSchema = new Schema({
    OrderId: {
        type: Number, 
        ref: 'order',
        required: true
    },
    RejectionList: {
        type: [String], 
        required: true
    }
});

const OrderRejection = model('orderrejection', OrderRejectionSchema);
export default OrderRejection;