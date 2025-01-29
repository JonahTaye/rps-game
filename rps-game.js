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
    } else if (humanChoice == "rock" || computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("You win!! Paper beats Rock")
            humanScore += 1
        } else if (computerChoice == "paper") {
            console.log("You lose!! Paper beats Rock")
            computerScore += 1
        } else if (humanChoice == "scissors") {
            console.log("You lose!! Rock beats Scissors")
            computerScore += 1
        } else if (computerChoice == "scissors") {
            console.log("You win!! Rock beats Scissors")
            humanScore += 1
        }
    } else if (humanChoice == "paper" || computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("You lose!! Paper beats Rock")
            computerScore += 1
        } else if (computerChoice == "rock") {
            console.log("You win!! Paper beats Rock")
            humanScore += 1
        } else if (humanChoice == "scissors") {
            console.log("You win!! Scissors beats Paper")
            humanScore += 1
        } else if (computerChoice == "scissors") {
            console.log("You lose!! Scissors beats Paper")
            computerScore += 1
        }
    } else if (humanChoice == "sicssors" || computerChoice == "sicssors") {
        if (humanChoice == "paper") {
            console.log("You lose!! Scissors beats Paper")
            computerScore += 1
        } else if (computerChoice == "paper") {
            console.log("You win!! Scissors beats Paper")
            humanScore += 1
        } else if (humanChoice == "rock") {
            console.log("You win!! Rock beats Scissors")
            humanScore += 1
        } else if (computerChoice == "scissors") {
            console.log("You lose!! Rock beats Scissors")
            computerScore += 1
        }
    }
}

playRound(humanChoice, computerChoice);
console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
