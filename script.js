function setNumberOfSquares() {
    rows[0].value = squares.value;
    columns[0].value = squares.value;
}

function placeSquares() {
    if (grid[0].hasChildNodes()) grid[0].innerHTML = '';
    grid[0].style.gridTemplateColumns = `repeat(${squares.value}, 1fr)`;
    grid[0].style.gridTemplateRows = `repeat(${squares.value}, 1fr)`;

    const square = document.createElement('div');
    square.classList.add('square');

    const total = Math.pow(squares.value, 2);
    for (let counter = 0; counter < total; counter++) {
        grid[0].insertAdjacentHTML('beforeend', square.outerHTML);
    }
}

function useDefaultValues() {
    setNumberOfSquares();
    placeSquares();
}

function useNormalMode(event) {
    if (event.target.className !== 'square normal') {
        event.target.classList.add('normal');
        event.target.style.opacity = '';
    }

    event.target.style.backgroundColor = color.value;
}

function useActivatedMode(event) {
    if (event.target.id === 'normal') {
        grid[0].addEventListener('mouseover', useNormalMode);
    }
}

const squares = document.getElementById('squares');
const rows = document.getElementsByClassName('rows');
const columns = document.getElementsByClassName('columns');
const color = document.getElementById('color');
const modes = document.querySelectorAll('.modes input');
const grid = document.getElementsByClassName('grid');

window.addEventListener('load', useDefaultValues);
squares.addEventListener('input', setNumberOfSquares);
squares.addEventListener('change', placeSquares);
modes.forEach(mode => mode.addEventListener('change', useActivatedMode));