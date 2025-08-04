module.exports = class Player {
    constructor(mark) {
        this.mark = mark;
        // this.name = name;
        this.score = 0;
    }

    won = (board) => board.getWinner() === this.mark;

    incrementScore = () => {
        this.score++;
    }
}
