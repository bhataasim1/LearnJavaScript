const inputFiled = document.querySelector('#inputField');
const submitButton = document.querySelector('#submitbutton');
const message = document.querySelector('.message');
const remainingGuesses = document.querySelector('.RemainingGuesses');
const oldGuess = document.querySelector('.previousGueses');
let startGame = true;
let totalGuesses = 0;
let previousGuesses = [];

const newStartButton = document.createElement('button');

let randomNumber = Math.round(Math.random() * 100) + 1; // Use "let" to reassign the randomNumber.

if (startGame) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let currentGuess = parseInt(inputField.value); // Correct the typo in "inputField".
        validateGuess(currentGuess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 0 || guess > 100) {
        message.innerHTML = 'Enter a Valid Number';
    } else if (guess === randomNumber) {
        message.innerHTML = `Amazing! You are Right ${randomNumber}`;
        message.style.color = 'green';
    } else {
        previousGuesses.push(guess); // Fix the variable name to "previousGuesses".
        if (totalGuesses === 10) {
            message.innerHTML = `Game Over Number was ${randomNumber}`;
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess > randomNumber) {
        message.innerHTML = `You are too High`;
    } else if (guess < randomNumber) {
        message.innerHTML = `You are too Low`;
    }
}

function displayGuess(guess) {
    // inputFiled.value = '';
    oldGuess.innerHTML += `${guess}, `;
    totalGuesses++;
    remainingGuesses.innerHTML = `Remaining Guesses = ${10 - totalGuesses}`;
}

function endGame() {
    startGame = false;
    inputFiled.value = '';
    inputFiled.setAttribute('disabled', 'true');
    submitButton.setAttribute('disabled', '');
    message.appendChild(newStartButton);
    newStartButton.innerHTML = `Start New Game`;
    newStartButton.style.display = 'flex';
    newStartButton.style.padding = '10px';
    newStartButton.style.backgroundColor = 'red';
    newStartButton.style.margin = '5px';
    newGame();
}

function newGame() {
    newStartButton.addEventListener('click', (e) => { // Correct the typo in "click".
        randomNumber = Math.round(Math.random() * 100) + 1;
        startGame = true;
        submitButton.removeAttribute('disabled');
        inputFiled.removeAttribute('disabled');
        totalGuesses = 0;
        remainingGuesses.innerHTML = `Remaining Guesses = ${10 - totalGuesses}`;
        previousGuesses = [];
        message.innerHTML = ''; // Clear the message.
        oldGuess.innerHTML = 'Previous Gueses: '; // Clear the old guesses.
        newStartButton.remove();
    });
}
