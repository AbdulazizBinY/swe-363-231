let turn = "X";
let gameEnded = false;
let cells = document.querySelectorAll(".cell");
let currentCellIndex = 0;  // To keep track of the currently selected cell using the keyboard

// Highlight the initial cell for keyboard navigation
cells[currentCellIndex].style.border = '4px solid yellow';

cells.forEach(cell => cell.addEventListener("click", cellClicked));

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    cells[currentCellIndex].style.border = '4px solid #343a40';
    navigateGame(event.key);
    cells[currentCellIndex].style.border = '4px solid yellow';
}

function navigateGame(key) {
    const navigation = {
        'ArrowLeft': -1,
        'ArrowRight': 1,
        'ArrowUp': -3,
        'ArrowDown': 3
    };
    currentCellIndex = (currentCellIndex + navigation[key] + cells.length) % cells.length;
}

function cellClicked(event) {
    let cell = event.target;
    if (!cell.innerText && !gameEnded) {
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

    const winningCombo = combos.find(combo => {
        const [a, b, c] = combo;
        return cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText;
    });

    if (winningCombo) {
        gameEnded = true;
        winningCombo.forEach(i => cells[i].classList.add('won'));
        document.getElementById("turn").innerText = cells[winningCombo[0]].innerText + " Wins!";
        return;
    }

    if ([...cells].every(cell => cell.innerText)) {
        gameEnded = true;
        document.getElementById("turn").innerText = "Draw!";
    }
}
