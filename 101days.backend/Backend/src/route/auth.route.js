const express = require("express")
const authController = require("../controllers/auth.controller")
const identyfyUser = require("../middlewares/auth.middleware")


 const authRouter = express.Router()

 // post /api/auth/register

 authRouter.post('/register',authController.registerController)
 // post /api/auth/login
 authRouter.post('/login',authController.loginController )

 authRouter.get('/get-me',identyfyUser,authController.getMeController)



 module.exports = authRouter  