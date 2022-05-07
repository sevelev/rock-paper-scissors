// Initialize scores outside of playOneRound function so they can be used outside of that function
let playerScore = 0;
let computerScore = 0;

// Randomly choose rock, paper or scissors for computer
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    const randChoice = choices[random];
    return randChoice;
}

// Gets players choice of rock, paper or scissors
function getPlayerChoice() {

    let choice = prompt('Rock, Paper or Scissors?').toLowerCase();

    while (choice !== 'rock' && choice !=='paper' && choice !== 'scissors') {
        choice = prompt('Try again. Rock, Paper or Scissors?').toLowerCase();
    }

    return choice;   
}

// Plays 1 round of rock, paper, scissors and returns a win, lose or tie string and adds 1 point to either the player or computer's score if there was a winner.
function playOneRound(playerSelection, computerSelection) {

    // Capitalizes the first letter of player and computer choices
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
function playFullGame() {
    // Only let player enter number of rounds between 1 and 20
    let rounds = +prompt('How many rounds would you like to play?', 5);
    while (rounds < 1 || rounds > 20) {
        rounds = +prompt('Ok wiseguy, enter a number of rounds between 1 and 20', 5);
    }

    for (let i = 0; i < rounds; i++) {
       console.log(`Round ${i+1}: `, playOneRound(getPlayerChoice(), getComputerChoice()));
       console.log(`Current Score: ${playerScore} - ${computerScore}\n`);
    }

    // if score is tied after all rounds, play tie breaker rounds until there is a winner
    if (playerScore === computerScore) {
        console.log(`After ${+rounds} rounds, the score is tied! Time for some tie breaker rounds!\n`);
        while (playerScore === computerScore) {
            rounds++;
            console.log(`Tie Breaker! Round ${rounds}: `, playOneRound(getPlayerChoice(), getComputerChoice()));
            console.log(`Current Score: ${playerScore} - ${computerScore}\n`);
        }
    }
    console.log(`After ${rounds} rounds we have a winner!`);

    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}!\n`);
    }
    else {
        console.log(`Computer wins ${computerScore} to ${playerScore}!\n`);
    }
    
}

//testing

// Runs the game function on page load
playFullGame();