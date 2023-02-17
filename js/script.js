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

  if((playerSelection === "rock" && computerSelection === "scissors") &&
    (playerSelection.length() < computerSelection.length())) {
      return playerSelection;
  } else if((playerSelection === "rock" && computerSelection === "paper") &&
    (playerSelection.length() > computerSelection.length())) {
      return "paper";
  } else {
    return "tied";
  }

  if((playerSelection === "paper" && computerSelection === "scissors") &&
    (playerSelection.length() <  computerSelection.length())) {
      return computerSelection;
  } else if((playerSelection === "paper" && computerSelectionn === "rock") &&
      ((playerSelection.length() < computerSelection.length()))) {
        return "paper";
    } else {
      return "tied";
    }

  if((playerSelection === "scissors" && computerSelection === "rock") &&
    (playerSelection.length() > computerSelection())) {
      return computerSelection;
  } else if((playerSelection === "scissors" && computerSelection === "paper") &&
    (playerSelection.length() > computerSelection().length())) {
      return playerSelection;
  } else {
      return "tied"
  }
}


function game() {
}

