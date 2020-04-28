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
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
