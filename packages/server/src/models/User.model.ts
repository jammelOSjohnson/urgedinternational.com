const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: false
    },
    LastName: {
        type: String,
        required: false
    },
    Email: {
        type: String,
        required: true
    },
    AddressLine1: {
        type: String,
        required: false
    },
    AddressLine2: {
        type: String,
        required: false
    },
    City: {
        type: String,
        required: false
    },
    ContactNumber: {
        type: String,
        required: false
    },
    OpeningHrs: {
        type: Object,
        required: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category',
        required: false
    }

});

const User = mongoose.model('user', UserSchema);
export default User;