let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let cap = document.querySelector("#cap")
let sta = document.querySelector("#sta")
let tro = document.querySelector("#tro")
let main = document.querySelector("main")
let box = document.querySelector("#box")
let box2 = document.querySelector("#box2")
let logoImg = document.querySelector("#logoImg");
let stadiumImg = document.querySelector("#stadiumImg");

let ipl = [
 {
  team: "kkr",
  primary: "gold",
  secondary: "purple",
  captain: "Ajnkia Rahane",
  stadium: "Eden Garden",
  stadiumImg: "https://www.cricketassociationofbengal.com/images/eden2.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
  trophy: 3
 },
 {
  team: "csk",
  primary: "yellow",
  secondary: "blue",
  captain: "MS Dhoni",
  stadium: "Chepak",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/IPL_2018_-_CSK_vs_KXIP.jpg/500px-IPL_2018_-_CSK_vs_KXIP.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/345px-Chennai_Super_Kings_Logo.svg.png",
  trophy: 5
 },
 {
  team: "MI",
  primary: "blue",
  secondary: "gold",
  captain: "Hardik Pandya",
  stadium: "Wankhede",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wankhede_ICC_WCF.jpg/330px-Wankhede_ICC_WCF.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/345px-Mumbai_Indians_Logo.svg.png",
  trophy: 5
 },
 {
  team: "PBKS",
  primary: "pink",
  secondary: "white",
  captain: "shreyas Iyar",
  stadium: "MUllanpur",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Punjab_Cricket_Association_Stadium%2C_DLF_Mullanpur.jpg/330px-New_Punjab_Cricket_Association_Stadium%2C_DLF_Mullanpur.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/255px-Punjab_Kings_Logo.svg.png",
  trophy: 0
 },
 {
  team: "SRH",
  primary: "orangr",
  secondary: "black",
  captain: "Pat Cummins",
  stadium: "UPPAL",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg/330px-Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/345px-Sunrisers_Hyderabad_Logo.svg.png",
  trophy: 1
 },
 {
  team: "RR",
  primary: "blue",
  secondary: "pink",
  captain: "Sanju Samson",
  stadium: "Swai mansing",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sawai-Mansingh-Stadium-Jaipur.jpg/330px-Sawai-Mansingh-Stadium-Jaipur.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/345px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
  trophy: 1
 },
 {
  team: "RCB",
  primary: "red",
  secondary: "black",
  captain: "Rajat PAtidar",
  stadium: "Chinnaswami",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chinnaswamy_Stadium.jpg/330px-Chinnaswamy_Stadium.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/320px-Royal_Challengers_Bengaluru_Logo.svg.png",
  trophy: 1
 },
 {
  team: "GT",
  primary: "gray",
  secondary: "black",
  captain: "Shubman Gill",
  stadium: "Modi stadium",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Narendra_modi_stadium_2023_Final_between_India_and_Australia.jpg/330px-Narendra_modi_stadium_2023_Final_between_India_and_Australia.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/375px-Gujarat_Titans_Logo.svg.png",
  trophy: 1
 },
 {
  team: "LSG",
  primary: "skyblue",
  secondary: "red",
  captain: "Rishv Pant",
  stadium: "ATAL Bihari Stadium",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ekana_cricket_stadium_.jpg/330px-Ekana_cricket_stadium_.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/345px-Lucknow_Super_Giants_IPL_Logo.svg.png",
  trophy: 1
 },
 {
  team: "DD",
  primary: "green",
  secondary: "red",
  captain: "Axar Patel",
  stadium: "Arun jaitly ",
  stadiumImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ekana_cricket_stadium_.jpg/330px-Ekana_cricket_stadium_.jpg",
  logoImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/345px-Lucknow_Super_Giants_IPL_Logo.svg.png",
  trophy: 1
 }
];

btn.addEventListener("click",function(){
 let winner = ipl[Math.floor(Math.random()*ipl.length)]
 console.log(winner);

 h1.innerText =` Team:${winner.team}`
 cap.innerText = ` Captain:${winner.captain}`
 sta.innerText =` Stadium:${winner.stadium}`
 tro.innerText =` Trophy:${ winner.trophy}`
 box.style.backgroundColor = winner.primary
 box2.style.backgroundColor = winner.secondary
 logoImg.src = winner.logoImg;
  stadiumImg.src = winner.stadiumImg;
})
