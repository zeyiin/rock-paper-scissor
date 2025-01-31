const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame(event) {
    const userChoice = event.currentTarget.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    userChoiceDisplay.textContent = `You chose: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    resultMessage.textContent = result;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper') || 
        (userChoice === 'paper' && computerChoice === 'rock')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
