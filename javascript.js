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

function playGame() {
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

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (computerScore > humanScore) {
        console.log(`You lose! The computer won ${computerScore} times. You won ${humanScore} times.`);
    } else if (humanScore > computerScore) {
        console.log(`You win! You won ${humanScore} times. The computer won ${computerScore} times.`);
    } else {
        console.log(`It's a draw! You won ${humanScore} times. The computer won ${computerScore} times.`);
    }
}

playGame();

