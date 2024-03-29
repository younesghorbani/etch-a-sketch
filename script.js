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

function generateRandomColor() {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let randomColor = '#';
    for (let pairCounter = 0; pairCounter < 3; pairCounter++) {
        
        let pair = '';
        for (let digitCounter = 0; digitCounter < 2; digitCounter++) {
            let position = Math.floor(Math.random() * 16);
            pair += digits[position];
        }

        randomColor += pair;
    }

    return randomColor;
}

function useDefaultValues() {
    setNumberOfSquares();
    placeSquares();
}

function cleanGrid(event) {
    event.preventDefault();
    const squares = document.querySelectorAll('.grid .square');
    squares.forEach(square => {
        square.className = 'square';
        square.removeAttribute('style');
    });
}

function useNormalMode(event) {
    if (event.target.className !== 'square normal') {
        event.target.className = 'square normal';
        event.target.style.opacity = '';
    }

    event.target.style.backgroundColor = color.value;
}

let opacity = '';
function useShadingMode(event) {
    if (event.target.style.opacity === '' && event.target.className !== 'square shading') {
        event.target.className = 'square shading';
        event.target.style.opacity = '0.1';
        event.target.style.backgroundColor = color.value;
    } else if (event.target.style.opacity !== '1' && event.target.className === 'square shading') {
        opacity = event.target.style.opacity;
        opacity = Number.parseFloat(opacity);
        opacity = (opacity + 0.1).toString();
        event.target.style.opacity = opacity;
        event.target.style.backgroundColor = color.value;
    }
}

function useColorfulMode(event) {
    if (event.target.className !== 'square colorful') {
        event.target.className = 'square colorful';
        event.target.style.opacity = '';
    }

    const color = generateRandomColor();
    event.target.style.backgroundColor = color;
}

function useActivatedMode(event) {
    if (event.target.id === 'normal') {
        color.value = '#000000';
        color.disabled = false;
        grid[0].removeEventListener('mouseover', useShadingMode);
        grid[0].removeEventListener('mouseover', useColorfulMode);
        grid[0].addEventListener('mouseover', useNormalMode);
    } else if (event.target.id === 'shading') {
        color.value = '#000000';
        color.disabled = true;
        grid[0].removeEventListener('mouseover', useNormalMode);
        grid[0].removeEventListener('mouseover', useColorfulMode);
        grid[0].addEventListener('mouseover', useShadingMode);
    } else {
        color.value = '#cccccc';
        color.disabled = true;
        grid[0].removeEventListener('mouseover', useNormalMode);
        grid[0].removeEventListener('mouseover', useShadingMode);
        grid[0].addEventListener('mouseover', useColorfulMode);
    }
}

const squares = document.getElementById('squares');
const rows = document.getElementsByClassName('rows');
const columns = document.getElementsByClassName('columns');
const color = document.getElementById('color');
const modes = document.querySelectorAll('.modes input');
const clear = document.querySelector('.clear button');
const grid = document.getElementsByClassName('grid');

window.addEventListener('load', useDefaultValues);
squares.addEventListener('input', setNumberOfSquares);
squares.addEventListener('change', placeSquares);
clear.addEventListener('click', cleanGrid);
modes.forEach(mode => mode.addEventListener('change', useActivatedMode));