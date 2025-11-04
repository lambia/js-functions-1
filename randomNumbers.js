/**
 *  Restituisce un numero casuale
 *  @param {number} min  Intero che rappresenta il valore minimo
 *  @param {number} max  Intero che rappresenta il valore massimo
 *  @return {number} Intero casuale
 */
function getRandomNumber(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

const dadoMinimo = 1;
const dadoMassimo = 21;

for (let i = 0; i < 5; i++) {
    alert( getRandomNumber(dadoMinimo, dadoMassimo) );
}

