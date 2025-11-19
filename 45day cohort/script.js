let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
var inner = document.querySelector(".inner")
let grow = 0


btn.addEventListener("click",function(){
  btn.style.pointerEvents = "none"

  let num = Math.floor( Math.random()*50)+50


   let int = setInterval(() => {
    grow++
    h2.innerHTML =  grow + "%";
    inner.style.width = grow + "%"
    }, num);


    setTimeout(() => {
      clearInterval(int)
        btn.innerHTML = "khatam"
        btn.style.opacity = 0.5
    }, num*100);

})