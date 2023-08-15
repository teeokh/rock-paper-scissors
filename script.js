

   function getComputerChoice(){
        const options = ["rock", "paper", "scissors"]; // create array of these options

        let index = Math.floor(Math.random() * options.length); // get random index based off the numbers available in this array

        return options[index]; // print the corresponding index of the words available in the array 
}

    function playRound(playerSelection, computerSelection){

        let win = "You Win! ";
        let lose = "You Lose! ";
        let draw = "Draw!";

        let validChoices = ["rock", "paper", "scissors"];

        if (!validChoices.includes(playerSelection)){
            return "Wrong input!"
        }

        if (playerSelection == "rock"){
            if (computerSelection == "paper"){
                return lose + "Paper beats Rock"
            } else if (computerSelection == "scissors"){
                return win + "Rock beats Scissors"
            } else {
                return draw
            }
        }

        if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                return lose + "Scissors beats Paper"
            } else if (computerSelection == "rock"){
                return win + "Paper beats Rock"
            } else {
                return draw
            }
        }

        if (playerSelection == "scissors"){
            if (computerSelection == "paper"){
                return win + "Scissors beats Paper"
            } else if (computerSelection == "rock"){
                return lose + "Rock beats Scissors"
            } else {
                return draw
            }
        }
}


function game(){

    let p = 0;
    let c = 0;

    for (i = 0; i < 5; i++){

        let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if(result.includes("Win")){
            p++;
        }

        if(result.includes("Lose")){
            c++;
        }
    }

    if(c > p){
        console.log ("Computer wins!")
    } else if (c < p){
        console.log ("You win!")
    } else {
        console.log ("Draw!")
    }
}

game();




/* 

Iterates for 5 rounds 
For each round determine the winner
    Will involve .includes for the return string to see if player or computer wins
Tally points for player, tally points for computer
Whoevers points is higher = winner

*/ 