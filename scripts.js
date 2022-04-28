function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    const randChoice = choices[random];
    return randChoice;
}

function playerChoice() {

    let choice = prompt('Rock, Paper or Scissors?').toLowerCase();

    while (choice !== 'rock' && choice !=='paper' && choice !== 'scissors') {
        choice = prompt('Try again. Rock, Paper or Scissors?').toLowerCase();
    }

    return choice;   
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return playerScore, computerScore, "You Lose! Paper beats Rock";
        }
        if (computerSelection === 'scissors') {
            playerScore++;
            return playerScore, computerScore,"You Win! Rock beats Scissors";
        }
        if (computerSelection === 'rock') {
            return playerScore, computerScore,'Tie! You both chose Rock.';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return playerScore, computerScore,'Tie! You both chose Paper';
        }
        if (computerSelection === 'scissors') {
            computerScore++;
            return playerScore, computerScore,'You lose! Scissors beats Paper';
        }
        if (computerSelection === 'rock') {
            playerScore++;
            return playerScore, computerScore,'You win! Paper beats Rock'
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return playerScore, computerScore,'You win! Scissors beats Paper';
        }
        if (computerSelection === 'scissors') {
            return playerScore, computerScore,'Tie.  You both chose Scissors';
        }
        if (computerSelection === 'rock') {
            computerScore++;
            return playerScore, computerScore,'You lose.  Rock beats Scissors';
        }
    }
}

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

game();