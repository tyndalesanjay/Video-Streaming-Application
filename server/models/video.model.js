const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  releaseDate: {
    type: String,
    required: true
  },
  videoName: {
    type: String,
    required: true
  },
  videoImage: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending",
  },
  reviews: [
    {
      username: {
        type: String,
        required: true
      },
      review: {
        type: String,
        required: true
      }
    }
  ]
});

const Videos = mongoose.model("videos", videoSchema);
module.exports = Videos;
