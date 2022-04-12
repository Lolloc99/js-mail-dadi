/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// Dichiaro un array con le email registrate
const mailList = ["mario.rossi@gmail.com", "luigi.verdi@gmail.com", "wario.gialli@gmail.com", "waluigi.viole@gmail.com", "lolloc99@yahoo.it"];

// Chiedo all'utente la porpria mail
const userMail = prompt("Digita la tua mail");
console.log("Mail inserita dall'utente:", userMail);

// Controllo che la mail corrisponda
let mailCheck = false;
for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i];
    if (thisMail === userMail) {
        mailCheck = true;
    }
    
    console.log(thisMail, "Esito confronto mail:", mailCheck);
}

console.log("Risultato finale: ", mailCheck);

// Stampo il messaggio dell'esito
if (mailCheck === true) {
    document.getElementById("esito").innerHTML = "La mail corrisponde, accesso consentito :)";
}   else {
    document.getElementById("esito").innerHTML = "La mail non corrisponde, accesso negato :c";
};