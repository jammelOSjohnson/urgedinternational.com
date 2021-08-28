const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    RetaurantID: {
        type: String,
        required: true
    },
    MenuCategory: {
        type: String,
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