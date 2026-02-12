const mongoose = require("mongoose")

function connectToDb(){
 mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
  console.log('connect to db on port 3000');
  
 })
}
module.exports = connectToDb