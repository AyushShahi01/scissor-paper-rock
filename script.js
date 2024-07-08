console.log("script exicute");




let win=document.querySelector(".wins");
let life=document.querySelector(".life");
let userInput=document.querySelectorAll(".option");

let computer=document.querySelector(".comAction");
let comment=document.querySelector(".comment");
let player=document.querySelector(".playerAction");


function display(i){
    console.log("event listner worked  "+i);
}


function    computerAction(){
    let randomNum= Math.floor(Math.random()*3);
    switch (randomNum){
        case(0):
            computer.innerText="Stone";
            break;
        case(1):
            computer.innerText="Paper";
            break;
        case(2):
            computer.innerText="Scissor";
            break;
    }
    return randomNum;
}

function result(i,j){
    if(i==0){
        if(j==1){
            comment.innerText="Win";
            winCounter++;
            win.innerText=winCounter;
        }
        else if(j==1){
            comment.innerText="Lose";
            lifeConuter--;
            life.innerText=lifeCounter;
        }
        else{
            comment.innerText="Draw";
        }
    }
    if(i==1){
        if(j==2){
            comment.innerText="Win";
            winCounter++;
            win.innerText=winCounter;
        }
        else if(j==0){
            comment.innerText="Lose";
            lifeConuter--;
            life.innerText=lifeCounter;
        }
        else{
            comment.innerText="Draw";
        }
    }
    if(i==2){
        if(j==1){
            comment.innerText="Win";
            winCounter++;
            win.innerText=winCounter;
        }
        else if(j==0){
            comment.innerText="Lose";
            lifeConuter--;
            life.innerText=lifeCounter;
        }
        else{
            comment.innerText="Draw";
        }
    }
}

let winCounter=0;
let lifeConuter=3;
let playerMove;
let j;
win.innerText="Wins : "+winCounter;
life.innerText="Life = "+ lifeConuter;


for(let i=0; i<3; i++){
    userInput[i].addEventListener("click" , () =>{
        
        switch (i){
            case(0):
                player.innerText="Stone";
                j=computerAction();
                result(i,j);
                break;
            case(1):
                player.innerText="Paper";
                j=computerAction();
                result(i,j);
                break;
            case(2):
                player.innerText="Scissor";
                j=computerAction();
                result(i,j);
                break;
        }   
            

    });
}