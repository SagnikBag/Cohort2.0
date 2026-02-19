const express =require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

 const userRouter = express.Router()


 // follow user
userRouter.post("/follow/:username", identifyUser, userController.followUserController);


userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)
 module.exports = userRouter