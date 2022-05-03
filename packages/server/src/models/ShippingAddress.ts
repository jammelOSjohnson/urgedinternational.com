const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const ShippingAddressSchema = new Schema({
    AirFreight: {
        type: Object,
        required: false
    },
    SeaFreight: {
        type: Object,
        required: false
    }
});

const ShippingAddress = model('shippingaddress', ShippingAddressSchema);
export default ShippingAddress;