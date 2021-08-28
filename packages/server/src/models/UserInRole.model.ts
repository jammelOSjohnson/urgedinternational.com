const mongoose = require('mongoose');

const UserInRoleSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true
    },
    RoleID: {
        type: String,
        required: true
    }
});

const UserInRole = mongoose.model('userinrole', UserInRoleSchema);
export default UserInRole;