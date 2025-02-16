const { Schema, model, default: mongoose } = require('mongoose');

const ProductSchema = new mongoose.Schema({


    name: { type: String, required: true },
    category: String,

    description: String,
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    image: String,
    color: String,
    rating: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }


})

const Products = mongoose.model("Product", ProductSchema)

module.exports = Products;