import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  RoleName: {
    type: String,
    required: true,
  },
  RoleDescription: {
    type: String,
    required: true,
  },
});

const Role = mongoose.model("Role", roleSchema);
export default Role;
// module.exports = Post;
