const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

async function followUserController(req,res){
 const followerUsername = req.user.username
 const followeeUsername = req.params.username



 if(followeeUsername === followerUsername){
  return res.status(400).json({
 message:"You can't follow yourself"
  })
 }
 
 const isfollweeExists = await userModel.findOne({
  username:followeeUsername
 })
 if(!isfollweeExists){
  return res.status(404).json({
    message:"User you are trying to follow does not exists"
  })
 }

 const isAlreadyFollowing = await followModel.findOne({
  follower: followerUsername,
  follwee:followeeUsername
 })
 const followRecord = await followModel.create({
  follwer:followerUsername,
  followee:followeeUsername

 })
 if(isAlreadyFollowing){
  return res.status(200).json({
    message:`You are already following ${followeeUsername}`,
    follow: isAlreadyFollowing
  })
 }
 res.status(201).json({
  message:`You are now following ${followeeUsername}`,
  follow:followRecord
 })
}

async function unfollowUserController(req,res){
  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  const isUserFollowing =await followModel.findOne({
    follwer: followerUsername,
    follwee:followeeUsername
  })

  if(!isUserFollowing){
    return res.status(200).json({
      message:`You are not following ${followeeUsername}`
    })
  }

  await followModel.findByIdAndDelete(isUserFollowing._id)

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername}`
  })
}
module.exports = {
  followUserController,
  unfollowUserController
} 