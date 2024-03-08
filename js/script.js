// consegna

/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

// variabili
let bgCard = '';
let cardCont ='';
let cardNum = 100;
// stampo risultati all'interno della console

// utilizzo un ciclo for per dichiarare fino a che numero devo prender
for (let i = 1; i <= 100; i++){
    // inserisco la prima consizione (per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.)
    if(i % 15 === 0){
        // console.log('FizzBuzz');
        cardCont = 'FizzBuzz';
        bgCard = 'bggreen1';
    // inserisco la seconda consizione (per i multipli di 5 stampi “Buzz”.)
    } else if(i % 5 === 0){
        // console.log('Buzz');
        cardCont = 'Buzz';
        bgCard = 'bggreen2';
    // inserisco la terza consizione (per i multipli di 3 stampi “Fizz”)
    } else if(i % 3 === 0){
        // console.log('Fizz');
        cardCont = 'Fizz';
        bgCard = 'bggreen3';
    // inserisco l'ultima consizione (per tutto ciò che non rispetta la condizione 1, 2 e 3)
    } else {
        cardCont = i;
        bgCard = 'bggreen4';
    } 




// ... aquesto punto mi posso divertire un pò di più, creando un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.


// creo un elemento div all'interno del mio html
const divContainer = document.createElement('div');
// console.log(divContainer);

// inserisco le classi e id all'elemento creato
divContainer.className = 'cardapp d-flex justify-content-center align-items-center m-1 fs-1';
divContainer.id= (bgCard)
// sostituisco il console.log all'interno delle mie condizioni  con una o più variabili variabili;

// appendo il risultato all'intero
divContainer.innerHTML = cardCont;
const htmlApp = document.querySelector('.app');
htmlApp.append(divContainer);





}