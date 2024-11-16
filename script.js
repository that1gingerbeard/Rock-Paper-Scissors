console.log('Hello World!')

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerChoiceElement = document.getElementById('player-choice');

// Set computer to randomly pick between rock, paper, scissors
function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors',];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}

console.log(getComputerChoice());
// make rock beat scissors

// make paper beat rock

// make scissors beat paper

// make background color red with try again if wrong

// make background color green with congraulations you won if right
