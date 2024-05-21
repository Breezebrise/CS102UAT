// Function to generate a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the game when the button is clicked
function playGame() {
    // Generate two random numbers between 1 and 6
    let die1 = rollDie();
    let die2 = rollDie();

    // Calculate the sum of the two dice
    let sum = die1 + die2;

    // Variable to store the game result message
    let resultMessage;

    // Determine the game result based on the sum and dice values
    if (sum === 7 || sum === 11) {
        resultMessage = `You rolled ${die1} and ${die2} (sum: ${sum}). CRAPS – you lose! Better luck next time, Pirate!`;
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultMessage = `You rolled ${die1} and ${die2} (sum: ${sum}). You won! The Straw Hat Pirates celebrate your victory!`;
    } else {
        resultMessage = `You rolled ${die1} and ${die2} (sum: ${sum}). You pushed! It's a draw, keep trying, Nakama!`;
    }

    // Output the result to the HTML element with id 'gameResult'
    document.getElementById('gameResult').innerHTML = resultMessage;
}
