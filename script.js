

   function getComputerChoice(){
        const options = ["rock", "paper", "scissors"]; // create array of these options

        let index = Math.floor(Math.random() * options.length); // get random index based off the numbers available in this array

        return options[index]; // print the corresponding index of the words available in the array 
}

        let c = 0;
        let p = 0;

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
                c++;
                return lose + "Paper beats Rock"
            } else if (computerSelection == "scissors"){
                p++;
                return win + "Rock beats Scissors"
            } else {
                return draw
            }
        }

        if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                c++;
                return lose + "Scissors beats Paper"
            } else if (computerSelection == "rock"){
                p++;
                return win + "Paper beats Rock"
            } else {
                return draw
            }
        }

        if (playerSelection == "scissors"){
            if (computerSelection == "paper"){
                p++;
                return win + "Scissors beats Paper"
            } else if (computerSelection == "rock"){
                c++;
                return lose + "Rock beats Scissors"
            } else {
                return draw
            }
        }
}


function game(){

    for (i = 0; i < 5; i++){

        let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
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