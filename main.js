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
  let cubeN = [];
  for (let i = 1; i <= n; i++) {
    cubeN.push(i ** 3);
  }
  console.table(cubeN);
  alert(`N: ${n} -> ${cubeN}`);
}

/* //* Stampa le potenze di 2 fino a 1000.

console.log(`- Stampa le potenze di 2 fino a 1000.`);

let pot2 = [];
for (let i = 1; i <= Math.sqrt(1000); i++) {
  pot2.push(i ** 2);
}
console.table(pot2);
alert(`potenze di 2 fino a 1000 -> ${pot2}`); */
