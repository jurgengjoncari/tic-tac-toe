/**
 * @file Helper functions for the Tic Tac Toe game.
 * @module helpers
 */
module.exports = {
    getLines,
    initializeBoard
};

/**
 * Gets all lines (rows, columns, and diagonals) from the Tic Tac Toe board.
 * @param {Array} board - The Tic Tac Toe board represented as a 2D array.
 * @returns {Array} An array containing all lines from the board.
 */
function getLines(board) {
    const lines = [];

    // Rows and columns
    for (let i = 0; i < 3; i++) {
        lines.push(board[i]); // horizontal
        lines.push(board.map(row => row[i])); // vertical
    }

    // Diagonals
    lines.push(board.map((row, i) => row[i])); // left diagonal
    lines.push(board.map((row, i) => row[(board.length - 1) - i])); // right diagonal
    return lines;
}

/** * Initializes the Tic Tac Toe board with a specified size.
 * If the board is already initialized, it returns the existing board.
 * @param {number} BOARD_SIZE - The size of the board (default is 3).
 * @returns {Array} The initialized board.
 */
function initializeBoard(BOARD_SIZE = 3) {
    return Array.from({length: BOARD_SIZE}, () => {
        return Array(BOARD_SIZE).fill(undefined);
    });
}

