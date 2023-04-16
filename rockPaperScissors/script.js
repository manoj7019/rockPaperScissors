//You have to choose from these three options,
//Rock, Paper and Scissors
let choice = ["Rock", "Paper", "Scissors"];

//To get players choice you have to ask him,
//to input his choice in prompt
//I used .toLowerCase() function to make it case insensitive,
//as many players don't care about upper or lowerCase letters
let playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();

//Get a random choice by computer from 'choice' array
let computerSelection = choice[Math.floor(Math.random() * choice.length)];

//Alert computer's choice on screen
//So players can see the computer's choice
alert(computerSelection);

//function to add rules to play the game
function playRound(playerSelection,computerSelection) {
if((playerSelection == "rock" && computerSelection == "Rock") || (playerSelection == "paper" && computerSelection == "Paper") || (playerSelection == "scissors" && computerSelection == "Scissors")) {
    return `It's a tie!`;
} else if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "scissors" && computerSelection == "Rock") || (playerSelection == "paper" && computerSelection == "Scissors")) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
} else if ((playerSelection == "rock" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "Rock")) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
} else {
    return `Go home bruh!`;
}
}

//Calling a function
//Using alert to display playRound result
alert(playRound(playerSelection,computerSelection));

//The loop code goes below, as i don't know about loops yet


