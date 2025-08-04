const Player = require('./player.js');
const Gameboard = require('./gameboard.js');

let gameboard = new Gameboard;
let playerX = new Player("X");
let playerO = new Player("O");

let playGame = function(player) {
    if (gameboard.gameOver()) {
        if (gameboard.getWinner()) {
            player.incrementScore();
            console.log(`${player.mark} is winner`);
        }
        else if (gameboard.draw()) console.log("It's a draw");
    }
    else {
        player = (player === playerO) ? playerX : playerO;
        playGame(player);
    }
};

// X starts the game
playGame(playerX);
