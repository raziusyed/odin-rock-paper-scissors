function getComputerChoice() {
    const number = Math.random();

    if (number > 0.66) {
        return "rock";
    } else if (number > 0.33) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Choose!");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a draw! Play again.");
        return;
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            break;
        default:
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



