let turn = "X";
let gameEnded = false;
let cells = document.querySelectorAll(".cell");

cells.forEach(cell => cell.addEventListener("click", cellClicked));

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