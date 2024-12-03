console.log('Hello World!')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors',];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors').toLowerCase();
    return choice;
}

let humanScore = 0;

let computerScore = 0;

function playRound (getHumanChoice, getComputerChoice) {
    console.log('Human Choice: ' + getHumanChoice);
    console.log('Computer Choice: ' + getComputerChoice);
    if  (getHumanChoice == getComputerChoice) 
        {console.log('It\'s a tie!')}; 
    if  (getHumanChoice == 'rock' && getComputerChoice == 'scissors' || getHumanChoice == 'paper' && getComputerChoice == 'rock' ||
         getHumanChoice == 'scissors' && getComputerChoice == 'paper') 
        {console.log ('You Win!'); humanScore++} ;
    if  (getHumanChoice == 'rock' && getComputerChoice == 'paper' || getHumanChoice == 'paper' && getComputerChoice == 'scissors' || 
        getHumanChoice == 'scissors' && getComputerChoice == 'rock') 
        {console.log ('Computer Wins!'); computerScore++} ;
    console.log('Human Score: ' + humanScore)
    console.log('Computer Score: ' + computerScore)
    }

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound (humanChoice, computerChoice);

function playGame() {
    for(let i=1; i<=5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound (humanChoice, computerChoice);
    }
}

playGame();