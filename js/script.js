

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.




// variabili
var numeriRandom;
var numeri = [];
var numeriUtente = [];
var inputUtente;
var count = 0;
var numGiusti = [];

// genero lista numeri random

while (numeri.length < 5) {
  numeriRandom = Math.floor(Math.random() * 100) + 1;

  // verifico che il numero non ci sia già
  if(!numeri.includes(numeriRandom)) {
  numeri.push(numeriRandom);
}
}
alert(numeri);

 console.log("I numeri random sono: " + numeri);


// dopo 30 secondi faccio partire i prompt

setTimeout(myFunction, 3000);
  function myFunction(){

    // input utente
    for (var i = 0; i < 5; i++) {
      inputUtente = parseInt(prompt("Inserisci uno dei 5 numeri mostrati prima"));

      // verifico che l'utente non ripeta due volte lo stessto numero
      if(!numeriUtente.includes(inputUtente)) {
      numeriUtente.push(inputUtente);
    } else {
       alert("Non puoi inserire 2 volte lo stesso numero");
       i--;
    }
    }
     console.log("I numeri inseriti dall'utente sono: " + numeriUtente);



     for (var i = 0; i < numeriUtente.length; i++) {
       if (numeri.includes(numeriUtente[i])) {
         numGiusti.push(numeriUtente[i])
         count ++;
       }
     }
     console.log("Hai indovinato " + count + " numeri!");
     if (numGiusti.length > 1) {
       console.log("Hai ricordato " + numGiusti);

     }


  }
