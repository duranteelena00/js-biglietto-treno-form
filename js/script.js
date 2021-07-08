/* Partendo dall'esercizio di qualche giorno fa, ristrutturiamo la logica in modo da recuperare i dati da un form.
Una volta effettuati i nostri calcoli stampiamo i dati del biglietto in pagina. Quando tutto funziona, ci dedichiamo alla parte HTML/CSS.
Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)
Per la parte grafica
Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.
Bonus
Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali. */

//Initial variables
var ticket = document.getElementById("ticket-container");

// Collect html elements to write in
var fullNamePlaceholder = document.getElementById("full-name");
var offerPlaceholder = document.getElementById("offer");
var carNumberPlaceholder = document.getElementById("car-number");
var trainCodePlaceholder = document.getElementById("train-code");
var pricePlaceholder = document.getElementById("price");

//Randomize a train code and a car number
var trainCode = Math.floor(Math.random() * 100000) + 90000;
var carNumber = Math.floor(Math.random() * 10) + 1;

//Add click event to the submit button
var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  //Show the ticket
  ticket.classList.remove("hidden");

  //Collect user's data from html form
  var userFullName = document.getElementById("user-full-name").value.trim();
  var kms = document.getElementById("kms-to-travel").value.trim();
  var userAge = document.getElementById("user-age-range").value.trim();

  //Define full price ticket
  var pricePerKm = 0.21;
  var price = kms * pricePerKm;

  //Define discounts
  var underageDiscount = price * 0.2;
  var over65Discount = price * 0.4;

  //Determinate user's offer
  if (userAge === "Minorenne") {
    price -= underageDiscount;
    console.log(userAge);
  } else if (userAge === "Over 65") {
    price -= over65Discount;
  }
  price = price.toFixed(2);
  // Validation
  if (!userFullName || !kms) {
    alert("Non sono state inserite tutte le informazioni necessarie");
    ticket.classList.add("hidden");
  } else {
    //Fill ticket's fields
    fullNamePlaceholder.innerText = userFullName;
    offerPlaceholder.innerText = userAge;
    trainCodePlaceholder.innerText = trainCode;
    carNumberPlaceholder.innerText = carNumber;
    pricePlaceholder.innerText = "€" + price;
  }
});

//Add click event to the reset button
var resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {
  ticket.classList.add("hidden");
});
