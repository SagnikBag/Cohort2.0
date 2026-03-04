const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model") // adjust path

async function identyfyUser(req,res,next){
 const token = req.cookies.token;

 if (!token) {
   return res.status(401).json({
     message: "Token not provided, Unauthorized access",
   });
 }
 let decoded;
 try {
   decoded = jwt.verify(token, process.env.JWT_SECRET);
 } catch {
   return res.status(401).json({
     message: "user not authorized",
   });
 }
 
 req.user = decoded 
 next()
 
}
module.exports =  identyfyUser