const mongoose = require("mongoose");

const donor = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Donor Registration", donor);
