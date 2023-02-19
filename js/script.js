let playerScore = 0;
let computerScore = 0; 

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
      playerScore++;
      return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if((playerSelection === "rock" && computerSelection === "paper") &&
    (playerSelection > computerSelection)) {
      computerScore++;
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "paper" && computerSelection === "scissors") &&
    (playerSelection <  computerSelection)) {
      computerScore++;
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "paper" && computerSelection === "rock") &&
      (playerSelection < computerSelection)) {
        playerScore++;
        return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if((playerSelection === "scissors" && computerSelection === "rock") &&
    (playerSelection > computerSelection)) {
      computerScore++;
      return `You Lose ${computerSelection} beats ${playerSelection}`;
  } else if((playerSelection === "scissors" && computerSelection === "paper") &&
    (playerSelection > computerSelection)) {
      playerScore++;
      return `You Win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Draw ${computerSelection} tied with ${playerSelection}`;
  }
}

function game() { 

  for(let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
  }

  if(playerScore > computerScore) {
    console.log("You Win the game!");
  } else if(playerScore < computerScore){
    console.log("You Lose the game!");
  } else {
    console.log("It's a tie");
  }
}

game();
