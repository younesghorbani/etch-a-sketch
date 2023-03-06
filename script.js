function setNumberOfSquares(event) {
    rows[0].value = event.target.value;
    columns[0].value = event.target.value;
}

const squares = document.getElementById('squares');
const rows = document.getElementsByClassName('rows');
const columns = document.getElementsByClassName('columns');
    
rows[0].value = squares.value;
columns[0].value = squares.value;

squares.addEventListener('input', setNumberOfSquares);