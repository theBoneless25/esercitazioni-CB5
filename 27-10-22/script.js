//---calculator--- ESERCIZIO 1

function calculator(num1, num2, operation = "") {
  switch (operation) {
    case "+":
      total = num1 + num2;
      return total;
    case "-":
      total = num1 - num2;
      return total;
    case "*":
      total = num1 * num2;
      return total;
    case "/":
      total = num1 / num2;
      return total;
    default:
      alert("Non è un operazione valida");
  }
}
console.log(calculator(6, 20, "*"));

//---character object---ESERCIZIO 2

const persDeathnote = {
  Name: "Ryuzaki",
  Alterego: ["Elle", "Eraldo Coil", "Hideki Ryuka"],
  Età: 24,
  Sesso: "Maschile",
  coloreOcchi: "Marroni",
  Nazionalità: "Giappone",
  isInProduction: false,
  lingueConosciute: {
    first: "Giappone",
    second: "Francese",
    third: "Russo",
    fourth: "Inglese",
    fifth: "Italiano",
  },
};

const { Name, Età, Sesso, Nazionalità } = persDeathnote;
persDeathnote.isInProduction = true;
persDeathnote.Universo = "DeathNote";
const coloreOcchi = Object.create(persDeathnote);

console.log(persDeathnote);
console.log(persDeathnote.lingueConosciute);
console.log(Object.keys(persDeathnote));
console.log(persDeathnote.lingueConosciute.fifth);
console.log(Object.getOwnPropertyDescriptor("coloreOcchi") === persDeathnote);

//----ESERCIZIO AVANZATO

function calculator2(num1, num2, num3, num4, operation = "") {
  switch (operation) {
    case "+":
      total = num1 + num2 + num3 + num4;
      return total;
    case "-":
      total = num1 - num2 - num3 - num4;
      return total;
    case "*":
      total = num1 * num2 * num3 * num4;
      return total;
    case "/":
      total = num1 / num2 / num3 / num4;
      return total;
    default:
      alert("Non è un operazione valida");
  }
}
console.log(calculator2(6, 20, 8, 10, "-"));

//---PROVA DIFFERENTE DELL'ESERCIZIO AVANZATO---

function sumAll(a, b, c, ...args) {
  let sum = 0;
  sum = a + b + c;
  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(33, 21, 3, 14));

function diffAll(a, b, c, ...args) {
  let sum = 0;
  sum = a - b - c;
  for (let arg of args) sum -= arg;
  return sum;
}

console.log(diffAll(40, 5, 8, 4));

function moltAll(a, b, c, ...args) {
  let sum = 0;
  sum = a * b * c;
  for (let arg of args) sum *= arg;
  return sum;
}

console.log(moltAll(4, 2, 24, 4));

function divAll(a, b, c, ...args) {
  let sum = 0;
  sum = a / b / c;
  for (let arg of args) sum /= arg;
  return sum;
}

console.log(divAll(1, 3, 18, 34));
