/* 

    4 - Array di numeri casuali tutti diversi di lunghezza e intervallo definiti dall'utente

*/

const numeroUtente = parseInt(prompt('Quanti elementi vuoi generare?'));

const randomNumbers = [];
// for (let i = 0; i < numeroUtente; i++) {
while (randomNumbers.length < numeroUtente) {
    // Genero un numero casuale
    const gino = generateRandomNumber(1, numeroUtente);
    console.log(gino);

    // Controllo se questo numero appena generato è già presente nell'array
    let foundInArray = randomNumbers.includes(gino);
    // let foundInArray = false;
    // for (let j = 0; j < randomNumbers.length; j++) {
    //     if (randomNumbers[j] == gino) {
    //         foundInArray = true;
    //     }        
    // }

    // Se non è presente nell'array, lo inserisco (nell'array)
    if (foundInArray == false) {
        randomNumbers.push(gino);
    }
    else {
        console.log('Numero già inserito');
    }
    
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