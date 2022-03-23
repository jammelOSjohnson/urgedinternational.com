const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const PackageSchema = new Schema({
    PackageInfo: {
        type: Object,
        required: true
    },
    Customer: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: false
    },
    TrackingNumber: {
        type: String,
        required: true
    },
    Pickup: {
        type: Boolean,
        required: true
    },
    Deliver: {
        type: Boolean,
        required: true
    }
});

const Package = model('package', PackageSchema);
export default Package;