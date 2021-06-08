'use strict';

const img = document.getElementById("img");
const info = document.getElementById("info");
window.onmousemove = function(e){
    img.style.left = `${e.clientX-39}px`;
    img.style.top = `${e.clientY-39}px`; 

    info.style.left = `${e.clientX+30}px`;
    info.style.top = `${e.clientY+5}px`;
}

const html = document.querySelector("html");
html.addEventListener('mousemove',(event)=>{
    info.innerHTML=`${event.clientX}px   ${event.clientY}px`
})

