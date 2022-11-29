const url = "http://localhost:3000/attori";
fetch(url)
  .then((res) => res.json())
  .then((res) => createCard(res));

const createCard = (data) => {
  const container = document.querySelector(".container");

  for (let i of data) {
    const cardEl = document.createElement("div");
    const nomeEl = document.createElement("h3");
    const cognomeEl = document.createElement("h3");
    const dataNasc = document.createElement("h4");

    nomeEl.textContent = i.nome;
    cognomeEl.textContent = i.cognome;
    dataNasc.textContent = i.data_nascita;

    cardEl.append(nomeEl, cognomeEl, dataNasc);
    container.appendChild(cardEl);
  }
};

const GET = async (url) => await fetch(url).then((res) => res.json());
