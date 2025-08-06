/**
 * Gets all lines (rows, columns, and diagonals) from the Tic Tac Toe board.
 * @param {Array} board - The Tic Tac Toe board represented as a 2D array.
 * @returns {Array} An array containing all lines from the board.
 */
export function getLines(board) {
    const lines = [];

    // Rows and columns
    for (let i = 0; i < 3; i++) {
        lines.push(board[i]); // horizontal
        lines.push(board.map(row => row[i])); // vertical
    }

    // Diagonals
    lines.push(board.map((row, i) => row[i])); // left diagonal
    lines.push(board.map((row, i) => row[(board.length - 1) - i])); // right diagonal
    return lines;
}

/** * Initializes the Tic Tac Toe board with a specified size.
 * If the board is already initialized, it returns the existing board.
 * @param {number} BOARD_SIZE - The size of the board (default is 3).
 * @returns {Array} The initialized board.
 */
export function initializeBoard(BOARD_SIZE = 3) {
    return Array.from({length: BOARD_SIZE}, () => {
        return Array(BOARD_SIZE).fill(undefined);
    });
}

/** * Draws an 'X' mark on the SVG board at the specified coordinates.
 * @param {number} cx - The x-coordinate of the center of the 'X'.
 * @param {number} cy - The y-coordinate of the center of the 'X'.
 * @param {number} offset - The offset from the center to the ends of the lines.
 */
export function drawX(cx, cy, offset) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", cx - offset);
    line1.setAttribute("y1", cy - offset);
    line1.setAttribute("x2", cx + offset);
    line1.setAttribute("y2", cy + offset);
    line1.setAttribute("stroke", "red");
    line1.setAttribute("stroke-width", "5");
    line1.setAttribute("stroke-linecap", "round");

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", cx + offset);
    line2.setAttribute("y1", cy - offset);
    line2.setAttribute("x2", cx - offset);
    line2.setAttribute("y2", cy + offset);
    line2.setAttribute("stroke", "red");
    line2.setAttribute("stroke-width", "5");
    line2.setAttribute("stroke-linecap", "round");

    group.appendChild(line1);
    group.appendChild(line2);
    group.setAttribute("class", "mark");

    return group;
}

/** * Draws an 'O' mark on the SVG board at the specified coordinates.
 * @param {number} cx - The x-coordinate of the center of the 'O'.
 * @param {number} cy - The y-coordinate of the center of the 'O'.
 * @param {number} r - The radius of the circle representing the 'O'.
 */
export function drawO(cx, cy, r) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "blue");
    circle.setAttribute("stroke-width", "5");
    circle.setAttribute("fill", "none");
    circle.setAttribute("class", "mark");

    return circle;
}

/** * Draws a mark ('X' or 'O') in the specified cell of the SVG board.
 * @param {Element} cell - The SVG cell element where the mark will be drawn.
 * @param {string} value - The mark to draw ('X' or 'O').
 */
export function drawMark(cell, value) {
    const x = Number(cell.getAttribute("x"));
    const y = Number(cell.getAttribute("y"));
    const width = Number(cell.getAttribute("width"));
    const height = Number(cell.getAttribute("height"));

    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const offset = Math.min(width, height) * 0.3;

    return value === 'X' ? drawX(centerX, centerY, offset) : drawO(centerX, centerY, offset);
}

/** * Draws a preview mark ('X' or 'O') in the specified cell of the SVG board.
 * The preview mark is semi-transparent to indicate it's a preview.
 * @param {Element} cell - The SVG cell element where the preview mark will be drawn.
 * @param {string} value - The mark to preview ('X' or 'O').
 * @returns {Element} The SVG element representing the preview mark.
 */
export function drawPreviewMark(cell, value) {
    const mark = drawMark(cell, value);
    mark.setAttribute('opacity', '0.3');
    return mark;
}
