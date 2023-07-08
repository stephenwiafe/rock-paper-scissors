let playerScore = 0;
let computerScore = 0; 

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
  if(playerSelection === "rock") {
    if(computerSelection === "scissors"){
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if(computerSelection === "paper"){
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return `It's a tie! ${computerSelection} tied with ${playerSelection}.`;
    }
  }
  if(playerSelection === "paper") {
    if(computerSelection === "scissors"){
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if(computerSelection === "rock"){
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `It's a tie! ${playerSelection} tied with ${computerSelection}.`; 
    }
  }
  if(playerSelection === "scissors") {
    if(computerSelection === "rock"){
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if(computerSelection === "paper"){
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `It's a tie! ${playerSelection} tied with ${computerSelection}.`;
    }
  }
} 

//main
function game() { 
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if(e.target.id === 'rock'){
        console.log(playRound(e.target.id, getComputerChoice()));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
      }
      else if(e.target.id === 'paper'){
        console.log(playRound(e.target.id, getComputerChoice()));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
      }
      else if(e.target.id === 'scissors'){
        console.log(playRound(e.target.id, getComputerChoice()));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
      }
    });
  });
  
  /*if(playerScore > computerScore) {
    console.log("You Win the game!");
  } else if(playerScore < computerScore) {
    console.log("You Lose the game!");
  } else {
    console.log("Draw!");
  }*/
}

game(); 
