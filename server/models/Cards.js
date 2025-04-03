const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    category: String,
    stock: Number

})

const CardModel = mongoose.model("cards", CardSchema)
module.exports = CardModel