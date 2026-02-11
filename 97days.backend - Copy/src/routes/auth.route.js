const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()
const crypto = require("crypto")

authRouter.post("/register", async(req,res)=>{
 const {email,name,password} = req.body

 const isUserAlreadyExists = await userModel.findOne({email})

 if(isUserAlreadyExists){
  return res.status(200).json({
   message:"User  email already exists"
  })
 }
 const hash = crypto.createHash("md5").update(password).digest("hex")

 const user = await userModel.create({
  email, name, password:hash
 })

const token = jwt.sign({
 id: user._id,
 email:user.email
},
process.env.JWT_SECRET
)

res.cookie("jwt_token",token)



 res.status(201).json({
  message:"user registered",
  user,
  token
 })
})

// authRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;

<<<<<<< HEAD
//   const user = await userModel.findOne({ email });

//   if (!user) {
//     return res.status(404).json({ message: "user not found" });
//   }

//   const isPasswordMatched =
//     user.password === crypto.createHash("md5").update(password).digest("hex");

//   if (!isPasswordMatched) {
//     return res.status(401).json({ message: "invalid password" });
//   }

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//   res.cookie("jwt_token", token);

//   res.status(200).json({
//     message: "user logged in",
//     user,
//   });
// });

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found with this email address",
    });
  }

  const isPasswordMatched =
    user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user logged in",
    user,
  });
});
=======
authRouter.post("/login", async (req, res) => {

 const { email, password } = req.body

 const user = await userModel.findOne({ email })

 if (!user) {
   return res.status(404).json({ message: "user not found" })
 }

 const isPasswordMatched =
   user.password === crypto.createHash("md5").update(password).digest("hex")

 if (!isPasswordMatched) {
   return res.status(401).json({ message: "invalid password" })
 }

 const token = jwt.sign(
   { id: user._id },
   process.env.JWT_SECRET
 )

 res.cookie("jwt_token", token)

 res.status(200).json({
   message: "user logged in",
   user
 })
})

// authRouter.post("/login",async(req,res)=>{
//  const {email,password} =  req.body
//  const user = await userModel.findOne({email})
>>>>>>> cf6c2814d30a032e3954dbfe4e20956e48c66264



<<<<<<< HEAD
module.exports = authRouter
=======
// res.status(200).json({
//  message: "user logged in",
//  user
// })
// })
module.exports = authRouter
>>>>>>> cf6c2814d30a032e3954dbfe4e20956e48c66264
