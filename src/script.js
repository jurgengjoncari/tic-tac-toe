import {Player} from './player.js';
import {Game} from './game.js';
import {
    drawO,
    drawX
} from "./utils.js";

let game = new Game;
let playerX = new Player("X");
let playerO = new Player("O");
// X starts the game
let currentPlayer = playerX;

const svg = document.getElementById('board');

function drawMark(row, col, value) {
    const cell = svg.querySelector(`rect[data-row="${row}"][data-col="${col}"]`);
    if (!cell) return;

    const x = Number(cell.getAttribute("x"));
    const y = Number(cell.getAttribute("y"));
    const width = Number(cell.getAttribute("width"));
    const height = Number(cell.getAttribute("height"));

    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const offset = Math.min(width, height) * 0.3;

    const mark = value === 'X' ? drawX(centerX, centerY, offset) : drawO(centerX, centerY, offset);

    svg.appendChild(mark);
}

function handleCellClick(event) {
    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);
    if (game.board[row][col] !== undefined) return; // Cell already occupied

    game.board[row][col] = currentPlayer.mark;
    drawMark(row, col, currentPlayer.mark);
    if (game.winner || game.isDraw()) {
        setTimeout(() => alert(game.winner ? `${currentPlayer.mark} wins!` : "Draw!"), 10);
        return;
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
