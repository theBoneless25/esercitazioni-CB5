import { c, q, GET, POST, uuidv4 } from "./utils.js";

const url = "http://localhost:3000/pokemon"; // Assegno una costante all'url cosi da non ripeterla nuovamente.

const form = document.forms.pokemon; // Assegno due costanti ad element e form.
const element = form.elements;

const ul = q(".listPokemon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(), /// Attivo l'evento al form e blocco l'evento del refresh con preventDefault.
    name: element.name.value,
    type: element.type.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      /// Richiamo la utils POST per richiamare l'url e quello che voglio far apparire a schermo.
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
});

// window.onload = GET(url).then(res => res.map(pkm => ul.innerHTML += `<li> ${pkm.id}: ${pkm.name}</li>`));

window.onload = GET(url).then((res) => res.map((pkm) => createCard(pkm)));

const container = q(".container");

const createCard = (i) => {
  const cardPokemon = c("div");
  const imgPokemon = c("div");
  const namePkm = c("h2");
  const typePkm = c("h3");

  cardPokemon.className = "pkm_card";
  imgPokemon.className = "img_pokemon";
  namePkm.textContent = i.name;
  typePkm.textContent = i.type;

  cardPokemon.append(imgPokemon, namePkm, typePkm);
  container.append(cardPokemon);
};
