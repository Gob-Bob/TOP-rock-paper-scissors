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

// Function that plays a single round of rock, paper, scissors
function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("Tie Game! " + playerSelection + " is the same as " + computerSelection);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        console.log("You Lose! " + playerSelection + " does not beat " + computerSelection);
    }
}