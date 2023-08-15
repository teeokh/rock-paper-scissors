

   function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]; // create array of these options

    let index = Math.floor(Math.random() * options.length); // get random index based off the numbers available in this array

    return options[index]; // print the corresponding index of the words available in the array 
}

    let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
    let computerSelection = getComputerChoice();

 function playRound(playerSelection, computerSelection){

    let validChoices = ["rock", "paper", "scissors"];

    if (!validChoices.includes(playerSelection)){
        return "Wrong input!"
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock"
        } else if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors"
        } else {
            return "Draw!"
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper"
        } else if (computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        } else {
            return "Draw!"
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper"
        } else if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors"
        } else {
            return "Draw!"
        }
    }
}

console.log(playRound(playerSelection, computerSelection));


