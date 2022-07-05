// Random number generator for computer choice
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Randomly return 'Rock', 'Paper', or 'Scissors' for computer's choice
function computerPlay() {
    let result = getRandomIntInclusive(1, 3);
    if (result === 1) {
        return "rock";
    } else if (result === 2) {
        return "paper";
    } else if (result === 3) {
        return "scissors";
    }
}

// Function that plays a single round of rock, paper, scissors and returns winner/loser string
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("Tie Game! " + playerSelection + " is the same as " + computerSelection);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("You Lose! " + playerSelection + " does not beat " + computerSelection);
    }
}

// Play 5 rounds of game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    // Loops 5 times
    for (let i = 0; i < 5; i++) {
        // Asks player for their choice
        let playerSelection = prompt("Please choose: rock, paper, or scissors")
        // Selects computer's choice
        let computerSelection = computerPlay();
        // Stores result from round into results variable 
        results = playRound(playerSelection, computerSelection);
        // If player wins then add a point to their score
        if (results.startsWith("You Win!")) {
            playerScore++;
        }
        // If computer wins then add a point to their score
        else if (results.startsWith("You Lose!")) {
            computerScore++;
        }
        console.log(results);
    }
    if (playerScore > computerScore) {
        console.log("Winner is Player with " + playerScore + " Points! Computer with " + computerScore + " Points!")
    }
    else if (playerScore < computerScore) {
        console.log("Winner is Computer with " + computerScore + " Points! Player with " + playerScore + " Points!")
    }
    else {
        console.log("No winner! Player with " + playerScore + " Points! Computer with " + computerScore + " Points!")
    }
}

function buttonGame(buttonChoice) {
    let playerSelection = buttonChoice;
    let computerSelection = computerPlay();
    let gameResults = playRound(playerSelection, computerSelection);

    const game = document.createElement('div');
    game.textContent = gameResults;
    body.appendChild(game);

    if (gameResults.startsWith("You Win!")) {
        playerScore++;
    } else if (gameResults.startsWith("You Lose!")) {
        computerScore++;
    }

    const score = document.createElement('div');
    score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    body.appendChild(score);
}

function determineWinner() {
    const winner = document.createElement('div');
    if (playerScore == 5) {
        winner.textContent = "Winner is Player!";
        body.appendChild(winner);
    } else if (computerScore == 5) {
        winner.textContent = "Winner is Computer!";
        body.appendChild(winner);
    }
}

const body = document.querySelector('body')

const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const welcomeMsg = document.createElement('div');

buttonRock.textContent = 'Rock';
buttonPaper.textContent = 'Paper';
buttonScissors.textContent = 'Scissors';
welcomeMsg.textContent = 'Please choose selection:';

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        ;
    } else {
        buttonGame("rock");
        determineWinner();
    }
});
buttonPaper.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        ;
    } else {
        buttonGame("paper");
        determineWinner();
    }
});
buttonScissors.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        ;
    } else {
        buttonGame("scissors");
        determineWinner();
    }
});

body.appendChild(welcomeMsg);
body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);