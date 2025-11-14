let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let h2 = document.querySelector("h2")



inc.style.color = ("green")
inc.style.backgroundColor = ("gray")
dec.style.color = ("red")
dec.style.backgroundColor = ("gray")
let point = 0
inc.addEventListener("click",function(){
  point++
  h2.innerText = point
})

dec.addEventListener("click",function(){
 point--
 h2.innerText = point
})