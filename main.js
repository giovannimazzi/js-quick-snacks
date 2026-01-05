//* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

console.log(
  `%c- Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.`,
  "color: yellowgreen"
);
const n = parseInt(
  prompt(
    `Calcolo del cubo dei primi N numeri.\n\nInserire il numero N desiderato:`
  )
);

if (!n || n < 0) {
  const msg = `Numero inserito (${n}) non valido! Esecuzione interrotta.`;
  alert(msg);
  throw new Error(msg);
} else {
  const cubeN = [];
  for (let i = 1; i <= n; i++) {
    cubeN.push(i ** 3);
  }
  console.log(`N: ${n} -> ${cubeN}`);
  alert(`N: ${n} -> ${cubeN}`);
}

//* Stampa le potenze di 2 fino a 1000.

console.log(`%c- Stampa le potenze di 2 fino a 1000.`, "color: yellowgreen");

const pot2 = [];
for (let p = 1; p <= 1000; p *= 2) {
  pot2.push(p);
}
console.log(`Potenze di 2 fino a 1000 -> ${pot2}`);
alert(`Potenze di 2 fino a 1000 -> ${pot2}`);

//* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

console.log(
  `%c- Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.`,
  "color: yellowgreen"
);
const num = parseInt(
  prompt(
    `Calcolo della somma di tutte le cifre che compongono il numero.\n\nInserire il numero N desiderato (4 cifre):`
  )
);

if (!num || num < 1000 || num > 9999) {
  const msg = `Numero inserito (${num}) non valido! Esecuzione interrotta.`;
  alert(msg);
  throw new Error(msg);
} else {
  let somma = 0;
  const numStr = String(num);
  for (let i = 0; i < numStr.length; i++) {
    somma += parseInt(numStr[i]);
  }
  console.log(`Somma: ${num} -> ${somma}`);
  alert(`Somma: ${num} -> ${somma}`);
}

//* Calcola la somma e la media dei primi 10 numeri.

console.log(
  `%c- Calcola la somma e la media dei primi 10 numeri.`,
  "color: yellowgreen"
);

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
const media = sum / 10;
console.log(
  `Somma e Media dei primi 10 numeri (0-9) -> S: ${sum}, M: ${media}`
);
alert(`Somma e Media dei primi 10 numeri (0-9) -> S: ${sum}, M: ${media}`);
