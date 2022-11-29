import { qs, ce, GET, POST } from "./utils.js";
const cardList = qs(".container");
const url = "http://localhost:3000/attori";

const createCard = (data, parent) => {
  const { nome, cognome, data_nascita } = data;

  const cardEl = ce("div");
  const nomeEl = ce("h3");
  const cognomeEl = ce("h3");
  const dataNascita = ce("h5");

  cardEl.className = "card";
  nomeEl.textContent = nome;
  cognomeEl.textContent = cognome;
  dataNascita.textContent = data_nascita;

  cardEl.append(nomeEl, cognomeEl, dataNascita);
  parent.append(cardEl);
};

GET(url).then((data) => {
  attoriList = data.filter((i) => i.id <= 10);
  attoriList.map((i) => createCard(i, cardList));
});

POST = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
