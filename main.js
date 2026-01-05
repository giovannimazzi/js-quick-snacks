//* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

console.log(
  `- Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.`
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
  console.log(`N: ${n}`);
  const cubeN = [];
  for (let i = 1; i <= n; i++) {
    cubeN.push(i ** 3);
  }
  console.table(cubeN);
  alert(`N: ${n} -> ${cubeN}`);
}

//* Stampa le potenze di 2 fino a 1000.

console.log(`- Stampa le potenze di 2 fino a 1000.`);

const pot2 = [];
for (let p = 1; p <= 1000; p *= 2) {
  pot2.push(p);
}
console.table(pot2);
alert(`Potenze di 2 fino a 1000 -> ${pot2}`);
