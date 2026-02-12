const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{
   type:String,
   unique:[true,"user name already exists"],
   required:[true,'user name is requred']
  },
  email:{
   type:String,
   unique:[true,"Email alrady exists"],
   required:[true,"Email required"]
  },
  password:{
   type:String,
   required:[true,"Password is required"]
  },
  bio: String,
  profileImage:{
   type:String,
   default:""
  }
})