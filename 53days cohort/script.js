let p = document.querySelector("p");
const text  = p.innerText;

let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let iteration = 0;

function randomText(){
 
  let str = text.split("").map(function(char,index){
   if(index<iteration){
    return char
   }
   return character.split()[Math.floor(Math.random()*53)]
  }).join("")
 
  iteration += 0.2
 
 p.innerText = str
}

// setInterval(function(){
//  randomText()
// },30)

p.addEventListener("mouseover",function(){
 setInterval(function(){
  randomText()
 },200)
}
)