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

function oneRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const score = document.querySelector("#score");
    const result = document.querySelector("#result");
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            result.textContent = "Tie!";
            tieCount += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "paper") {
            result.textContent = "You win! Paper beats rock";
            playerScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "scissors") {
            result.textContent = "You lose! Rock beats paper";
            compScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            result.textContent = "You lose! Paper beats rock";
            compScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "paper") {
            result.textContent = "Tie!";
            tieCount += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "scissors") {
            result.textContent = "You win! scissors beats paper";
            playerScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
    }
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            result.textContent = "You win! Rock beats scissors";
            playerScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "paper") {
            result.textContent = "You lose! scissors beats paper";
            compScore += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
        else if (playerSelection === "scissors") {
            result.textContent = "Tie!";
            tieCount += 1;
            score.textContent = "Computer: " + compScore + " Player: " + playerScore + " Tie: " + tieCount;
        }
    }
}

function game() {
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            oneRound(button.id)
        });
    });
}

window.onload = function () {
    game();
};