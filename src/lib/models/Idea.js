import mongoose from "mongoose";
let idea_schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 350,
  },
  url: {
    type: String,
    maxlength: 120,
  },
  language: {
    type: String,
  },
  difficulty: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Idea || mongoose.model("Idea", idea_schema);
