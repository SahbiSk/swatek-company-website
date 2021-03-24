const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: [true, "Please fill all fields"],
  },
  name: {
    type: String,
    required: [true, "Please fill all fields"],
    min: 6,
  },
  description: { type: [String], required: [true, "Please fill all fields"] },
});

module.exports = mongoose.model("Produit", produitSchema);
