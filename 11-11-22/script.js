// Creazione Card
const card = document.createElement("div");
const imagePokemon = document.createElement("img");
const idPokemon = document.createElement("p");
const namePokemon = document.createElement("h1");
const typePokemon = document.createElement("h4");

function createCard(i) {
  const containerPokemonCard = document.getElementById("container"); // div container creato in html che conterrà le card

  card.classList.add("cardPokemon");
  card.classList.add(`bg-${i.types[0].type.name}`); // per cambiare il bg tramite css

  imagePokemon.src = i.sprites.front_default;

  idPokemon.textContent = "# " + createId(i.id);

  function createId(id) {
    // funzione per aggiungere gli zeri all'inzio dell'id
    if (!id) return null;
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    }
    return id;
  }

  namePokemon.textContent = i.name;

  typePokemon.textContent = "Type: " + i.types[0].type.name; /// text content con la tipologia del pokemon

  card.append(imagePokemon, idPokemon, namePokemon, typePokemon);
  containerPokemonCard.appendChild(card);
}

const btnNext = document.querySelector(".btn_next");
const btnPrevious = document.querySelector(".btn_prev");

let index = 1;

btnNext.addEventListener("click", () => {
  index++;
  cardPokemon(index);
});

if (index === 1) {
  btnPrevious.setAttribute("disabled", "");
}
btnPrevious.addEventListener("click", () => {
  index--;
  cardPokemon(index);
});

const cardPokemon = async (el) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${el}`);
  let data = await response.json();
  console.log(data);
  createCard(data);
};

cardPokemon(index);
