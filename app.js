    
    
   

    
    const options = document.querySelectorAll(".options");

    let playerScore = 0;
    let computerScore = 0;


    console.log(options);

    options.forEach((option) => {
      option.addEventListener("click", function () {
        
        const pChoice = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const cInput = cOptions[Math.floor(Math.random() * 5)];


        

if (pChoice == cInput) {
            playerScore++;
            computerScore++
        } else if (cInput == 'Paper' && pChoice == 'Rock') {
            computerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Paper') {
            playerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Paper') {
            computerScore++;
        } else if (cInput == 'Paper' && pChoice == 'Scissors') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Scissors') {
            computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Lizard') {
            playerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Lizard') {
            computerScore++;
        }  else if (cInput == 'Lizard' && pChoice == 'Scissors') {
          computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Lizard') {
         computerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Paper') {
            computerScore++;
        
        } else if (cInput == 'Paper' && pChoice == 'Lizard') {
            playerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Scissors') {
            computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Spock') {
            playerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Rock') {
            computerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Spock') {
            playerScore++;
        } else if (cInput == 'Paper' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Paper') {
            playerScore++;
        }
         


        document.getElementById("player").innerHTML = playerScore;

        document.getElementById("computer").innerHTML = computerScore;

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("player").innerHTML = 0;
   document.getElementById("computer").innerHTML = 0;


   
   
} )
      
      });
    });
    


function declareWinner() {
    if (playerScore == 5) {
        document.getElementById("result").innerHTML = "You win!";
    } else if (computerScore == 5) {
        document.getElementById("result").innerHTML = "You lose!";
    }
}

    
    

    // Increment by one for player




// Increment by one for computer


























/*



    function whoWins(pChoice, cInput) {

      
      
        if (pChoice == cInput) {
            playerScore++;
            computerScore++
        } else if (cInput == 'Paper' && pChoice == 'Rock') {
            computerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Paper') {
            playerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Paper') {
            computerScore++;
        } else if (cInput == 'Paper' && pChoice == 'Scissors') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Scissors') {
            computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Lizard') {
            playerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Lizard') {
            computerScore++;
        }  else if (cInput == 'Lizard' && pChoice == 'Scissors') {
          computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Lizard') {
         computerScore++;
        } else if (cInput == 'Lizard' && pChoice == 'Paper') {
            computerScore++;
        
        } else if (cInput == 'Paper' && pChoice == 'Lizard') {
            playerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Rock') {
            playerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Scissors') {
            computerScore++;
        } else if (cInput == 'Scissors' && pChoice == 'Spock') {
            playerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Rock') {
            computerScore++;
        } else if (cInput == 'Rock' && pChoice == 'Spock') {
            playerScore++;
        } else if (cInput == 'Paper' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Paper') {
            playerScore++;
        }
         


    }

whoWins();
whoWins();
whoWins();
whoWins();

console.log(computerScore);




*/