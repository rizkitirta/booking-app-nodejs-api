const mongoose = require("mongoose");
// const { Schema } = mongoose

const Hotel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
        required: true
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    lat: {
        type: String,
        required: false
    },
    long: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Hotel", Hotel)