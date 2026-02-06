const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  description: String,
  age: String,
  title: String,
}); 

const noteModel = mongoose.model("store",noteSchema)

module.exports = noteModel