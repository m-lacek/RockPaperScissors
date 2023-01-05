function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    console.log(choice);
    if (choice == 1) {
        return "Rock"
    }
    else if (choice == 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}