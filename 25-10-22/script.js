//-----PREMESSA----

let inputOperation;
let firstNumb;
let secondNumb;

alert("Operazioni: 1=Addizione,2=Sottrazione,3=Divisione,4=Moltiplicazione");
inputOperation = prompt("Inserisci un valore=");
inputOperation = parseInt(inputOperation);
firstNumb = prompt("Inserisci il primo valore a scelta");
firstNumb = parseFloat(firstNumb);
secondNumb = prompt("Inserisci il secondo valore a scelta");
secondNumb = parseFloat(secondNumb);

firstNumb = parseInt(firstNumb);
secondNumb = parseInt(secondNumb);

//--SVOLGIMENTO-----

switch (inputOperation) {
  case 1:
    console.log(firstNumb + secondNumb);
    break;

  case 2:
    console.log(firstNumb - secondNumb);
    break;

  case 3:
    console.log(firstNumb / secondNumb);
    break;

  case 4:
    console.log(firstNumb * secondNumb);
    break;

  default:
    console.log("ERRORE, valore inserito errato");
}
