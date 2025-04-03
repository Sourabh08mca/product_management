const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CardModel = require('./models/Cards')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/product")

app.get('/',(req, res)=>{
    CardModel.find({})
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.post("/productform", (req, res) =>{
    CardModel.create(req.body)
    .then(cards =>res.json(cards))
    .catch(err => res.json(err))
})



app.listen(3001, () =>{
    console.log("server is Running")
})