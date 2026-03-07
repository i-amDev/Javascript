let randomNumber = parseInt(Math.random()*100 + 1)

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const value = parseInt(userInput.value);
        validateGuess(value);
    })
}

function validateGuess(value) {
    if (isNaN(value)) {
        alert('Please enter a valid number');
    }
    else if (value < 1) {
        alert('Please enter a number greater than 1');
    }
    else if (value > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        if (numGuess > 10) {
            displayGuess(value);
            displayMessage(`Game Over!! Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(value);
            checkGuess(value);
        }
    }
}

function displayGuess(value) {
    userInput.value = '';
    guessSlot.innerHTML += `${value} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function checkGuess(value) {
    if (value === randomNumber) {
        displayMessage(`You guessed it right!!⭐`);
        endGame();
    }
    else if (value < randomNumber) {
        displayMessage(`Your guess was too low`);
    }
    else {
        displayMessage(`Your guess was too high`);
    }
}

function displayMessage(message) {
    lowOrHigh.textContent = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}
