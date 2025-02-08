import mongoose from "mongoose";
// Import any other dependencies using ESM syntax
// import { Something } from 'somewhere';

const schema = new mongoose.Schema({
  // schema definition
});

const Model = mongoose.model("ModelName", schema);
export default Model;
