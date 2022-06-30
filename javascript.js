// Random number generator for computer choice
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerSelection() {
    // Ask user for input
    var playerChoice = prompt("Rock, paper, or scissors?");
    // Convert entire string it lowercase to make user input cap non-sensitive
    playerChoice = playerChoice.toLowerCase();

    /* If user input is not rock, paper, or scissors, 
        throw an error message and ask them for the input again*/
    while (playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors") {
        alert("Please input rock, paper, or sciessors")
        // Ask user for input
        var playerChoice = prompt("Rock, paper, or scissors?");
        // Convert entire string it lowercase to make user input cap non-sensitive
        playerChoice = playerChoice.toLowerCase();
        // If user input does not equal choices
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            // Break out of loop
            break;
        } else {
            // Contine the loop again
            alert("Please input rock, paper, or sciessors")
            continue;
        }
    }
}

function computerSelection() {
    // Get computer's input
    // Randomly generate the computer's input between rock, paper and scissors
    let computerChoice = getRandomIntInclusive(1, 3);
    // Assign rock, paper, or scissors to generated number
    switch(computerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
}

// Player score
let playerScore = 0;
// Computer score
let computerScore = 0;

// 5 round game
for (let i = 1; i <= 5; i++) {
    playerChoice = playerSelection();
    computerChoice = computerSelection();
    // Function compares both player's inputs
    // Tie game
    if (playerChoice == computerChoice) {
        console.log("Round " + i + " Winner: Tie!");
    // Determine which input beats the other
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("Round " + i + " Winner: Player!");
        playerScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Round " + i + " Winner: Player!");
        playerScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("Round " + i + " Winner: Player!");
        playerScore++;
    } else {
        console.log("Round " + i + " Winner: Computer!");
        computerScore++;
    }
}
// Whoever's input beats the other, declare them the winner
if (playerScore > computerScore) {
    console.log("Overall Game Winner: Player!")
} if (playerScore < computerScore) {
    console.log("Overall Game Winner: Computer!")
} else { // If tie, declare tie
    console.log("Overall Game winner: Tie!")
}