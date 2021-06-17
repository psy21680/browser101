const horizontal=document.querySelector('.horizontal');
const vertical=document.querySelector('.vertical');
const target=document.querySelector('.target');
const info=document.querySelector('.info');


addEventListener('load',()=>{
    const targetRect=target.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfWidth=targetRect.width/2;
    const targetHalfHeight=targetRect.height/2;


    window.addEventListener('mousemove',(event)=>{
    const x=event.clientX;
    const y=event.clientY;

    horizontal.style.transform=`translateY(${y}px)`;
    vertical.style.transform=`translateX(${x}px)`;
    target.style.transform=`translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;

    info.style.transform=`translate(${x+20}px,${y+20}px)`;
    info.innerHTML=`${x}px, ${y}px`;

    })
});


