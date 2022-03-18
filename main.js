// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

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
let prova = array[2];
            console.log(array);
            console.log(prova);

if (y % 2 != 0) {                                                           // Controllo se il numero è pari, altrimenti sottracco 1 e divido per 2
    y = ((y - 1) / 2)
}
else {
    y= y /2
}
        console.log(y);
        // document.getElementById("testo)").innerHTML = `La parola ${str}`;

for ( i = 0; i  <= y; i++) {
        z --;
        inizio = array[i];
        fine = array[z];

        console.log ( inizio );
        console.log ( fine );
        
    if (inizio != fine){

        console.log(z)
        document.getElementById("output").innerHTML = `La parola non è palindroma`;
        break;
    }

    else {
 
        document.getElementById("output").innerHTML = `La parola è palindroma`;
        break;}
}

// yuoiouy
// tuttottut
// cosasoc
// !SECTION 