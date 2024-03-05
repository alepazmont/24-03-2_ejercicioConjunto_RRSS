const mongoose = require("mongoose");
/* const bcrypt = require("bcrypt"); */

const mediaSchema = new mongoose.Schema({
  format: {
    type: String,
    /* unique: false, */
    trim: true,
    required: true,
  },
  postDate: {
    type: String,
    trim: true,
    required: true,
  },
  footer: {
    type: String,
    trim: true,
    required: true,
  },
  /*   userName: {
    type: String,
    trim: true,
    required: true,
  }, */
  location: {
    type: String,
    /* unique: true, */
    trim: true,
  },
  /*   privacity: {
    type: String,
    unique: true,
    trim: true,
  }, */
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
