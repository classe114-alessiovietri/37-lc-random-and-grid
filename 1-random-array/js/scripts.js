/* 

    1 - Array di numeri casuali
    Voglio generare un array di numeri casuali

*/

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    const gino = generateRandomNumber(1, 10);
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