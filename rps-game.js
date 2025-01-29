function getComputerChoice() {
    let move = ""
    let random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            move = "rock";
            break
        case 2:
            move = "paper";
            break
        default:
            move = "scissors";     
    }

    return move
}

console.log(getComputerChoice())