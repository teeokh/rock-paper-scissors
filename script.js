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



// let displayResult = document.getElementById("result"); // Makes reference to 'result' id

console.log("Event listeners are being added to buttons.");


// Creating buttons that play the round:

const buttons = document.querySelectorAll("button"); // Makes nodelist 'buttons' including each button
const resultDiv = document.getElementById("result");

let p = 0;
let c = 0;

    buttons.forEach((button) => { // Loops through buttons nodelist
    button.addEventListener("click", () => {

        if(p + c >= 5){ // Once total score reaches 5, button stops working
            return;
        }

        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        if(result.includes("You win! ")){
            p++;
        }

        if(result.includes("You lose! ")){
            c++;
        }

        playerScore.textContent = p;
        computerScore.textContent = c;


        if(p + c >= 5){ // Once total score reaches 5, the result is displayed 

            let displayResult;

            if(c > p){
                displayResult = "Computer wins!";
            } else if (c < p){
                displayResult = "You win!";
            } else {
                displayResult = "Draw!";
            }

            resultDiv.textContent = displayResult;
        }
        })

    })





// Creating score counter (which displays p and c scores as rounds are played)

// game();


/* 

Iterates for 5 rounds 
For each round determine the winner
    Will involve .includes for the return string to see if player or computer wins
Tally points for player, tally points for computer
Whoevers points is higher = winner

*/ 