const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

const Reviews = mongoose.model("reviews", reviewSchema);
module.exports = Videos;