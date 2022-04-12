/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Genero il numero del giocatore
const playerDie = Math.floor(Math.random()*6 + 1);
console.log(playerDie);

// Genero il numero del computer
const computerDie = Math.floor(Math.random()*6 + 1);
console.log(computerDie);

// Confronto i numeri
let winner = "";

if (playerDie > computerDie) {
    winner = "Il vincitore è il Giocatore";
    console.log("Il vincitore è il Giocatore");
}   else if (computerDie > playerDie) {
    winner = "Il vincitore è il Computer";
    console.log("Il vincitore è il Computer");
}   else {
    winner = "Pareggio!";
    console.log("Pareggio!");
}

// Stampo il vincitore
document.getElementById("esito").innerHTML = winner;