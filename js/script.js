/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


*/

// chiedere all'utente il numero di chilometri (usare parseInt())
// età del passeggero (usare parseInt())

// calcolare il prezzo totale del viaggio
// if age < 18:
// prezzo del biglietto minorenni = (0.21 € al km) - ((0.21 € * km)*0.2)
// else if age >= 65:
// prezzo del biglietto senior = (0.21 € al km) - ((0.21 € * km)*0.4)
// else
// prezzo del biglietto normale = (0.21 € al km)
// output con uso di 'toFixed()' 

let numeroKm = parseInt(prompt('Inserire il numero di km da percorrere'))
let age = parseInt(prompt("Inserire l'età dell'utente"))

// calcolare il prezzo

let finalPrice;

if (age < 18){
  finalPrice = numeroKm * 0.21 - (numeroKm * 0.21 * 0.2)
}else if(age >= 65){
  finalPrice = numeroKm * 0.21 - (numeroKm * 0.21 * 0.4)
}else{
  finalPrice = numeroKm * 0.21
}

console.log(`Il prezzo finale del biglietto per lei è ${finalPrice.toFixed(2)} €.`);
document.writeln(`Il prezzo finale del biglietto per lei è ${finalPrice.toFixed(2)} €.`)