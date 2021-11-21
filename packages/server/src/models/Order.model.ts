const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const OrderSchema = new Schema({
    _id: Number,
    Id: {
        type: String,
        required: true
    },
    OrderItems: {
        type: Object,
        required: true
    },
    OrderStatus: {
        type: String,
        required: true
    },
    OrderTotal: {
        type: Number,
        required: true
    },
    OrderDate: {
        type: Schema.Types.Date,
        required: true
    },
    Rider: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },
    DeliveryAddress: {
        type: String,
        required: true
    },
    PaymentMethod: {
        type: String,
        required: true
    },
    AdditionalInfo: {
        type: String,
        required: false
    },
    DeliveryFee: {
        type: Number,
        required: true
    },
    GCT:{
        type: Number,
        required: true
    },
    ServiceCharge: {
        type: Number,
        required: true
    },
    CartTotal: {
        type: Number,
        required: true
    }
});

OrderSchema.plugin(autoIncrement);

const Order = model('order', OrderSchema);
export default Order;