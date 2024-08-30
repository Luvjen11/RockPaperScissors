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
    let computerChoice = randomNum;
}

// Create a new function named getHumanChoice

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors: ").toLowerCase();
  return humanChoice;
}

function playGame() {


    // Create two variables named humanScore and computerScore

    let humanScore = 0;
    let computerScore = 0;
 

    // Create a new function named playRound
    function playRound(humanChoice, computerChoice) {
        // Convert humanChoice to lowercase
        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
            humanScore++;
            computerScore++;
            console.log("Your points: " + humanScore + ". Computer points: " + computerScore);
        } else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock"
        ){
            console.log("you lose!");
            computerScore++;
            console.log("Computer points: " + computerScore + ". Your points: " + humanScore);
        } else {
            console.log("you win!");
            humanScore++;
            console.log("You get one point extra: " + humanScore + "! Computer points: " + computerScore);
        }
    }

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();
