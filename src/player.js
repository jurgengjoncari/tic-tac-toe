module.exports = class Player {
    constructor(mark) {
        this.mark = mark;
        // this.name = name;
        this.score = 0;
    }

    won = (board) => board.winner() === this.mark;

    incrementScore = () => {
        this.score++;
    }
}
