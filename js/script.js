function getPlayerChoice() {
  const playerChoice = prompt("Enter rock/paper/scissors:", "");
  return playerChoice;
}

function getComputerChoice() {

  const computerChoice = Math.floor((Math.random() * 3));

  if(computerChoice === 0) {
    return "rock";
  } else if(computerChoice === 1){
    return "paper";
  } else {
    return "scissors";
  } 

}

function playRound(playerSelection, computerSelection) {

  if((playerSelection === "rock" && computerSelection === "scissors") &&
    (playerSelection < computerSelection)) {
      return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if((playerSelection === "rock" && computerSelection === "paper") &&
    (playerSelection > computerSelection)) {
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "paper" && computerSelection === "scissors") &&
    (playerSelection <  computerSelection)) {
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "paper" && computerSelection === "rock") &&
      (playerSelection < computerSelection)) {
        return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if((playerSelection === "scissors" && computerSelection === "rock") &&
    (playerSelection > computerSelection)) {
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "scissors" && computerSelection === "paper") &&
    (playerSelection > computerSelection)) {
      return `You Win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Draw ${computerSelection} tied with ${playerSelection}`;
  }

}

function game() {
}
