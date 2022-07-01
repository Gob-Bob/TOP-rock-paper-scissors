// Random number generator for computer choice
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Randomly return 'Rock', 'Paper', or 'Scissors' for computer's choice
function computerPlay() {
    let result = getRandomIntInclusive(1, 3);
    if (result == 1) {
        return "rock";
    } else if (result == 2) {
        return "paper";
    } else if (result == 3) {
        return "scissors";
    }
}

const playerSelection = "rock";
const computerSelecton = computerPlay();

// Function that plays a single round of rock, paper, scissors and returns winner/loser string
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return ("Tie Game! " + playerSelection + " is the same as " + computerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("You Lose! " + playerSelection + " does not beat " + computerSelection);
    }
}

console.log(playRound(playerSelection, computerSelecton));