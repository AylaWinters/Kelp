const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    // connect to UserSchema
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  fishpersonality: {
    type: String,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
