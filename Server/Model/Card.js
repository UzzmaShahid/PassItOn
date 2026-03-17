const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  templateId: String,
  occasion: String,
  name: String,
  message: String,
  font: String,
  
// birthday only
  age: String,
  date: String,
  location: String,
}, { timestamps: true })

module.exports = mongoose.model('Card', cardSchema)