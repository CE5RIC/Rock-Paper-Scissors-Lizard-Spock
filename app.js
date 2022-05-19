    
    
   

    
    const options = document.querySelectorAll(".options");

    console.log(options);

    options.forEach((option) => {
      option.addEventListener("click", function () {
        
        const pChoice = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const cInput = cOptions[Math.floor(Math.random() * 5)];

        console.log(cInput, pChoice);
      
      });
    });
    

    let playerScore = 0;
    let computerScore = 0;
 

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
        } else if (cInpiut == 'Rock' && pChoice == 'Spock') {
            playerScore++;
        } else if (cInput == 'Paper' && pChoice == 'Spock') {
            computerScore++;
        } else if (cInput == 'Spock' && pChoice == 'Paper') {
            playerScore++;
        }
         


    }


whoWins();




