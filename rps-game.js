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
    humanMove = prompt("Rock, Paper, or Scissors? ")

    return humanMove.toLowerCase()
}

console.log(getHumanChoice())