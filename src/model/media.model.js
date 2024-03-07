const mongoose = require("mongoose");
/* const bcrypt = require("bcrypt"); */

const mediaSchema = new mongoose.Schema({
  format: {
    type: String,
    trim: true,
  },
  postDate: {
    type: String,
    trim: true,
  },
  footer: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
