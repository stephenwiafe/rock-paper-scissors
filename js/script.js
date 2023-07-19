let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor((Math.random() * 3));
  const aiWeapon = document.querySelector('.ai-weapon');
  
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

  if(playerSelection === "rock"){
    if(computerSelection === "scissors"){
      playerScore++;
      return "ROCK BEATS SCISSORS";
    } else if(computerSelection === "paper"){
      computerScore++;   
      return "PAPER BEATS ROCK";
    } else {
      return "TIE GAME!"
    }                            
  } else if(playerSelection === "paper") {
    if(computerSelection === "scissors"){
      computerScore++;
      return "SCISSORS BEATS PAPER";
    } else if(computerSelection === "rock"){
      playerScore++;
      return "PAPER BEATS ROCK";
    } else {
      return "TIE GAME!"
    }  
  } else if(playerSelection === "scissors") {
    if(computerSelection === "rock"){
      computerScore++;
      return "ROCK BEATS SCISSORS";
    } else if(computerSelection === "paper"){
      playerScore++;
      return "SCISSORS BEATS PAPER";
    }  else {
      return "TIE GAME!"
    } 
  }    
}

function scoreBoard(displayMessage){
  const score = document.querySelector('.score');
  const message = document.querySelector('.message');

  score.textContent = `${playerScore}:${computerScore}`;
  message.textContent = displayMessage; 
}

function declareWinner(){
  const message = document.querySelector('.message');

  setTimeout(function(){
    if(playerScore === 5)       message.textContent = `You Won!!Game Over!!!`;
    else if(computerScore == 5) message.textContent = `AI WON!!Game Over!!`;
  }, 1000);
}

//main
function game(){ 
  const buttons = document.querySelectorAll('button');
  const playerWeapon = document.querySelector('.player-weapon');

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if(playerScore < 5 && computerScore < 5){
          if(e.target.className === 'rock'){
            scoreBoard(playRound(e.target.className, getComputerChoice()));
            playerWeapon.textContent = '🪨';
          }
          else if(e.target.className === 'paper'){
            scoreBoard(playRound(e.target.className, getComputerChoice()));
            playerWeapon.textContent = '📃';
          }
          else if(e.target.className === 'scissors'){
            scoreBoard(playRound(e.target.className, getComputerChoice()));
            playerWeapon.textContent = '✂️';
          }
        
        if(playerScore === 5 || computerScore === 5){
          declareWinner();
        }
      }
    });
  });
}

game();
