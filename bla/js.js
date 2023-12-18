let currentPlayer = 1; // 1 or 2
let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function startGame() {
  currentPlayer = 1;
  gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  renderGameBoard();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function placeDice(row, col) {
  const diceValue = rollDice();
  gameBoard[row][col] = diceValue;

  // Discard opponent's dice with the same value in the same column
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][col] === diceValue) {
      gameBoard[i][col] = null;
    }
  }

  switchPlayer();
  renderGameBoard();

  if (isGameOver()) {
    alert('Game Over! Player ' + currentPlayer + ' wins!');
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function isGameOver() {
  // Check if the current player covered all the cells
  return gameBoard.every(row => row.every(cell => cell !== null));
}

function renderGameBoard() {
  const table = document.getElementById('game-board');
  table.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('td');
      cell.textContent = gameBoard[i][j] || '';
      cell.onclick = function() {
        if (gameBoard[i][j] === null) {
          placeDice(i, j);
        }
      };
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
