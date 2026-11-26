const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGames(userChoice) {

    let result = "";

    // Generate computer choice ONCE
    let computer = computerChoice();

    if (userChoice === computer) {
        result = "It's a draw";
    }

    else if (
        (userChoice === "paper" && computer === "rock") ||
        (userChoice === "scissors" && computer === "paper") ||
        (userChoice === "rock" && computer === "scissors")
    ) {
        result = "You win. Great Job";
    }

    else {
        result = "You lose. Sorry";
    }

    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computer);
    console.log(result);
    
    let resultText= document.getElementById("result");
      resultText.textContent =  "Computer choose " + computer + ". " + result;                                      
}
