let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";




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

function getHumanChoice(){
    let choice = prompt("Please choose Rock, Paper or Scissors.");
    choice = choice.toLowerCase();
    console.log(choice);

    if (choice == "rock"){
        return rock;
    }
    else if (choice == "paper"){
        return paper;
    }
    else if (choice == "scissors"){
        return scissors;
    }
    else{
        console.log("Invalid Input");
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("Draw!");
        }
        else if ((humanChoice == rock && computerChoice == scissors) 
            || (humanChoice == scissors && computerChoice == paper)
            ||(humanChoice == paper && computerChoice == rock)){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`${humanScore} : ${computerScore}`);
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            console.log(`${humanScore} : ${computerScore}`);
        }
    }

    function results(humanScore, computerScore){
        if (humanScore > computerScore){
            console.log(`You win! Final Score: ${humanScore} : ${computerScore}`)
        }
        else {
            console.log(`You lose! Final Score ${humanScore} : ${computerScore}`);
        }
    }

    for (let rounds = 0; rounds < 5; rounds++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    results(humanScore, computerScore);

    
}

playGame();