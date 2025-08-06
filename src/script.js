import {Player} from './player.js';
import {Game} from './game.js';
import {drawMark, drawPreviewMark} from "./utils.js";

let game = new Game;
let playerX = new Player("X");
let playerO = new Player("O");
// X starts the game
let currentPlayer = playerX;
let resetPending = false;

const svg = document.getElementById('board');

document.querySelectorAll('#board rect').forEach(rect => {
    rect.addEventListener("click", (event) => {
        if (resetPending) {
            game = new Game();
            svg.querySelectorAll('.mark').forEach(mark => mark.remove()); // Remove existing marks
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
    });

    let preview;

    rect.addEventListener('mouseenter', (event) => {
        const cell = event.target;
        const {row, col} = cell.dataset;

        if (game.board[row][col] || resetPending) return; // Cell already occupied or game over

        preview = drawPreviewMark(cell, currentPlayer.mark);
        svg.appendChild(preview);
    });

    rect.addEventListener('mouseleave', () => {
        if (preview) {
            preview.remove();
            preview = null;
        }
    });
})
