const posts = [
 {
   username: "sagnik_bag",
   likeCount: 1200,
   isLiked: true,
   isFollowed: false,
   shareCount: 50,
   commentCount: 230,
   caption: "Enjoying the sunset vibes 🌅✨",
   video: "./video/video1.mp4",
   userProfile: "https://example.com/profile1.jpg"
 },
 {
   username: "rahul_dev",
   likeCount: 890,
   isLiked: false,
   isFollowed: true,
   shareCount: 20,
   commentCount: 120,
   caption: "JavaScript is love ❤️",
   video: "./video/video2.mp4",
   userProfile: "https://example.com/profile2.jpg"
 },
 {
   username: "coding_girl",
   likeCount: 4500,
   isLiked: true,
   isFollowed: true,
   shareCount: 145,
   commentCount: 980,
   caption: "Building UI with React ⚛️",
   video: "./video/video3.mp4",
   userProfile: "https://example.com/profile3.jpg"
 },
 {
   username: "tech_world",
   likeCount: 2120,
   isLiked: false,
   isFollowed: false,
   shareCount: 60,
   commentCount: 300,
   caption: "New tech drops every week! 🚀",
   video: "./video/video4.mp4",
   userProfile: "https://example.com/profile4.jpg"
 },
 {
   username: "fitness_pro",
   likeCount: 3300,
   isLiked: true,
   isFollowed: true,
   shareCount: 95,
   commentCount: 430,
   caption: "Morning workout done 💪🔥",
   video: "./video/video5.mp4",

   userProfile: "https://example.com/profile5.jpg"
 },
 {
   username: "travel_diaries",
   likeCount: 5600,
   isLiked: false,
   isFollowed: true,
   shareCount: 210,
   commentCount: 1500,
   caption: "Beach days are the best 🌊☀️",
   video: "./video/video6.mp4",

   userProfile: "https://example.com/profile6.jpg"
 },
 {
   username: "foodie_life",
   likeCount: 2700,
   isLiked: true,
   isFollowed: false,
   shareCount: 80,
   commentCount: 350,
   caption: "Homemade pizza hits different 🍕🔥",
   video: "./video/video7.mp4",

   userProfile: "https://example.com/profile7.jpg"
 },
 {
   username: "photography_king",
   likeCount: 4200,
   isLiked: false,
   isFollowed: true,
   shareCount: 160,
   commentCount: 700,
   caption: "Clicked this masterpiece 📸✨",
   video: "./video/video8.mp4",

   userProfile: "https://example.com/profile8.jpg"
 },
 {
   username: "music_vibes",
   likeCount: 1990,
   isLiked: true,
   isFollowed: false,
   shareCount: 40,
   commentCount: 240,
   caption: "Vibing with new beats 🎵🔥",
   video: "./video/video9.mp4",

   userProfile: "https://example.com/profile9.jpg"
 },
 {
   username: "daily_quotes",
   likeCount: 3100,
   isLiked: false,
   isFollowed: true,
   shareCount: 120,
   commentCount: 510,
   caption: "Believe in yourself. Always. ✨",
   video: "./video/video10.mp4",

   userProfile: "https://example.com/profile10.jpg"
 },
 {
  username: "daily_quotes",
  likeCount: 3100,
  isLiked: false,
  isFollowed: true,
  shareCount: 120,
  commentCount: 510,
  caption: "Believe in yourself. Always. ✨",
  video: "./video/video11.mp4",

  userProfile: "https://example.com/profile10.jpg"
},
{
 username: "daily_quotes",
 likeCount: 3100,
 isLiked: false,
 isFollowed: true,
 shareCount: 120,
 commentCount: 510,
 caption: "Believe in yourself. Always. ✨",
 video: "./video/video12.mp4",

 userProfile: "https://example.com/profile10.jpg"
}
];

var allReels = document.querySelector(".allReels") 


function addData(){
  let sum = ""
posts.forEach(function(elem,idx){
sum += `    <div class="reel">
<video autoplay loop muted src="${elem.video}"></video>
<div class="bottom">
<div class="user">
<img src= ${elem.userProfile}alt="">
<h4>${elem.username}</h4>
<button>Follow</button>
</div>
<h3>${elem.caption}</h3>
</div>
<div class="right">
 <div id= ${idx} class="like">
  <h4 class="like-icon">${elem.isLiked? '<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
  <h6>${elem.likeCount}</h6>
 </div>
 <div class="comment">
  <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
  <h6>${elem.commentCount}</h6>
 </div>
 <div class="share">
  <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
  <h6>${elem.shareCount}</h6>
 </div>
 <div class="menu">
  <h4 class="menu-icon"><i class="ri-more-2-line"></i></i></h4>
 
 </div>
</div>
</div>`
 
})
allReels.innerHTML = sum;

}
addData()

allReels.addEventListener("click",function(dets){
if(!posts[dets.target.id].isLiked){
  posts[dets.target.id].likeCount++
  posts[dets.target.id].isLiked = true

}else{
  posts[dets.target.id].likeCount--
  posts[dets.target.id].isLiked = false
}
addData()
  
})