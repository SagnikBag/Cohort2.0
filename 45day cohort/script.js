let btn = document.getElementById("button");
let h2 = document.getElementById("h2");
let inner = document.getElementsByClassName("inner")
let grow = 0


btn.addEventListener("click", function(){
 let x = Math.random()*100;
 setInterval(function(){
grow++
  h2.innerText = grow + "%" 
 })

},1000)