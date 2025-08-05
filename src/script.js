import {Player} from './player.js';
import {Game} from './game.js';
import {drawMark} from "./utils.js";

let game = new Game;
let playerX = new Player("X");
let playerO = new Player("O");
// X starts the game
let currentPlayer = playerX;
let resetPending = false;

const svg = document.getElementById('board');

function resetGame() {
    game = new Game();
    svg.querySelectorAll('.mark').forEach(mark => mark.remove()); // Remove existing marks
}

function handleCellClick(event) {
    if (resetPending) {
        resetGame();
        resetPending = false;
        return;
    }

    const cell = event.target;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    if (game.board[row][col]) return; // Cell already occupied
    game.board[row][col] = currentPlayer.mark;

    // Draw the mark in the clicked cell
    svg.appendChild(drawMark(cell, currentPlayer.mark));

    if (game.winner || game.isDraw()) {
        setTimeout(() => {
            alert(game.winner ? `${game.winner} wins!` : "Draw!");
            resetPending = true;
        }, 10);
    }

    currentPlayer = (currentPlayer.mark === 'X') ? playerO : playerX;
}

// Add event listener to the SVG board
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.addEventListener("click", handleCellClick);
    }
}
