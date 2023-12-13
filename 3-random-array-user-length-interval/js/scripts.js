/* 

    3 - Array di numeri casuali di lunghezza e intervallo definiti dall'utente

*/

const unaVariabile = parseInt(prompt('Quanti elementi vuoi generare?'));

const randomNumbers = [];
for (let i = 0; i < unaVariabile; i++) {
    const gino = generateRandomNumber(1, unaVariabile);
    console.log(gino);

    randomNumbers.push(gino);
}

console.log(randomNumbers);

/* 
    FUNZIONI
*/
function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}