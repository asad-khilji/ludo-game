// Define players and current player index
const players = ['Red', 'Green', 'Blue', 'Yellow'];
let currentPlayerIndex = 0;

// Function to update current player display
function updateCurrentPlayer() {
    const currentPlayerDisplay = document.getElementById('currentPlayer');
    currentPlayerDisplay.textContent = `Current Player: ${players[currentPlayerIndex]}`;
}

// Function to advance to the next player's turn
function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateCurrentPlayer();
}

// Function to simulate dice roll
function rollNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const numberResult = document.getElementById('numberResult');
    numberResult.textContent = `Number: ${randomNumber}`;
}

// Initialize display for the first player
updateCurrentPlayer();
