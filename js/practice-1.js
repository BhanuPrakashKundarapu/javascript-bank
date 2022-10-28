var btn=document.querySelector(".btn");
btn.addEventListener("click",find);
var data=document.querySelector(".CVV");
var DATE=document.querySelector(".DAte");

function find(){
    var card=document.querySelector(".card").value;
var amount=document.querySelector(".AMOUNT").value;

    var output=document.querySelector(".output")
    var user1=630034586536;
    var user2=763956723434;
    var user3=678943562456;
    var user4=653443533545;
    var user5=653278904589;
    var user6=765778902907;
    var user7=767627279191;
    var user8=638378924413;
    var user9=653467268287;
console.log(card);
    if(card==user1){
        output.innerHTML="bhanu prakash "+"payment : :"+amount+" car no :"+card;
    }
    else if(card==user2){
        output.innerHTML="srikanth "+"payment :"+amount+"card no :"+card;
    }else if(card==user3){
        output.innerHTML="prabhas "+"payment :"+amount+"card no :"+card;
    }else if(card==user4){
        output.innerHTML="allu arjun "+"payment :"+amount+"card no :"+card;
    }else if(card==user5){
        output.innerHTML="balakrishna "+"payment :"+amount+"card no :"+card;
    }else if(card==user6){
        output.innerHTML="nagachaitnya "+"payment :"+amount+"card no :"+card;
    }else if(card==user7){
        output.innerHTML="nandhamuri tarak "+"payment :"+amount+"card";
    }else if(card==user8){
        output.innerHTML="ramcharan "+"payment :"+amount+"card no :"+card;
    }else if(card==user9){
        output.innerHTML="nani "+"payment :"+amount+"card no :"+card;
    }else{
        output.innerHTML="you have entered wrong details";
    }
}
