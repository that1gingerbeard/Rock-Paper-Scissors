console.log('Hello World!')

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerChoiceElement = document.getElementById('player-choice');

// Set computer to randomly pick between rock, paper, scissors
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors',];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');
    return choice;
}

let humanScore = 0;

let computerScore = 0;

function determineWinner () {
    if (getHumanChoice === getComputerChoice) { 
        return 'It\'s a tie!'
    }
    if (
       (getHumanChoice === 'rock' && getComputerChoice ==='scissors')||
       (getHumanChoice === 'paper' && getComputerChoice === 'rock')||
       (getHumanChoice === 'scissors' && getComputerChoice === 'paper')
    ) {
       return 'You Win!'
    } else {
        return 'Computer Wins!'
    }
}

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase
    console.log('Human Choice: ' + getHumanChoice);
    console.log('Computer Choice: ' + getComputerChoice);
}