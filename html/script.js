let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessHistory = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    const message = document.getElementById('message');
    const history = document.getElementById('history');

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
    } else {
        guessHistory.push(userGuess);

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = 'green';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'orange';
        }

        history.textContent = `Your guesses: ${guessHistory.join(', ')}`;
    }

    document.getElementById('guess').value = '';
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessHistory = [];
    document.getElementById('message').textContent = '';
    document.getElementById('history').textContent = '';
    document.getElementById('guess').value = '';
});
