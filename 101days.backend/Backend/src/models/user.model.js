const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select:false
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/sagnik13/istockphoto-1495088043-612x612.jpg",
  },
});

const userModel = mongoose.model("users",userSchema)

module.exports = userModel