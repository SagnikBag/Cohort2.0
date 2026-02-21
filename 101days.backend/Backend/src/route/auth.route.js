const express = require("express")
const authController = require("../controllers/auth.controller")
const identyfyUser = require("../middlewares/auth.middleware")


 const authRouter = express.Router()

 // post /api/auth/register

 authRouter.post('/register', identyfyUser,authController.registerController)
 // post /api/auth/login
 authRouter.post('/login',identyfyUser,authController.loginController )

 authRouter.get('/get-me',identyfyUser,authController.getMeController)



 module.exports = authRouter  