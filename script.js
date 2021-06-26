let mark = "X";
let winner = undefined;

// CREATE TABLE
let table = document.querySelector("table tbody");
let rows = table.rows;
let cells = document.getElementsByTagName("td");
cells = Array.from(cells);

for (let i = 0; i < 3; i++) {
	let row = table.insertRow();
	row.className = i;
	for (let j = 0; j < 3; j++) {
		let cell = row.insertCell();
		cell.className = j;
	
		// ADD EVENT-LISTENER
		cell.addEventListener("click", function () {
			if (this.textContent == "") {	
				this.textContent = mark;
					
				if (mark == "X") {
					mark = "O";
				} else {
					mark = "X";
				}
			}
			
			if (isWinner(this)) {
				// replace with return
				alert(`${this.textContent} won!`)
			};
		})
		// uncomment after making it a function
		// let cellsArray = Array.from(cells)

		// if (cellsArray.every(cell => cell.textContent != "")) {
		// 	return "Draw"
		// }
	}
}

function isWinner(thisCell) {
	function areAllEqual(siblings) {
		if (siblings.every(mark => mark == thisCell.textContent)) {
			return true;
		}
	}
	// Horizontal row
	let thisRow = thisCell.parentNode;

	let horizontalSiblings = Array.from(thisRow.children, cell => cell.textContent);

	let h = areAllEqual(horizontalSiblings);
	
	// Vertical row
	let thisColumn = cells.filter(cell => cell.cellIndex == thisCell.cellIndex);

	let verticaltalSiblings = thisColumn.map(cell => cell.textContent)

	let v = areAllEqual(verticaltalSiblings);

	// Diagonal rows
	// let mainDiagonalSiblings = [];
	// let antidiagonalSiblings = [];
	// for (row of rows) {
	// 	for (cell of row.cells) {
	// 		if (cell.cellIndex == row.rowIndex) {
	// 			mainDiagonalSiblings.push(cell.textContent);
	// 		} else if (cell.cellIndex == 3 - row.rowIndex) {
	// 			antidiagonalSiblings.push(cell.textContent);
	// 		}
	// 	}
	// }

	// winner = (identifyWinner(mainDiagonalSiblings) || identifyWinner(antidiagonalSiblings));
	// return winner;
	return h || v;
}