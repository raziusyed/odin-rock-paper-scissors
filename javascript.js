function getComputerChoice() {
    const number = Math.random();
    console.log(number);
    
    if (number > 0.66) {
        return "rock";
    } else if (number > 0.33) {
        return "paper";
    }
    return "scissors";
}