function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    console.log(choice);
    if (choice == 1) {
        return "rock"
    }
    else if (choice == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function oneRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
        return "Invalid entry. Rock, Paper, or Scissors are the only valid entries."
    }
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            return "Tie!";
        }
        else if (playerSelection === "paper") {
            return "You win! Paper beats rock";
        }
        else if (playerSelection === "scissors") {
            return "You lose! Rock beats paper";
        }
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose! Paper beats rock";
        }
        else if (playerSelection === "paper") {
            return "Tie!";
        }
        else if (playerSelection === "scissors") {
            return "You win! scissors beats paper";
        }
    }
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "You win! Rock beats scissors";
        }
        else if (playerSelection === "paper") {
            return "You lose! scissors beats paper";
        }
        else if (playerSelection === "scissors") {
            return "Tie!";
        }
    }
}