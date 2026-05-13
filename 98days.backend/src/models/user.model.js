const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
 name:String,
 password:String,
 email:{
  type:String,
  unique:[true,"with this email user account already exists"]
 }
}) 

 const userModel = mongoose.model("users",userSchema)

module.exports = userModel 