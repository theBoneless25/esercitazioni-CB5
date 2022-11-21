"use strict";

function somma(a, b, c, ...args) {
  let sum = 0;
  sum = a + b + c;
  for (let arg of args) sum += arg;
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  return a + b;
}

function sottrazione(a, b) {
  return a - b;
}

function divisione(a, b) {
  if (b === 0) {
    console.log("Errore");
  }
  return a / b;
}

function molti(a, b) {
  return a * b;
}

const myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case "somma":
    let sum = somma(myArgs[1], myArgs[2]);
    sum = parseFloat(sum);
    console.log("il risultato è : " + sum);
    break;

  case "sottrazione":
    let sub = sottrazione(myArgs[1], myArgs[2]);
    sub = parseFloat(sub);
    console.log("il risultato è : " + sub);
    break;

  case "moltiplicazione":
    let moltiplicazione = molti(myArgs[1], myArgs[2]);
    moltiplicazione = parseFloat(moltiplicazione);
    console.log("il risultato è : " + moltiplicazione);
    break;

  case "divisione":
    if (myArgs[2] == 0) {
      console.log("ERRORE");
      break;
    }
    let div = divisione(myArgs[1], myArgs[2]);
    div = parseFloat(div);
    console.log("il risultato è : " + div);
    break;

  default:
    NaN;
    break;
}

// Esercizio avanzato da sistemare

/*function calculator(operation, ...args) {
  let i = 0;
  switch (operation) {
    case "sum":
      for (let i in args) {
        i += parseInt(args[i]);
      }
      console.log(`il risultato è : "  ${i}`);
      break;
    case "sub":
      i = args[0];
      for (let i = 1; i < args.length; i++) {
        i -= parseInt(args[i]);
      }
      console.log(`il risultato è : "  ${i}`);
      break;
    case "molti":
      i = 1;
      for (let i = 1; i < args.length; i++) {
        i *= parseInt(args[i]);
      }
      console.log(`il risultato è : "  ${i}`);
      break;
    case "div":
      i = args[0] / args[1];
      {
        i /= parseInt(args[i]);
      }
      console.log(`il risultato è : "  ${i}`);
      break;
  }
  return i;
}

const nums = arg.slice[1];
calculator(arg[0], ...nums);*/ // da sistemare
