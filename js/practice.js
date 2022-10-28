// window.addEventListener('resize', function(event){
//     var newWidth = window.innerWidth;
//     var newHeight = window.innerHeight; 
// });


// function for open modal
var openbtn=document.querySelector('.openbtn')
 var modal=document.querySelector('.modal')
var recipent=document.querySelector(".recipents").value;
var custmodal=document.querySelector('.cust');
var bars=document.querySelector('#bars'); 
var cross=document.querySelector("#cross")
bars.addEventListener('click',custmerModal)
cross.addEventListener('click',cutmermodalclose)
openbtn.addEventListener('click',openmodal)

function openmodal(){
     modal.style.display='block'
    // console.log(recipent)
}



// function for close bottun

var closebtn=document.querySelector('.closebtn');

closebtn.addEventListener('click',closemodal)


function closemodal(){
    modal.style.display='none'
}

function custmerModal(){
    custmodal.style.display='block'
    bars.style.display='none'
}
function cutmermodalclose(){
    custmodal.style.display='none'
    bars.style.display='block'
}

// // bank credentials script

// addEventListener

// function gdhsu(){
//     if(){
//         if(){
            // window.
//         }else{

//         }
//     }else if(){
//         if(){

//         }else{

//         }
//     }else if(){
//         if(){

//         }else(){

//         }
//     }
// }


// // // bank credentials script
var modal2=document.querySelector('.modal-2');
var Enter=document.querySelector('.Enter');



Enter.addEventListener('click',details);

function details(){
    var card=document.querySelector('.color');
    var cardnum=document.querySelector('.card-num').value;
    var CVV=document.querySelector('.CVV').value;
    var pinnum=document.querySelector('.pin-num').value;
    var pin=document.querySelector(".pin");

    if(cardnum==475587559755 && CVV==789){
        if(pinnum==1410){
            location.href = "/java-3/html/david.html";
        }else{
            function reload(){
                alert("wrong pin num");
                location.reload();
                }
                reload();
        };
    }else if(cardnum==557455785579 && CVV==987){
        if(pinnum==1411){
            location.href = "/java-3/html/anunavi.html";
        }else{
            function reload(){
                alert("wrong pin num");
                location.reload();
                }
                reload();
        };
    }else if(cardnum==630011347878 && CVV==878){
        if(pinnum==1002){
            location.href = "/java-3/html/abraham.html";
        }else{
            function reload(){
                alert("wrong pin num");
                location.reload();
                }
                reload();
        }; 
    }else if(cardnum==622110104300 && CVV==289){
        if(pinnum==8799){
            window.location.href = "/java-3/html/donald.html";
        }else{
            function reload(){
            alert("wrong pin num");
            location.reload();
            }
            reload();
//          
        };
    }else if(cardnum==980076552677 && CVV==456){
        if(pinnum==9099){
            window.location.href = "/java-3/html/hyndhavi.html";
        }else{
            function reload(){
                alert("wrong pin num");
                location.reload();
                }
                reload();
        };
    }else if(cardnum==101021006790 && CVV==678){
        if(pinnum==8999){
            window.location.href = "/java-3/html/krishna.html";
        }else{
            function reload(){
                alert("wrong pin num");
                location.reload();
                }
                reload();
        };
    }else{
        function reload(){
        alert("you entered worng details");

            location.reload();
        }
        reload();
    }



// time interval function
    // modal function
    function abc(){
        modal2.style.display="block"
        // child function
        function bca(){
            modal.style.display='none'
        }
        setInterval(bca(),5000)
    }
    abc()
   
    setInterval(function(){
        card.style.display='none';
     },60)
 };
  
 setInterval(function(){
    modal2.style.display='none'
    
},5000) 




 

