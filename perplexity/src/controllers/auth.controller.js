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

  const emailVerificationToekn = jwt.sign({
    email:user.email,
  },process.env.JWT_SECRET)

  await sendEmail({
    to: email,
    subject : "Welcome to perplexity",
    // text: `Hi ${username},\n\nThnak you for registering at perplexity,We're exited to have you on board!\n\nBest regards,\nThe Perplexity Team.`,
    html: `<p>Hi ${username},</p>
    <p>Thank you for registering at Perplexity, We're excited to have you on board!</p>
    <p>Please verify your email by clicking the link below:</p>
    <a href="http://localhost:3000/api/auth/verifytoken=${emailVerificationToekn}">Verify Email</a>
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
    const {token} =  req.query

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
    
    res.sendHtml(`<h1>Email verified successfully</h1>
      <p>Thank you for verifying your email.</p>`
    )
    
  }