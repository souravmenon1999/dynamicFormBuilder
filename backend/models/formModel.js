import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fields: {
    type : Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const form = mongoose.model('form', formSchema);

export default form;
