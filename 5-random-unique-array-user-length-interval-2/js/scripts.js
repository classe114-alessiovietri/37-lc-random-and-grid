/* 

    5 - Array di numeri casuali tutti diversi di lunghezza e intervallo definiti dall'utente

*/

const numeroUtente = parseInt(prompt('Quanti elementi vuoi generare?'));

const randomNumbers = [];
for (let i = 0; i < numeroUtente; i++) {
    // Genero un numero casuale
    let gino = generateRandomNumber(1, numeroUtente);
    console.log(gino);

    // Controllo se questo numero appena generato è già presente nell'array
    let foundInArray = randomNumbers.includes(gino);
    while (foundInArray == true) {
        gino = generateRandomNumber(1, numeroUtente);
        console.log(gino);
        foundInArray = randomNumbers.includes(gino);
    }

    randomNumbers.push(gino);
    
    console.log(randomNumbers);
}

console.log(randomNumbers);

/* 
    FUNZIONI
*/
function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}