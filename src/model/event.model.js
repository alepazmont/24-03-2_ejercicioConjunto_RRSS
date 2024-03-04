const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  publishDate: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  endDate: {
    type: String,
    required: true,
    trim: true
  },
  assistant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  eventTitle: {
    type: Number,
    required: true,
    trim: true
  },
  eventLocation: {
    type: String,
    required: true,
    trim: true
  },
  eventDescription: {
    type: String,
    required: true,
    trim: true
  }
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;