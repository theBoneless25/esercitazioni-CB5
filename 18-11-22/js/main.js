import { c, q, GET, POST, DELETE, PATCH } from "./utils.js";

const url = "http://localhost:3000/pokemon"; // Assegno una costante all'url cosi da non ripeterla nuovamente.

const form = document.forms.pokemon; // Assegno due costanti ad element e form.
const element = form.elements;

let id;

const formPatch = document.forms.pokemonPatch;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = elementsFP.id.value;
  const data = {
    name: elementsFP.name.value,
    type: elementsFP.type.value,
  };
  PATCH(url, id, data)
    .then((res) => res.reload)
    .catch((e) => console.log(e));
});

//const ul = q(".listPokemon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id + 1, /// Attivo l'evento al form e blocco l'evento del refresh con preventDefault.
    name: element.name.value,
    type: element.type.value,
  };

  POST(url, data).then(() => location.reload());
});

// window.onload = GET(url).then(res => res.map(pkm => ul.innerHTML += `<li> ${pkm.id}: ${pkm.name}</li>`));

const container = q(".container");
const inputEl = q(".search");
let pokemonList = [];

const createCard = (url, id, i) => {
  const cardPokemon = c("div");
  const idPokemon = c("p");
  const imgPokemon = c("img");
  const namePkm = c("h2");
  const typePkm = c("h3");
  const btnCard = c("button");
  const btnModifica = c("button");

  cardPokemon.className = "pkm_card";
  idPokemon.textContent = i.id;
  idPokemon.className = "id_card";
  imgPokemon.className = "img_pokemon";
  imgPokemon.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9kKBxPy_3QvetrPzyLh3wQKhGn364BFYY54n2e3PBQ&s"
  );
  imgPokemon.setAttribute("alt", "imagepokemon");
  namePkm.textContent = i.name;
  typePkm.textContent = i.type;
  btnCard.textContent = "Rimuovi";
  btnModifica.textContent = "Modifica";

  btnCard.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  btnModifica.addEventListener("click", () => {
    const form2 = document.forms.pokemonPatch;
    const elemento = form2.elements;
    elemento.id.value = i.id;
    elemento.name.value = i.name;
    elemento.type.value = i.type;

    PATCH(url, id, data)
      .then(() => location.reload())
      .catch((e) => console.log(e));
  });

  cardPokemon.append(
    idPokemon,
    imgPokemon,
    namePkm,
    typePkm,
    btnCard,
    btnModifica
  );
  container.append(cardPokemon);
};

window.onload = GET(url).then((i) => {
  id = i[i.length - 1].id;
  i.map((pkm) => {
    createCard(url, pkm.id, pkm);
  });
});

inputEl.addEventListener("input", (e) => {
  //console.log(pokemonList);
  const searchString = e.target.value;

  container.replaceChildren();
  pokemonList
    .filter((pk) => pk?.name.includes(searchString))
    .map((pkm) => createCard(pkm, container));

  //console.log(pokemonList);
  //
});
