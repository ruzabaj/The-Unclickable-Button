const buttonHeight=20;
const buttonWidth=20;


const maxWidth= window.innerWidth-buttonWidth;
const maxHeight= window.innerWidth-buttonHeight;

const button= document.getElementById("btn-yes");

button.addEventListener('mouseover', ()=> {
    button.style.left= Math.floor(Math.random() *(maxWidth+1)) +'px';
    button.style.top= Math.floor(Math.random() *(maxHeight+1)) +'px';
})