const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: false
    }

});

const Category = mongoose.model('category', CategorySchema);
export default Category;