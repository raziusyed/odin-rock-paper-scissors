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
    let result = "";
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            result = "It's a draw! Play again.";
            return;
        }

        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    result = "You lose! Paper beats Rock";
                    computerScore++;
                } else {
                    result = "You win! Rock beats Scissors";
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    result = "You lose! Scissors beats Paper";
                    computerScore++;
                } else {
                    result = "You win! Paper beats Rock";
                    humanScore++;
                }
                break;
            default:
                if (computerChoice === "rock") {
                    result = "You lose! Rock beats Scissors";
                    computerScore++;
                } else {
                    result = "You win! Scissors beats Paper";
                    humanScore++;
                }
        }
    }

    function appendResult() {
        const roundResult = document.createElement("p");
        roundResult.textContent = `Round ${++round} result: ${result}, Your Score: ${humanScore}, Computer Score: ${computerScore}`;
        results.appendChild(roundResult);
        if (round == 5) checkWinner();
    }

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const results = document.querySelector("#results");

    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        appendResult();
    });

    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        appendResult();
    });

    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        appendResult();
    });

    function checkWinner() {
        const gameResult = document.createElement("p");

        if (computerScore > humanScore) {
            gameResult.textContent = `You lose! The computer won ${computerScore} times. You won ${humanScore} times.`;
        } else if (humanScore > computerScore) {
            gameResult.textContent = `You win! You won ${humanScore} times. The computer won ${computerScore} times.`;
        } else {
            gameResult.textContent = `It's a draw! You won ${humanScore} times. The computer won ${computerScore} times.`;
        }

        results.appendChild(gameResult);
    }
}

playGame();

