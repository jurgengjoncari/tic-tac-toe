import {Game} from "../game.js";
import {describe, it, expect} from 'vitest';
describe('Win', () => {
    it('horizontal', () => {
        const BOARD = [
            ['X', 'X', 'X'],
            ['O', 'O', undefined],
            [undefined, undefined, undefined]
        ]
        let game = new Game(BOARD);

        expect(game.winner).toBe('X');
        expect(game.isDraw()).toBe(false);
    });

    it('vertical', () => {
        const BOARD = [
            ['X', 'X', 'O'],
            ['O', 'X', 'O'],
            [undefined, undefined, 'O']
        ]
        let game = new Game(BOARD);

        expect(game.winner).toBe('O');
        expect(game.isDraw()).toBe(false);
    });

    it('diagonal', () => {
        const BOARD = [
            ['X', 'X', 'O'],
            ['X', 'O', 'X'],
            ['O', 'O', undefined]
        ]
        let game = new Game(BOARD);

        expect(game.winner).toBe('O');
        expect(game.isDraw()).toBe(false);
    });
});

it('Draw', () => {
    const BOARD = [
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
        ['X', 'X', 'O']
    ]
    let game = new Game(BOARD);

    expect(game.winner).toBe(undefined);
    expect(game.isDraw()).toBe(true);
});
