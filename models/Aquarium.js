const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AquariumSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  phone: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      rating: {
        type: Number,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      visit: {
        type: Date,
      },

      date: {
        type: Date,
        default: Date.now,
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Aquarium = mongoose.model("aquarium", AquariumSchema);
