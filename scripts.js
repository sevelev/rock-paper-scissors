// Initialize scores outside of playRound function so they can be used outside of that function
let playerScore = 0;
let computerScore = 0;

// Randomly choose rock, paper or scissors for computer
function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    const randChoice = choices[random];
    return randChoice;
}

// Gets players choice of rock, paper or scissors
function playerChoice() {

    let choice = prompt('Rock, Paper or Scissors?').toLowerCase();

    while (choice !== 'rock' && choice !=='paper' && choice !== 'scissors') {
        choice = prompt('Try again. Rock, Paper or Scissors?').toLowerCase();
    }

    return choice;   
}

// Plays 1 round of rock, paper, scissors and returns a win, lose or tie string and adds 1 point to either the player or computer's score there was a winner.
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    
    if (playerSelection === computerSelection) {
        return `Tie! You both chose ${playerSelection}.`
    }

    else if ((playerSelection === 'Rock' && computerSelection === "Scissors") ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
        }

    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Asks player how many rounds they would like to play, plays that many rounds and shows the score after each round
function game() {
    let rounds = +prompt('How many rounds would you like to play?');

    for (let i = 0; i < rounds; i++) {
       console.log(`Round ${i+1}: `, playRound(playerChoice(), computerPlay()));
       console.log(`Current Score: ${playerScore} - ${computerScore}`);
    }

    console.log(`After ${rounds} rounds we have a winner!  Or do we...`);

    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}!`);
    }
    else if (computerScore > playerScore) {
        console.log(`Computer wins ${computerScore} to ${playerScore}!`);
    }
    else {
        console.log(`It's a tie!  At least you didn't lose :)`);
    }
}

// Runs the game function on page load
game();