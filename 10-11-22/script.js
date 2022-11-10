const btn = document.getElementById("btn");
const advice = document.getElementById("advice"); // eseguo e dichiaro i vari id e la costante end point
const urlAdv = "https://api.adviceslip.com/advice";

const getAdvice = (URL) => {
  // eseguo il fetch e dichiaro la costante di get advice con URL come arg
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (advice.textContent = res.slip.advice))
    .catch((el) => console.log("Error:" + el));
};

const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    //   getadvice con all'interno parametro end point
    getAdvice(urlAdv);
  });

  getAdvice(urlAdv); // funzione
};

window.onload = onFirstLoad; // al caricamento viene eseguite la funz. on first load
