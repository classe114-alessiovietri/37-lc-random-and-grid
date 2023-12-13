/* 

   6 - Griglia di elementi (numero deciso dall'utente)

*/

const numeroCelle = parseInt(prompt('Quanti elementi vuoi generare?'));
console.log(numeroCelle);

const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= numeroCelle; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;
    gridContainer.append(cell);
}