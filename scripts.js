// Initialize scores outside of playOneRound function so they can be used outside of that function
let playerScore = 0;
let computerScore = 0;

// create query selector variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerChoice = document.querySelector('#computer-selection');
const roundResult = document.querySelector('#winner-text');
const score = document.querySelector('#score');
const playerBoxes = document.querySelectorAll('.player');

// create functions to play a round when player clicks rock, paper or scissors
const chooseRock = () => playOneRound('Rock', getComputerChoice());
const choosePaper = () => playOneRound('Paper', getComputerChoice());
const chooseScissors = () => playOneRound('Scissors', getComputerChoice());

// add click event listeners to html rock, paper and scissors elements
rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);

// Randomly choose rock, paper or scissors for computer
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randChoice = choices[random];
    computerChoice.textContent = randChoice[0].toUpperCase() + randChoice.slice(1) + '.';
    return randChoice;
}

// Plays 1 round of rock, paper, scissors and returns a win, lose or tie string and adds 1 point to either the player or computer's score if there was a winner.
function playOneRound(playerSelection, computerSelection) {  
    if (playerSelection === computerSelection) {
        roundResult.textContent = ( `Tie! You both chose ${playerSelection}.`);
    }

    else if ((playerSelection === 'Rock' && computerSelection === "Scissors") ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
                playerScore++;
                roundResult.textContent = (`You Win! ${playerSelection} beats ${computerSelection}.`);
        }

    else {
        computerScore++;
        roundResult.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }

    score.textContent = (playerScore + ' - ' + computerScore);

    if (playerScore === 5) {
        roundResult.textContent = 'You win 5 rounds!  You are the supreme champion!';
        endGameEvents();
    }
    else if (computerScore === 5) {
        roundResult.textContent = 'Computer wins 5 rounds!  Computer is the supreme champion!';
        endGameEvents();
    }

    function removeHover(item) {
        item.setAttribute('class', 'selection-box');
    }

    function endGameEvents() {
        rock.removeEventListener('click', chooseRock);
        paper.removeEventListener('click', choosePaper);
        scissors.removeEventListener('click', chooseScissors);
        playerBoxes.forEach(item => removeHover(item));
        computerChoice.textContent = 'Computer.';
    }
}
