    const options = document.querySelectorAll(".options");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pChoice = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const cInput = cOptions[Math.floor(Math.random() * 5)];

        compareInputs(pChoice, cInput);
      });
    });







    function compareInputs(pChoice, cInput) {
      

      // Tie check
      if (pChoice === cInput) {
        
      }
