let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerMove = ""
    let random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            computerMove = "rock";
            break
        case 2:
            computerMove = "paper";
            break
        default:
            computerMove = "scissors";     
    }

    return computerMove
}

function getHumanChoice() {
    humanMove = prompt("Rock, Paper, or Scissors? ");

    return humanMove.toLowerCase()
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie")
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win!! Rock beats Scissors")
            humanScore += 1
        } else if (computerChoice == "paper") {
            console.log("You lost!! Paper beats Rock")
            computerScore += 1
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!! Scissors beats Paper")
            computerScore += 1
        } else if (computerChoice == "rock") {
            console.log("You win!! Rock beats Scissors")
            humanScore += 1
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose!! Scissors beats Paper")
            computerScore += 1
        } else if (computerChoice == "paper") {
            console.log("You win!! Paper beats Scissors")
            humanScore += 1
        }
    }
}

playRound(humanChoice, computerChoice);
console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
