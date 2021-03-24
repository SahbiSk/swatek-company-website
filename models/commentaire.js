const mongoose = require("mongoose");

const commentaireSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Commentaire", commentaireSchema);
