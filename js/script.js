function getPlayerChoice() {
    const playerChoice = prompt("Enter rock/paper/scissors:", "");
    return playerChoice;
}

function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3));
    switch(computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

}

function game() {
}

console.log(getPlayerChoice());
