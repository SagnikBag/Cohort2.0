let btn = document.querySelector("button");
let main = document.querySelector("main");

var arr = ['Hey! I am Sarthak','Sheryians is Best.','Anubhav is handsome','harsh bhaiya is great.','JS is Love','Keep practicing guys...']

btn.addEventListener("click",function(){
let h1 = document.createElement("h1");

let x = Math.random()*80;
let y = Math.random()*80
let a =Math.floor(Math.random()*arr.length)
let c1 = Math.floor(Math.random()*256);
let c2 = Math.floor(Math.random()*256);
let c3 = Math.floor(Math.random()*256);  
let rot = Math.random()*360

h1.innerText = arr[a]
h1.style.position = "absolute";
h1.style.top = x + "%";
h1.style.left = y + "%"
h1.style.rotate = rot + "deg"

main.appendChild(h1)

})