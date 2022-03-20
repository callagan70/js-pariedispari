// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Buon lavoro e buon divertimento!

// SECTION Primo snecchino

var str = prompt("Sgancia un nome")
var y = str.length;                                                     // per ciclo FOR
var z = str.length;                                                     // per array dentro ciclo FOR
var array =Array.from(str);                                       // Carico l'array
var inizio = "";
var fine = "";

if (y % 2 != 0) {                                                           // Controllo se il numero è pari, altrimenti sottracco 1 e divido per 2
    y = ((y - 1) / 2)
}
else {
    y= y /2
}

for ( i = 0; i  <= y; i++) {
        z --;
        inizio = array[i];
        fine = array[z];
    if (inizio != fine){
        document.getElementById("output").innerHTML = `La parola "${str}" non è palindroma`;
        break;
    }
    else {
        document.getElementById("output").innerHTML = `La parola "${str}" è palindroma`;
        break;}
}

// yuoiouy
// tuttottut
// cosasoc
// !SECTION 

// SECTION
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pariDispari =  prompt("Scegli pari (p) o dispari (d)");                      // Pari o dispari
let numeroInserito = parseInt (prompt("Scegli un numero"));                                          // Variabile da 1 a cinque
let pc = randomPc()                                                                                         // Parte la funzione random
let somma = parseInt (numeroInserito + pc)                                                                    // somma dei due numeri

console.log( pariDispari, numeroInserito, pc, somma)

function randomPc() {
    let x = Math.floor((Math.random () * 5));
    return x;
}

    document.getElementById("span1").innerHTML = `Hai scelto ${pariDispari}`;
    document.getElementById("span2").innerHTML = `Hai scelto ${numeroInserito}`;
    document.getElementById("span3").innerHTML = `Il computer ha rollato ${pc}`;
    document.getElementById("span4").innerHTML = `La somma è ${somma}`;

    if ((pariDispari == "p" && somma % 2 == 0) || (pariDispari == "d" && somma % 2 != 0)) {
    document.getElementById("output2").innerHTML= "Hai vinto !!"
}
// else if  (pariDispari == "d" && somma % 2 != 0){
//     document.getElementById("output2").innerHTML= "Hai vinto !!"
// }

else{
    document.getElementById("output2").innerHTML= "Hai perso....."
}