/**
 *  Restituisce una stringa opposta a quella in ingresso
 *  @param {string} text  La stringa da invertire
 *  @return {string} La nuova stringa invertita
 */
function reverseString(text) {

    let result = "";

    for (let i = text.length; i >= 0; i--) {
        const carattere = text.charAt(i);
        result += carattere;
    }

    return result
}

console.log( reverseString("classe #10") ); //restituisce "01# essalc"

/**
 *  Restituisce una stringa con l'iniziale maiuscola
 *  @param {string} word  La stringa da modificare
 *  @return {string} La nuova stringa con l'iniziale maiuscola
 */
function capitalizeWord(word) {

  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.substring(1); // <--- ??
  const capitalizedWord = firstLetter + restOfWord;

  return capitalizedWord;
}

console.log(capitalizeWord('classe #10')); //restituisce "Classe #10"

/**
 *  Restituisce una stringa con l'iniziale di ogni parola maiuscola
 *  @param {string} text  La stringa da modificare
 *  @return {string} La nuova stringa con le iniziali maiuscole
 */
function capitalizeText(text) {

}