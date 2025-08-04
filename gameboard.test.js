const Gameboard = require("./gameboard");

describe('Win', () => {
    it('horizontal', () => {
        const BOARD = [
            ['X', 'X', 'X'],
            ['O', 'O', undefined],
            [undefined, undefined, undefined]
        ]
        let board = new Gameboard(BOARD);

        expect(board.getWinner()).toBe('X');
        expect(board.draw()).toBe(false);
        expect(board.gameOver()).toBe(true);
    });

    it('vertical', () => {
        const BOARD = [
            ['X', 'X', 'O'],
            ['O', 'X', 'O'],
            [undefined, undefined, 'O']
        ]
        let board = new Gameboard(BOARD);

        expect(board.getWinner()).toBe('O');
        expect(board.draw()).toBe(false);
        expect(board.gameOver()).toBe(true);
    });

    it('diagonal', () => {
        const BOARD = [
            ['X', 'X', 'O'],
            ['X', 'O', 'X'],
            ['O', 'O', undefined]
        ]
        let board = new Gameboard(BOARD);

        expect(board.getWinner()).toBe('O');
        expect(board.draw()).toBe(false);
        expect(board.gameOver()).toBe(true);
    });
});

it('Draw', () => {
    const BOARD = [
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
        ['X', 'X', 'O']
    ]
    let board = new Gameboard(BOARD);

    expect(board.getWinner()).toBe(undefined);
    expect(board.draw()).toBe(true);
    expect(board.gameOver()).toBe(true);
});
