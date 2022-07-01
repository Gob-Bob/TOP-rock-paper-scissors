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

game();