console.log("script exicute");




let round=document.querySelector(".wins");
let life=document.querySelector(".life");
let userInput=document.querySelectorAll(".userInput");



function input(i){
    console.log(i);
}


let roundCounter=0;
let lifeConuter=3;
let playerMove;

round.innerText="Wins : "+roundCounter;
life.innerText="Life = "+ lifeConuter;




for(let i=0; i<3; i++){
    userInput[i].addEventListener("click",input(i));

}