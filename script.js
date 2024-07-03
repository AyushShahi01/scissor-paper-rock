console.log("script exicute");




let round=document.querySelector(".wins");
let life=document.querySelector(".life");
let userInput=document.querySelectorAll(".userInput");






let roundCounter=0;
let lifeConuter=3;
let playerMove;

round.innerText="Wins : "+roundCounter;
life.innerText="Life = "+ lifeConuter;


for(let i=0; i<3; i++){
    userInput[i].addEventListener("click",()=>{
        if(i==0){
            playerMove="rock";
            console.log(i);
        }
        else if(i==1){
            playerMove="paper";
            console.log(i);
        }
        else{
            playerMove="scissor";
            console.log(i);
        }
        
    });

}