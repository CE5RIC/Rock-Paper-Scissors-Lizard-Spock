function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const computerSelection = computerPlay(['rock', 'paper', 'scissors', 'lizard', 'spock']);

console.log(computerSelection);


let choice = ('rock', 'paper', 'scissors', 'lizard', 'spock');

const playerSelection = choice;

console.log(playerSelection);




function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        return 'Draw!';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'You Lose! Paper beats rock';
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return 'You win! Paper beats rock';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'You lose! Scissors beats paper';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return 'You win! Scissors beats paper';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lose! Rock beats scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return 'You win! Rock beats scissors';
    } else if (computerSelection == 'lizard' && playerSelection == 'spock') {
        return 'You lose! Lizard poisons Spock';
    } else if (computerSelection == 'spock' && playerSelection == 'lizard') {
        return 'You win! Lizard poisons Spock';
    } else if (computerSelection == 'lizard' && playerSelection == 'rock') {
        return 'You win! Rock crushes Lizard';
    } else if (computerSelection == 'rock' && playerSelection == 'lizard') {
        return 'You lose! Rock crushes Lizard';
   }  else if (computerSelection == 'lizard' && playerSelection == 'scissors') {
     return 'You win! Scissors decapitate Lizard';
    } else if (computerSelection == 'scissors' && playerSelection == 'lizard') {
     return 'You lose! Scissors decapitate Lizard';
    } else if (computerSelection == 'lizard' && playerSelection == 'paper') {
        return 'You lose! Lizard eats paper';
        
    } else if (computerSelection == 'paper' && playerSelection == 'lizard') {
        return 'You win! Lizard eats paper';
    } else if (computerSelection == 'spock' && playerSelection == 'rock') {
        return 'You win! Rock crushes spock';
    } else if (computerSelection == 'rock' && playerSelection == 'spock') {
        return 'You lose! Rock crushes spock';
    } else if (computerSelection == 'spock' && playerSelection == 'scissors') {
        return 'You lose! Spock smashes scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'spock') {
        return 'You win! Spock smashes scissors';
    } else if (computerSelection == 'spock' && playerSelection == 'rock') {
        return 'You lose! Spock vaporizes rock';
    } else if (computerSelection == 'rock' && playerSelection == 'spock') {
        return 'You win! Spock vaporizes Rock';
    } else if (computerSelection == 'paper' && playerSelection == 'spock') {
        return 'You lose! Paper disproves Spock';
    } else if (computerSelection == 'spock' && playerSelection == 'paper') {
        return 'You win! Paper disproves Spock';
    }
     }

console.log(playRound(playerSelection, computerSelection));

