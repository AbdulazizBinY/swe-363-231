let turn = "X";
let gameEnded = false;
let cells = document.querySelectorAll(".cell");
let currentCellIndex = 0; // To keep track of the currently selected cell using the keyboard

// Highlight the initial cell for keyboard navigation
cells[currentCellIndex].style.border = '4px solid yellow';

cells.forEach(cell => cell.addEventListener("click", cellClicked));

// Keyboard event listener
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    cells[currentCellIndex].style.border = '4px solid #343a40';

    switch (event.key) {
        case 'ArrowLeft':
            currentCellIndex = (currentCellIndex - 1 + cells.length) % cells.length;
            break;
        case 'ArrowRight':
            currentCellIndex = (currentCellIndex + 1) % cells.length;
            break;
        case 'ArrowUp':
            currentCellIndex = (currentCellIndex - 3 + cells.length) % cells.length;
            break;
        case 'ArrowDown':
            currentCellIndex = (currentCellIndex + 3) % cells.length;
            break;
        case ' ':
            cellClicked({ target: cells[currentCellIndex] });
            break;
    }

    cells[currentCellIndex].style.border = '4px solid yellow'; // Highlight the currently selected cell
}

function cellClicked(event) {
    let cell = event.target;
    if (cell.innerText === "" && !gameEnded) {
        addLetter(cell);
        checkWinner();
    }
}

function addLetter(cell) {
    cell.innerText = turn;
    cell.classList.add(turn.toLowerCase());
    turn = turn === "X" ? "O" : "X";
    document.querySelector("#turn span").innerText = turn;
}

function checkWinner() {
    const combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of combos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            gameEnded = true;
            combo.forEach(i => cells[i].classList.add('won'));
            document.getElementById("turn").innerText = cells[a].innerText + " Wins!";
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText !== "")) {
        gameEnded = true;
        document.getElementById("turn").innerText = "Draw!";
    }
}