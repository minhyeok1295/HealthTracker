/* User mongoose model */
const mongoose = require('mongoose');

const ReminderItem = mongoose.model('ReminderItem', {
  category: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  subCategory: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    minlegth: 10,
    trim: true,
  },
  note: {
    type: String,
    required: false,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
});

module.exports = { ReminderItem };
