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
  },
  status: {
    type: String,
    default: "Pending",
  },
  createdDate: {
    type: Date,
    default: Date.now.toString,
  },
});

const Videos = mongoose.model("videos", videoSchema);
module.exports = Videos;
