const Player = require('./player.js');
const Game = require('./game.js');

let game = new Game;
let playerX = new Player("X");
let playerO = new Player("O");

let playGame = function(player) {
    let winner = game.winner;
    let draw = game.isDraw();

    if (winner || draw) {
        console.log("Game Over");
        if (winner) {
            player.incrementScore();
            console.log(`${player.mark} is winner`);
        }
        else if (draw) console.log("It's a isDraw");
    }
    else {
        player = (player === playerO) ? playerX : playerO;
        playGame(player);
    }
};

// X starts the game
playGame(playerX);
