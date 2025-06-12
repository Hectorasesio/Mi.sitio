const board = document.getElementById('board');
const restartBtn = document.getElementById('restart');
const cells = Array.from(document.querySelectorAll('[data-cell]'));
let turn = 'x';

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleClick(e) {
    const cell = e.target;
    if (cell.classList.contains('x') || cell.classList.contains('o')) return;
    cell.classList.add(turn);
    if (checkWin(turn)) {
        setTimeout(() => alert(`${turn.toUpperCase()} gana!`), 10);
    } else if (cells.every(c => c.classList.contains('x') || c.classList.contains('o'))) {
        setTimeout(() => alert('Empate!'), 10);
    } else {
        turn = turn === 'x' ? 'o' : 'x';
    }
}

function checkWin(player) {
    return winningCombinations.some(comb => comb.every(index => cells[index].classList.contains(player)));
}

function restart() {
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
    });
    turn = 'x';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restart);
