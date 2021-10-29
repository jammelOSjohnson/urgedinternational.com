const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const MenuCategorySchema = new mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },

});

const MenuCategory = mongoose.model('menucategory', MenuCategorySchema);
export default MenuCategory;