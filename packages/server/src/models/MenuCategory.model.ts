const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const MenuCategorySchema = new mongoose.Schema({
    retaurant: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    Category: {
        type: String,
        required: true
    },

});

const MenuCategory = mongoose.model('menucategory', MenuCategorySchema);
export default MenuCategory;