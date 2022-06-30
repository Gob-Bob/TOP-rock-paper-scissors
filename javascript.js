/* If user input is not rock, paper, or scissors, 
    throw an error message and ask them for the input again*/
while (true) {
    // Ask user for input
    let playerChoice = prompt("Rock, paper, or scissors?");
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
// Get computer's input
    // Randomly generate the computer's input between rock, paper and scissors
// Function compares both player's inputs
    // Determine which input beats the other
    // Whoever's input beats the other, declare them the winner