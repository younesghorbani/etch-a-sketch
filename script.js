function setNumberOfSquares() {
    rows[0].value = squares.value;
    columns[0].value = squares.value;
}

function placeSquares() {
    const grid = document.getElementsByClassName('grid');
    if (grid[0].hasChildNodes()) grid[0].innerHTML = '';
    grid[0].style.display = 'grid';
    grid[0].style.gridTemplateColumns = `repeat(${squares.value}, 1fr)`;
    grid[0].style.gridTemplateRows = `repeat(${squares.value}, 1fr)`;

    const square = document.createElement('div');
    square.classList.add('square');

    const total = Math.pow(squares.value, 2);
    for (let counter = 0; counter < total; counter++) {
        grid[0].insertAdjacentHTML('beforeend', square.outerHTML);
    }
}

const squares = document.getElementById('squares');
const rows = document.getElementsByClassName('rows');
const columns = document.getElementsByClassName('columns');

window.addEventListener('load', setNumberOfSquares);
window.addEventListener('load', placeSquares);
squares.addEventListener('input', setNumberOfSquares);
squares.addEventListener('change', placeSquares);