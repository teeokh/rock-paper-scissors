

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]; // create array of these options

    let index = Math.floor(Math.random() * options.length); // get random index based off the numbers available in this array

    return options[index]; // print the corresponding index of the words available in the array 
    
}

console.log(getComputerChoice());
