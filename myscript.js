let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

playGame();

function getComputerChoice(){
    let number = Math.random();
    if (number > 0.33 && number < 0.66){
        return rock;
    }
    else if (number < 0.33){
        return paper;
    }
    else 
    {
        return scissors;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const gameText = document.querySelector("p");
    const statusDiv = document.querySelector(".statusDisplay");

    const roundStatus = document.createElement("p");
    const scores = document.createElement("span");

    gameText.textContent ="Choose Rock, Paper or Scissors!"
    statusDiv.appendChild(roundStatus);
    statusDiv.appendChild(scores);


    const rockBtn = document.querySelector("#rock");    
    rockBtn.addEventListener("click", () =>{
        let compt = getComputerChoice();
        playRound(rock, compt);
    });

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        let compt = getComputerChoice();
        playRound(paper, compt);
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        let compt = getComputerChoice();
        playRound(scissors, compt);
    })

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("Draw!");
            console.log(`${humanScore} : ${computerScore}`);
            roundStatus.textContent = "Draw!";
            scores.textContent = `${humanScore} : ${computerScore}`;
        }
        else if ((humanChoice == rock && computerChoice == scissors) 
                || (humanChoice == scissors && computerChoice == paper)
                ||(humanChoice == paper && computerChoice == rock)){
            humanScore++;
            if (humanScore === 5) {results(humanScore, computerScore)};
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`${humanScore} : ${computerScore}`);
            roundStatus.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            scores.textContent = `${humanScore} : ${computerScore}`;
            
        }
        else {
            computerScore++;
            if(computerScore === 5) {results(humanScore, computerScore)};
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            console.log(`${humanScore} : ${computerScore}`);
            roundStatus.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
            scores.textContent = `${humanScore} : ${computerScore}`;
            
        }
    }

    function results(hScore, cScore){
        if (hScore > cScore){
            console.log(`You win! Final Score: ${hScore} : ${cScore}`)
            statusDiv.removeChild(scores);
            statusDiv.removeChild(roundStatus);
            gameText.textContent = `You win! Final Score: ${hScore} : ${cScore}`;
            newRound();
            
        }
        else {
            console.log(`You lose! Final Score ${hScore} : ${cScore}`);
            statusDiv.removeChild(scores);
            statusDiv.removeChild(roundStatus);
            gameText.textContent = `You lose! Final Score: ${hScore} : ${cScore}`;
            newRound();
        }
    }

    function newRound(){
        humanScore = 0;
        computerScore = 0;
        
        const body = document.querySelector("body");
        const nextBtn = document.createElement("button", "#newGame");

        body.appendChild(nextBtn);
        nextBtn.textContent = "New Game!"

        nextBtn.addEventListener("click", () => {
            playGame();
            body.removeChild(nextBtn);
        })
    }       
}









