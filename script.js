console.log("script exicute");




let round=document.querySelector(".wins");
let life=document.querySelector(".life");
let userInput=document.querySelectorAll(".userInput");

display(){
    console.log("event listner worked");
}

function input(i){
    console.log(i);
}


let roundCounter=0;
let lifeConuter=3;
let playerMove;

round.innerText="Wins : "+roundCounter;
life.innerText="Life = "+ lifeConuter;



userInput[0].addEventListener("click",display())