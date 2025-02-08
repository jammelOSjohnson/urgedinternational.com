import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  retaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  MenuCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "menucategory",
    required: true,
  },
  ItemName: {
    type: String,
    required: true,
  },
  ItemCost: {
    type: String,
    required: true,
  },
  ItemDescription: {
    type: String,
    required: true,
  },
});

const MenuItem = mongoose.model("menuitem", MenuItemSchema);
export default MenuItem;
