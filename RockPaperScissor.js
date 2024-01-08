let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    //rock, paper or scissor
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! Try Again ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log(`User choice = ${userChoice}`);
    //Generating computer choice
    const compChoice = getCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(userChoice===compChoice){
        //Draw
        console.log("Game is draw.");
        msg.innerText = "Game was draw! Play Again";
        msg.style.backgroundColor = "#081b31";
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp has scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } 
        else if(userChoice==="paper"){
            //comp has rock or scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //comp has rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


