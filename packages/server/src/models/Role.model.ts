const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Role = mongoose.model('role', RoleSchema);
export default Role;
// module.exports = Post;