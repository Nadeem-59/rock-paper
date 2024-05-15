const { default: Choice } = require("inquirer/lib/objects/choice");

let userScore = 1;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper,scissors

};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw .play again";
};

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win !");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "pink";
    } else {
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor = "purple";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate computer choice
    const genCompChoice = genCompChoice();
    console.log("user choice =",genCompChoice); 

    if(userChoice === genCompChoice) {
        //draw condition
        drawGame();
    } else {
        let userWin =true;
        if(userChoice ==="rock") {
            //scissor,paper
           userWin = genCompChoice ==="paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock,scissors 
         userWin =genCompChoice === "scissors" ? false : true;
        } else {
            //rock,paper
         userWin  = genCompChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    };


choices.forEach((Choice) => {
    
    Choice.addEventListener("click", () => {
        const userchoice= genCompChoice.getAttribute("id")
        playGame(genCompChoice);

    });
});