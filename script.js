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
}