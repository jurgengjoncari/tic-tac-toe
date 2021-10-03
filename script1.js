let Game = (function () {
    let board = Array.from(Array(3), () => [undefined, undefined, undefined]);
    
    let diagonals = {
        left: board.map((row, i) => row.find((cell, j) => i = j)),
        right: board.map((row, i) => row.find((cell, j) => i = 2 - j))
    };

    function getRows(position) {
        return {
            horizontal: board[position.row],
            vertical: board.map(row => row[position.col])
        }
    };

    board.oneRowFilled = function(mark, position) {
        rows = [
            getRows(position).horizontal, 
            getRows(position).vertical, 
            diagonals.left, 
            diagonals.right
        ];

        let isMarked = (row) => row.every(cell => cell == mark);
        let areMarked = (rows) => rows.map(row => isMarked(row));
        
        if (areMarked(rows).some(Boolean)) return true;
        else return false;
    }
    
    board.isDraw = function () {
        let isEmpty = (cell) => cell === undefined;
        if (board.some(row => row.some(isEmpty(cell)))) return false;
        else return true;
    }

    return board;
})();

function createPlayer(mark) {
    let name = prompt("Enter your name: ");

    let position = {};

    let setPosition = (row, col) => {
        position.row = row;
        position.col = col;
    }

    let won = (board) => board.oneRowFilled(mark, position);

    return {
        mark, 
        name, 
        setPosition, 
        won
    };
};

let playerX = createPlayer("X");
let playerO = createPlayer("O");

let playGame = function(player) {
    let row = prompt(`Please enter an empty row: `); 
    let col = prompt(`Please enter an empty column: `);

    if (Game[row][col] == undefined) {
        Game[row][col] = player.mark;
        player.setPosition(row, col)
    }
    else playGame(player);

    let isOver = (game) => player.won(game) || game.isDraw();
    
    let changeTurn = (player) => (player == playerO) ? playerX : playerO;

    let restart = () => {}

    if (isOver(Game)) {
        if (player.won(Game)) console.log(`${player.name} is winner`);
        else if (Game.isDraw()) console.log("It's a draw");
        restart();
        return
    } 
    else playGame(changeTurn(player));
};

playGame(playerX);