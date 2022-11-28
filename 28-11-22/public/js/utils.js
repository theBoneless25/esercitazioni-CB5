const formElement = document.forms.formEl.elements;
const btnRis = formElement.btnRis; //--COSTANTI PER BUTTONE OPERAZIONI E FORM
let operator = formElement.operator.value;

const inputEl = document.querySelector("h3");
const options = {
  method: "GET",
  mode: "no-cors",
};

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (inputEl.textContent = "Il Risultato è: " + data));
};
//console.log("FUNZIONA");

if (btnRis)
  btnRis.addEventListener("click", (e) => {
    //console.log("FUNZIONA");

    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = "";

    if (formElement.operator.value == "-")
      //--USO UN IF PER FAR SVOLGERE LE VARIE OPERAZIONI, TRAMITE LA SCELTA DELL'OPERAZIONE E IL CLICK DEL PULSANTE CALCOLA.
      url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
    else if (formElement.operator.value == "*")
      url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
    else if (formElement.operator.value == "/")
      url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
    else url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
    GET(url, options);
  });
