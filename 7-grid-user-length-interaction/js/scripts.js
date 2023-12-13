/* 

   7 - Griglia di elementi (numero deciso dall'utente) con interazione

*/

const numeroCelle = parseInt(prompt('Quanti elementi vuoi generare?'));
console.log(numeroCelle);

const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= numeroCelle; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;

    cell.addEventListener('click', function () {
        console.log(this);

        // if (this.classList.contains('active')) {
        //     this.classList.remove('active');
        // }
        // else {
        //     this.classList.add('active');
        // }
        // OPPURE
        this.classList.toggle('active');

        console.log(this.innerHTML);
    });

    gridContainer.append(cell);
}