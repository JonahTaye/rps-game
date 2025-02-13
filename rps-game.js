let humanScore = 0;
let computerScore = 0;
const choice = document.querySelector(".choice")
const score = document.querySelector(".score")
const humanPoint = document.querySelector(".humanScore")
const computerPoint = document.querySelector(".computerScore")
const button = document.querySelector("button")
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

    if (humanScore <= 5 && computerScore <= 5) {
        score.textContent = `Round ${round}: `

        switch (d) {
            case "T":
                score.textContent += "It was a tie"
                break
            case "W":
                score.textContent += "You won this round"
                humanPoint.textContent = humanScore
                break
            case "L":
                score.textContent += "You lost this round"
                computerPoint.textContent = computerScore
                break
        }
    }

    if (humanScore >= 5 && computerScore < 5) {
        score.textContent = "Congratulations!! You have defeated the computer"
        score.style.color = "#f1de6d"
    } else if (computerScore >= 5 && humanScore < 5) {
        score.textContent = "Lmao, You have lost to the computer"
        score.style.color = "#f1de6d"
    }
}

function resetGame() {
    score.textContent = "Let's Play"
    score.style.color = "white"
    humanPoint.textContent = 0
    computerPoint.textContent = 0
    humanScore = 0
    computerScore = 0
    round = 0
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

button.addEventListener('click', () => resetGame())