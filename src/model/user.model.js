const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },  
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  birthday: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  users: {
    type: Number,
    trim: true,
  },
});

userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;
