const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.SECRET;
const jwtExpires = process.env.EXPIRES;

const userSchema = new mongoose.Schema({
  name: { default: "user", type: String, required: true },
  email: {
    unique: true,
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  clearance: {
    type: String,
    enum: ["level 1", "admin"],
    default: "level 1",
  },
});

userSchema.methods.signJwt = function () {
  const token = jwt.sign({ id: this.id }, jwtSecret, { expiresIn: jwtExpires });
  return token;
};

module.exports = mongoose.model("User", userSchema);
