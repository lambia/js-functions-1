// Dichiarazione di funzione con parametri
// Input: Accetta in ingresso un numero
// Elaborazione: Verifica se il numero è pari o dispari
// Output: Restituisce "pari" oppure "dispari"
function pariOrDispari(numero) {
    
    if(numero%2 == 0) {
        return "pari";
    }

    return "dispari";

}

//Invocazione di funzione
// let x = pariOrDispari(23);
// console.log( pariOrDispari(23) );

let numeroUtente = parseInt( prompt("Inserisci un numero") );
if( pariOrDispari(numeroUtente) == "pari" ) {
    alert("Il numero inserito è divisibile per 2");
} else {
    alert("Il numero inserito NON è divisibile per 2");
}