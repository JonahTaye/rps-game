let humanScore = 0;
let computerScore = 0;
const choice = document.querySelector(".choice")
const score = document.querySelector(".score")
let round = 0

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
    humanMove = prompt("Rock, Paper, or Scissors? ").toLowerCase()

    return humanMove.charAt(0).toUpperCase() + humanMove.slice(1)
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        displayWinner("T")
    } else if(
        humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        humanScore += 1
        displayWinner("W")
    } else {
        computerScore += 1
        displayWinner("L")
    }
}

function displayWinner(d) {
    round++
    score.textContent = `Round ${round}: `

    switch (d) {
        case "T":
            score.textContent += "It was a tie"
            break
        case "W":
            score.textContent += "You won this round"
            break
        case "L":
            score.textContent += "You lost this round"
    }
}

choice.addEventListener('click', (event) => {
    let target = event.target.closest(".box")

    switch(target.id) {
        case 'rock':
            console.log("rock")
            playRound("Rock", getComputerChoice())
            break
        case 'paper':
            console.log("paper")
            playRound("Paper", getComputerChoice())
            break
        case 'scissors':
            console.log("scissors")
            playRound("Scissors", getComputerChoice())
            break
    }

})