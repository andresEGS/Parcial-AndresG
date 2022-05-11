
const inputMatriz = document.getElementById('matriz');
const buttonMatriz = document.getElementById('calcular');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

buttonDiagonal.addEventListener('click', menuDiagonal);
buttonMatriz.addEventListener('click', calcularMatriz);


function menuDiagonal () {
    page1.style.display = 'none';
    page2.style.display = 'block';
}

function calcularMatriz() {
    const data = inputMatriz.value;
    const matrix = data.split(' ');
    let valida = true;
    for (w=0; w<matrix.length; w++) {
        if (matrix[w].length != matrix.length) {
            valida = false;
            break;
        }
    }
    if (valida) {
        let diagPrin = 0;
        let diagSec = 0;
        for (x=0; x<matrix[0].length; x++) {
            diagPrin += parseInt(matrix[x][x]);
            diagSec += parseInt([matrix[0].length-x]);
        }
        let p = document.createElement('p');
        let text = document.createTextNode(`La diferencia de las diagonales es de: ${diagPrin-diagSec}`);
        p.appendChild(text);
        page2.appendChild(p);
    } else {
        let p = document.createElement('p');
        let text = document.createTextNode(`La matriz no es cuadrada`);
        p.appendChild(text);
        page2.appendChild(p);
    }
}
