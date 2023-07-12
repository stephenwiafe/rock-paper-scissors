let playerScore = 0;
let computerScore = 0; 

function getComputerChoice() {
  const computerChoice = Math.floor((Math.random() * 3));
  
  const aiWeapon = document.querySelector('#ai-weapon');
  if(computerChoice === 0) {
    aiWeapon.textContent = '🪨';
    return "rock";
  } else if(computerChoice === 1){
    aiWeapon.textContent = '📃';
    return "paper";
  } else {
    aiWeapon.textContent = '✂️';
    return "scissors";
  } 
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "rock") {
    if(computerSelection === "scissors")   playerScore++;
    else if(computerSelection === "paper") computerScore++;                               
  } 
  else if(playerSelection === "paper") {
    if(computerSelection === "scissors")   computerScore++;
    else if(computerSelection === "rock")  playerScore++;
  }
  else if(playerSelection === "scissors") {
    if(computerSelection === "rock")       computerScore++;
    else if(computerSelection === "paper")  playerScore++;
  }    
}

function scoreBoard(){
  const score = document.querySelector('.score');
  const message = document.querySelector('.message');
  score.textContent = `${playerScore}:${computerScore}`;
}

//main
function game() { 
  const buttons = document.querySelectorAll('button');
  const playerWeapon = document.querySelector('#player-weapon');
  

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if(e.target.id === 'rock'){
        playRound(e.target.id, getComputerChoice());
        scoreBoard();
        playerWeapon.textContent = '🪨';
      }
      else if(e.target.id === 'paper'){
        playRound(e.target.id, getComputerChoice());
        scoreBoard();
        playerWeapon.textContent = '📃';
      }
      else if(e.target.id === 'scissors'){
        playRound(e.target.id, getComputerChoice());
        scoreBoard();
        playerWeapon.textContent = '✂️';
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
