const BOARD_SIZE = 3;

module.exports = class Gameboard {
    constructor(board = []) {
        this.board = this.createBoard(board);
    }

    createBoard(board) {
        if (board.length > 0) return board;
        return Array.from({length: BOARD_SIZE}, () => Array(3).fill(undefined));
    }

    getLines() {
        const lines = [];

        // Rows and columns
        for (let i = 0; i < 3; i++) {
            lines.push(this.board[i]); // horizontal
            lines.push(this.board.map(row => row[i])); // vertical
        }

        // Diagonals
        lines.push(this.board.map((row, i) => row[i])); // left diagonal
        lines.push(this.board.map((row, i) => row[2 - i])); // right diagonal
        return lines;
    }

    getWinner() {
        for (let line of this.getLines()) {
            if (line.every(cell => cell === line[0] && cell !== undefined)) {
                return line[0]; // Return the winning mark
            }
        }
    }

    draw() {
        let isEmpty = (cell) => cell === undefined;
        return !this.board.some(row => row.some(cell => isEmpty(cell))) && !this.getWinner();
    }

    gameOver() {
        return !!this.getWinner() || this.draw();
    }
}
