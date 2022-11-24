/*function func_somma() {
  const fai_somma = async () => {
    const url = "http://localhost:3000/somma?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_somma();
}

function func_sottrai() {
  const fai_sottrazione = async () => {
    const url = "http://localhost:3000/sottrazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_sottrazione();
}

function func_dividi() {
  const fai_divisione = async () => {
    const url = "http://localhost:3000/divisione?param1=10&param2=2";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_divisione();
}

function func_molti() {
  const fai_moltiplicazione = async () => {
    const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    alert(res);
    return await res.json();
  };
  let result = fai_moltiplicazione();
}*/

const formElement = document.forms.formEl.elements;
console.log(formElement);

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const btn = formElement.btnCalc;

btn.addEventListener("click", () => {
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
