let playerScore = 0;
let compScore = 0;
let tieCount = 0;

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
            console.log("Tie!");
            tieCount += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "paper") {
            console.log("You win! Paper beats rock");
            playerScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "scissors") {
            console.log("You lose! Rock beats paper");
            compScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            console.log("You lose! Paper beats rock");
            compScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "paper") {
            console.log("Tie!");
            tieCount += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "scissors") {
            console.log("You win! scissors beats paper");
            playerScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
    }
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            console.log("You win! Rock beats scissors");
            playerScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "paper") {
            console.log("You lose! scissors beats paper");
            compScore += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
        else if (playerSelection === "scissors") {
            console.log("Tie!");
            tieCount += 1;
            return "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let result = oneRound();
        console.log(result);
    }
}