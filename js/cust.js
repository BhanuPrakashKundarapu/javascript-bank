// // function for close bottun

// var closebtn=document.querySelector('.closebtn');

// closebtn.addEventListener('click',closemodal)


// function closemodal(){
//     modal.style.display='none'
// }


var navbutton=document.querySelector('.icon');
var navclose=document.querySelector('.cross');
var navbar=document.querySelector('.navbar-menu');
var coverimage=document.querySelector(".cover-image");


navbutton.addEventListener("click",buttonnav);
navclose.addEventListener("click",close)


function buttonnav(){
    navbar.style.display='block';
    navclose.style.display='block';
    navbutton.style.display='none';
    // coverimage.style.display='none';
}

function close(){
    navbar.style.display='none';
    navclose.style.display='none';
    navbutton.style.display='block'
    // coverimage.style.display='block';

}


