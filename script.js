let mark = "X";

// CREATE TABLE
let table = document.querySelector("table tbody");

let cells = document.getElementsByTagName("td");

function emptyCells() {
	for (cell of cells) {
		cell.textContent = "";
	}
}

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
					alert(`${this.textContent} won!`);
					
					emptyCells();
				} else {
					let cellsArray = Array.from(cells);

					if (cellsArray.every(cell => cell.textContent != "")) {
						alert("Draw");

						emptyCells();
					} else {
						if (mark == "X") {
							mark = "O";
						} else {
							mark = "X";
						}	
					}
				}
			}
		})
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
	let diagonals = {
		main: cells.filter(cell => cell.cellIndex == cell.parentElement.rowIndex),
		anti: cells.filter(cell => cell.cellIndex == 2 - cell.parentElement.rowIndex)
	}

	let hasDiagonal;

	if (diagonals.main.includes(thisCell) || diagonals.anti.includes(thisCell)) {
		diagonals.mainSiblings = Array.from(diagonals.main, cell => cell.textContent);
		diagonals.antiSiblings = Array.from(diagonals.anti, cell => cell.textContent);

		hasDiagonal = (areAllEqual(diagonals.mainSiblings) || areAllEqual(diagonals.antiSiblings));
	}

	let has3in1row = hasHorisontal || hasVertical || hasDiagonal;
 
	return has3in1row;
}
