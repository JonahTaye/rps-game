let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerMove = "";
    let random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            computerMove = "Rock";
            break
        case 2:
            computerMove = "Paper";
            break
        default:
            computerMove = "Scissors";     
    }

    return computerMove
}

function getHumanChoice() {
    humanMove = prompt("Rock, Paper, or Scissors? ").toLowerCase();

    return humanMove.charAt(0).toUpperCase() + humanMove.slice(1)
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie")
        } else if(
            humanChoice == "Rock" && computerChoice == "Scissors" ||
            humanChoice == "Paper" && computerChoice == "Rock" ||
            humanChoice == "Scissors" && computerChoice == "Paper"
        ) {
            humanScore += 1;
            console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            console.log(`You lose!! ${computerChoice} beats ${humanChoice}`);
        }
    }
    console.log("This is the result of your RPS game")
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}`)
        playRound(humanChoice, computerChoice);
        console.log(`Current Score => Computer: ${computerScore} vs Human: ${humanScore}`)
    }

}

playGame();