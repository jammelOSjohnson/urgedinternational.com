const mongoose = require('mongoose');

const PaySettingSchema = new mongoose.Schema({
    perDeliveryEnabled: {
        type: Boolean,
        required: true
    },
    percentagePerOrderTotal: {
        type: Boolean,
        required: true
    },
    value: {
        type: Number,
        required: true
    }

});

const PaySetting = mongoose.model('paysetting', PaySettingSchema);
export default PaySetting;