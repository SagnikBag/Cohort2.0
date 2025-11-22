let keys = document.querySelectorAll(".key");
let sound = {
 "C": new Audio("./mp3piano/24.mp3"),
 "C#": new Audio("./mp3piano/29.mp3"),
 "D": new Audio("./mp3piano/36.mp3"),
 "D#": new Audio("./mp3piano/41.mp3"),
 "E": new Audio("./mp3piano/48.mp3"),
 
 "F": new Audio("./mp3piano/53.mp3"),
 "F#": new Audio("./mp3piano/60.mp3"),
 "G": new Audio("./mp3piano/64.mp3"),
 "G#": new Audio("./mp3piano/65.mp3"),
 "A": new Audio("./mp3piano/69.mp3"),
 "A#": new Audio("./mp3piano/72.mp3"),
 "B": new Audio("./mp3piano/77.mp3"),
}



keys.forEach(key =>{
 key.addEventListener("click",function(){
   console.log("hello");
   const note  = key.id;
   const audio = sound[note];
   audio.currentTime = 0
   audio.play()
   
 })
})
document.addEventListener("keydown",function(e){
 let audio = ""
 if(e.key.toLowerCase() == "q"){
  audio = sound["C"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "w"){
  audio = sound["C#"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "e"){
  audio = sound["D"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "r"){
  audio = sound["D#"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "t"){
  audio = sound["E"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "y"){
  audio = sound["F"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "a"){
  audio = sound["F#"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "s"){
  audio = sound["G"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "d"){
  audio = sound["G#"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "f" || "n"){
  audio = sound["A"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "g"){
  audio = sound["A#"]
  audio.currentTime = 0
   audio.play()
 }
 else if(e.key.toLowerCase() == "h"){
  audio = sound["B"]
  audio.currentTime = 0
   audio.play()
 }
 else{
  console.log("wrong press");
  
 }
})