const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  publishDate: {
    type: String,
    required: true,
    trim: true,
  },
  endDate: {
    type: String,
    required: true,
    trim: true,
  },
  eventTitle: {
    type: String,
    required: true,
    trim: true,
  },
  eventLocation: {
    type: String,
    required: true,
    trim: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
