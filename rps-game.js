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
    } else if(
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore += 1;
        console.log(`You win!! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
    } else {
        computerScore += 1;
        console.log(`You lose!! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
    }
}

playRound(humanChoice, computerChoice);
console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
