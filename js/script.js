// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// computer genera 16 numeri casuali tra 1 e 100 che non possono essere duplicati
var numeriComputer = [];
var verifica = false;

// errore era nel mettere i < 16 perche i lineare quindi fa solo 16 volte il ciclo mentre con length < 16, fino a quando nell array non ci sono 16 numeri continua il ciclo
for (var i = 0; numeriComputer.length < 16; i++) {

  var numeriRandom = getRandomNum(100);

  if(numeriComputer.indexOf(numeriRandom) === -1) {
    numeriComputer.push(numeriRandom);
  }
}

console.log(numeriComputer);

// chiedo utente di inserire max 84 numeri compresi tra 1 e 100
var numeriUtente = [];

for (var i = 0; numeriUtente.length < 84; i++) {
  var numeriInsUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));

  // se numero utente = numero generato computer, partita finita altrimenti si continua ( si mette all inizio perche prima cosa da verificare perche nel caso non sia soddisfatta gioco termina subito)
  if (numeriComputer.includes(numeriInsUtente)){
      alert("Sei esploso!")
      break;

  } else if (numeriUtente.indexOf(numeriInsUtente) !== -1){
  // utente non puo inserire stesso numero piu volte
      alert("numero già inserito, riprova con altro numero!!!");

  } else if (numeriInsUtente == 0 || numeriInsUtente > 100) {
      alert("Valore inserito fuori da 1 e 100");

  } else if (numeriUtente.indexOf(numeriInsUtente) == -1 && numeriInsUtente > 0 && numeriInsUtente <= 100 ){
    numeriUtente.push(numeriInsUtente);
  }

}
console.log(numeriUtente);

// termine partita comunicare quanti numeri consentiti ha messo l'utente
var puntiFatti = numeriUtente.length;
console.log("Il punteggio da te totalizzato è di: " + puntiFatti);

// gruppo utilities functions
function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}
