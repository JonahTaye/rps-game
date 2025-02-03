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
    humanMove = prompt("Rock, Paper, or Scissors? ").toLowerCase()

    return humanMove.charAt(0).toUpperCase() + humanMove.slice(1)
}


function playRound(humanChoice, computerChoice) {
    let display = document.querySelector(".display")

    if (humanChoice == computerChoice) {
        display.innerHTML = "It's a tie"
    } else if(
        humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        humanScore += 1
        display.textContent = `You win!! ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore += 1
        display.textContent = `You lose!! ${computerChoice} beats ${humanChoice}`
    }

    displayWinner(display)
}

function displayWinner(d) {
    d.innerHTML += `<br>Current Score<br>
    Human = ${humanScore} vs Computer = ${computerScore}`

    if (humanScore > 4) {
        d.innerHTML = "Congratulations!! You have defeated the Computer"
    } else if (computerScore > 4) {
        d.innerHTML = "Sorry, you have lost to the Computer"
    }
}

let choice = document.querySelector(".choice")
choice.addEventListener('click', (event) => {
    let target = event.target

    switch(target.id) {
        case 'rock':
            playRound("Rock", getComputerChoice())
            break
        case 'paper':
            playRound("Paper", getComputerChoice())
            break
        case 'scissors':
            playRound("Scissors", getComputerChoice())
            break
    }
})