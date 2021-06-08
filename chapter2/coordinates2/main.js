const horizontal=document.querySelector('.horizontal');
const vertical=document.querySelector('.vertical');
const target=document.querySelector('.target');
const info=document.querySelector('.info');

window.addEventListener('mousemove',(event)=>{
    horizontal.style.top=`${event.clientY}px`;
    vertical.style.left=`${event.clientX}px`;
    target.style.top=`${event.clientY}px`;
    target.style.left=`${event.clientX}px`;

    info.style.top=`${event.clientY+15}px`;
    info.style.left=`${event.clientX+30}px`;
    info.innerHTML=`${event.clientX}px ${event.clientY}px`


})