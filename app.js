let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPoint=document.querySelector("#user-score");
const compPoint=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const option =["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
    
}



const drawGame=()=>{
   
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,compComput,userChoice)=>{
    if(userWin){

        userScore++;
        userPoint.innerText=userScore;
        msg.innerText="You won.Your "+userChoice+" beats "+compComput;
       msg.style.backgroundColor="green";


       
    }
    else{
        compScore++;
        compPoint.innerText=compScore;
    msg.innerText="You lose . "+compComput+" beats your "+userChoice;
    msg.style.backgroundColor="red";
    }
    

}

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compComput=genComputerChoice();
    console.log("Computer="+compComput);

    if(userChoice===compComput){
        drawGame();
    }

    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compComput==="scissor"?true:false;
        }
        else if(userChoice==="paper"){
            userWin=compComput==="rock"?true:false;
        }
        else {
            userWin=compComput==="paper"?true:false;
        }
    
       showWinner(userWin,compComput,userChoice);
    }
};

choices.forEach((choice )=> {
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        // console.log("choice was clicked "+userChoice);
        playGame(userChoice);
        // console.log("computer= "+genComputerChoice());
    });
    
});