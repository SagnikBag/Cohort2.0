import userModel from "../models/user.model.js";
import  jwt from "jsonwebtoken";
import {sendEmail} from "../services/mail.service.js"

export async function register(req,res){

 const {username,email,password} = req.body;

 const isUserAlreadyExists = await userModel.findOne({
  $or: [{email} , {username}]
 })

  if(isUserAlreadyExists){
   return res.status(400).json({
    message:"User with this email or username already exists",
    success:false,
    err: "User already exists"
   })
  }

  const user = await userModel.create({username,email,password})

  const emailVerificationToken = jwt.sign({
    email:user.email,
  },process.env.JWT_SECRET)

  await sendEmail({
    to: email,
    subject : "Welcome to perplexity",
    // text: `Hi ${username},\n\nThnak you for registering at perplexity,We're exited to have you on board!\n\nBest regards,\nThe Perplexity Team.`,
    html: `<p>Hi ${username},</p>
    <p>Thank you for registering at Perplexity, We're excited to have you on board!</p>
    <p>Please verify your email by clicking the link below:</p>
    <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
    <p>If you did not register for an account, please ignore this email.</p>    
    <p>Best regards,<br>The Perplexity Team.</p>`
  })
  res.status(201).json({
    message:"User registered successfully",
    success:true,
    user:{
      id:user._id,
      username:user.username,
      email:user.email
    }
  })
}
export async function verifyEmail(req,res){
    try {
      const {token} =  req.query

      if(!token){
        return res.status(400).json({
          message:"Token not provided",
          success:false,
          err:"Token is required"
        })
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await userModel.findOne({email:decoded.email})

      if(!user){
        return res.status(404).json({
          message:"Invalid token",
          success:false,
          err:"User not found"
        })
      }

      user.verified = true;
      await user.save();
      
    const html = 
    `<h1>Email Verified Successfully</h1>
    <p>Thank you for verifying your email. Your account has been successfully verified.</p>
    <a href="http://localhost:3000/login">Click here to login</a>
    `

     return res.send(html)
    } catch(err) {
      return res.status(400).json({
        message:"Invalid or expired token",
        success:false,
        err:err.message
      })
    }
    
}
export async function login(req,res){
  const {email,password} =  req.body

  const user = await userModel.findOne({email})

  if(!user){
    return res.status(404).json({
      message:"Invalid email or password",
      success:false,
      err:"User not found"
  })
 }
 const isPasswordMatch = await user.comparePassword(password)

 if(!isPasswordMatch){
 return res.status(404).json({
    message:"Invalid email or password",
    success:false,
    err:"Incorrect password"
})
 }
 if(!user.verifued){
  return res.status(400).json({
    message:"Please verify your email before logging in",
    success:false,
    err:"Email not verified"
  })
 }
 const token = jwt.sign({
  id:user._id,
  username:user.username,
  email:user.email
 },process.env.JWT_SECRET,{
  expiresIn:"7d"
 })

 res.cookie("token",token,)
 res.status(200).json({
  message:"Login successful",
  success:true,
  user:{
    id:user._id,
    username:user.username,
    email:user.email
  }
 })
}