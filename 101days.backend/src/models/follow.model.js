const  mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
 follwer:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"users",
  required:[true,"Follower is require"]
 },
 followee:{
  type :mongoose.Schema.ObjectId,
  ref:"users",
  required:[true,"Follwee is requred"]
 }
},
 {
  timestamps:true
})

const folowModel = mongoose.model("follows",followSchema)

module.exports = folowModel