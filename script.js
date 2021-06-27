let mark = "X";
let winner = undefined;

// CREATE TABLE
let table = document.querySelector("table tbody");
let cells = document.getElementsByTagName("td");

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
				
				if (isWinner(this)) {
					alert(`${this.textContent} won!`)	
				}
				if (mark == "X") {
					mark = "O";
				} else {
					mark = "X";
				}
			}
		})
		let cellsArray = Array.from(cells);

		if (cellsArray.every(cell => cell.textContent != "")) {
		 	alert("Draw");
		}
	}
}

function isWinner(thisCell) {
	let rows = table.rows;
	function areAllEqual(siblings) {
		if (siblings.every(mark => mark == thisCell.textContent)) {
			return true;
		}
	}
	// Horizontal row
	let thisRow = thisCell.parentNode;

	let horizontalSiblings = Array.from(thisRow.children, cell => cell.textContent);

	let hasHorisontal = areAllEqual(horizontalSiblings);
	
	// Vertical row
	cells = Array.from(cells);

	let thisColumn = cells.filter(cell => cell.cellIndex == thisCell.cellIndex);

	let verticaltalSiblings = thisColumn.map(cell => cell.textContent)

	let hasVertical = areAllEqual(verticaltalSiblings);

	// Diagonal rows
	let mainDiagonal = [];
	let antidiagonal = [];

	for (row of rows) {
	 	for (cell of row.cells) {
	 		if (cell.cellIndex == row.rowIndex) {
	 			mainDiagonal.push(cell);
	 		} else if (cell.cellIndex == 3 - row.rowIndex) {
	 			antidiagonal.push(cell);
	 		}
	 	}
	}

	let diagonals = mainDiagonal || antidiagonal;

	let hasDiagonal;

	if (thisCell in diagonals) {
		hasDiagonal = (areAllEqual(mainDiagonal) || areAllEqual(antidiagonal));
	}

	let has3in1row = hasHorisontal || hasVertical || hasDiagonal;
 
	return has3in1row;
}
