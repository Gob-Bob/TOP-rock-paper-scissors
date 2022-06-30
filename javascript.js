/* If user input is not rock, paper, or scissors, 
    throw an error message and ask them for the input again*/

// Get player's input
let playerChoice = prompt("Rock, paper, or scissors?");
// Convert entire string it lowercase to make user input cap non-sensitive
playerChoice = playerChoice.toLowerCase();

// If player input is rock, paper or scissors, continue
if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    console.log("Continue");
} else {
    // If player input is not rock, paper or scissors, abort
    alert("Please input as indicated");
    console.log("Failed");
}

// Get computer's input
    // Randomly generate the computer's input between rock, paper and scissors
// Function compares both player's inputs
    // Determine which input beats the other
    // Whoever's input beats the other, declare them the winner