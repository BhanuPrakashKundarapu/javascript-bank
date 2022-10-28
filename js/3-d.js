// //camel case
// let firstName ="bhanu ";
// // pascal caselet
// let LastName ="prakash ";
// // snake case
// let middle_name="kundarapu "
// // using const (const key word)
// const price=99;
// // course name(string)P
// var courseName=" java script DS/Algo course"

// // card number (number)
// var cardName ="0123456789 ";
// // payment status (boolean)
// var ispaid=true
// // declaring a variable 
// var modeOfPayment;
// // Taking the input from user
// modeOfPayment=prompt("mode of payment")
// // out put to user
// alert (firstName+"succesfully  bought "+ courseName+" using"+modeOfPayment);


// var cardnum=document.querySelector('.card-num').value;
// var Cvv =document.querySelector('.CVV').value;
// var pinum=document.querySelector('.pin-num').value;
// var enter=document.querySelector('.Enter');
// enter.addEventListener('click',find);

// function for open modal
// var openbtn=document.querySelector('.openbtn')
//  var modal=document.querySelector('.modal')
// var recipent=document.querySelector(".recipents").value;

// openbtn.addEventListener('click',openmodal)

// function openmodal(){
//      modal.style.display='block'
//     // console.log(recipent)
// }



// // function for close bottun

// var closebtn=document.querySelector('.closebtn');

// closebtn.addEventListener('click',closemodal)


// function closemodal(){
//     modal.style.display='none'
// }


function find(){
switch(Card) {
    case ((cardnum=456)&&(CVV=586)):
      if(pinnum=852){
        console.log("098765")
      }
      break;
    case((cardnum=654)&&(CVV=685)):
    if(pinnum=258){
      console.log("second cse")
    }
      break;
    default:
    console.log("you entered wrong details")
  }
}

