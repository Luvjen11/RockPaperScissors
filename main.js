// Collect Player's choice
// Collect Computer random choice
// Compare Player chioce and Computer choice
// If Player 1's choice is equal to Computer's chioce then it's a draw
// If player 1 chooses Rock AND Player 2 chooses Scissors THEN Player 1 wins!
// IF Player 1 chooses Scissors AND Player 2 chooses Paper THEN Player 1 wins!
// IF Player 1 chooses Paper AND Player 2 chooses Rock THEN Player 1 wins!
// Else Player 2 wins!

//Create a new function named getComputerChoice 

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create a new function named getHumanChoice

function getHumanChoice() {
  let player = prompt("rock, paper, scissors: ");
  return player;
}

let humanScore = 0;
let computerScore = 0;
