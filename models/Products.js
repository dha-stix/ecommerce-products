const express = require("express")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image_url: {type: String, required: true}
})

module.exports = mongoose.model('Products', ProductSchema)