// CREATE TABLE
let table = document.querySelector("table");
for (let i = 0; i < 3; i++) {
	let row = table.insertRow();
	row.className = i;
	for (let j = 0; j < 3; j++) {
		let cell = row.insertCell();
		cell.className = j;
	}
}


function createPlayer(mark) {
	return {
		mark: mark,
		score: 0,
	}
}

const gameboard = [Array(3), Array(3), Array(3)];

const firstPlayer = createPlayer("X");
const leftPlayer = createPlayer("O");


