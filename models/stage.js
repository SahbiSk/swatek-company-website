const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  reference: {
    unique: true,
    type: String,
    required: [true, "reference is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  mots_clefs: {
    type: String,
  },
  profil: { type: [String], required: [true, "profil is required"] },
});

module.exports = mongoose.model("Stage", stageSchema);
