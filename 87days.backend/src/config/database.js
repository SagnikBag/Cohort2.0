const mongoose = require("mongoose")

function connectToDb(){
 mongoose.connect("mongodb+srv://sagnik:sagnikbag2001@cluster0.wls5ced.mongodb.net/")
 .then(()=>{
  console.log("connected to database");
  
 })
}
module.exports = connectToDb