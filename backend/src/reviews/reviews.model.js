const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema(
    {
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    },
    { timestamps: true }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;



