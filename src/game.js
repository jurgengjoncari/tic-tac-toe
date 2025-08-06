import {
    getLines,
    initializeBoard
} from './utils.js';

const BOARD_SIZE = 3;

export class Game {
    constructor(board = null) {
        if (Array.isArray(board) && board.length > 1) {
            this.board = board;
        } else {
            this.board = initializeBoard(BOARD_SIZE);
        }
    }

    get winner() {
        for (const line of getLines(this.board)) {
            if (line.every(cell => cell === line[0] && cell !== undefined)) {
                return line[0]; // Return the winning mark
            }
        }
    }

    isDraw() {
        let isEmpty = (cell) => cell === undefined;
        return !this.board.some(row => row.some(cell => isEmpty(cell))) && !this.winner;
    }
}
