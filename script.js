let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const genAiChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}; 

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "blue";

};

const showWinner = (userWin , userChoice , aiChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! your ${(userChoice)} beats ${(aiChoice)}`;
        msg.style.backgroundColor = "green";
    } else {
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose! ${(aiChoice)} beats yours ${(userChoice)}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    const aiChoice = genAiChoice();
    console.log("AI Choice =", aiChoice);

    if(userChoice === aiChoice ) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = aiChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = aiChoice === "scissors" ? false : true;
        } else {
            userWin = aiChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , aiChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");  
        playGame(userChoice);
    });
});
 