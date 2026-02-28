  const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()})
const identyfyUser = require("../middlewares/auth.middleware")




postRouter.post("/",upload.single("image"),identyfyUser,postController.createPostController)
postRouter.get("/",identyfyUser,postController.getPostController)
postRouter.get("/details/:postId",identyfyUser,postController.getPostDetailsController)
postRouter.post("/like/:postId",identyfyUser,postController.likepostController)
postRouter.post("/unlike/:postId",identyfyUser,postController.unlikepostController)
postRouter.get("/feed", postController.getFeedController);

module.exports = postRouter