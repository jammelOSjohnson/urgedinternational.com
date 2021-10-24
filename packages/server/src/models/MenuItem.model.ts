const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    retaurant: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    MenuCategory: {
        type: Schema.Types.ObjectId, 
        ref: 'menucategory',
        required: true
    },
    ItemName: {
        type: String,
        required: true
    },
    ItemCost: {
        type: String,
        required: true
    },
    ItemDescription: {
        type: String,
        required: true
    }

});

const MenuItem = mongoose.model('menuitem', MenuItemSchema);
export default MenuItem;