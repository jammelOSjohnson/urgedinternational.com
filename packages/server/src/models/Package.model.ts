const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const PackageSchema = new Schema({
    PackageInfo: {
        type: Object,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    TrackingNumber: {
        type: String,
        required: true
    }

});

const Package = model('package', PackageSchema);
export default Package;