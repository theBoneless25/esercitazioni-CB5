// Creazione Card

function createCard(i) {
  const containerPokemonCard = document.getElementById("container"); // div container creato in html che conterrà le card

  const card = document.createElement("div");
  card.classList.add("cardPokemon");
  card.classList.add(`bg-${i.types[0].type.name}`); // per cambiare il bg tramite css

  const imagePokemon = document.createElement("img");
  imagePokemon.src = i.sprites.front_default;

  const idPokemon = document.createElement("p");
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

  const namePokemon = document.createElement("h1");
  namePokemon.textContent = i.name;

  const typePokemon = document.createElement("h4");
  typePokemon.textContent = "Type: " + i.types[0].type.name; /// text content con la tipologia del pokemon

  card.append(imagePokemon, idPokemon, namePokemon, typePokemon);
  containerPokemonCard.appendChild(card);
}

const waitEl = document.querySelector(".wait");

const urlArr = []; //Array che contiene gli url

for (let i = 1; i <= 150; i++) {
  urlArr.push(`https://pokeapi.co/api/v2/pokemon/${i}`); //push degli url
}

let request = urlArr.map((url) => {
  waitEl.classList.add("start");
  return fetch(url).then((res) => res.json()); //creo un array di promise mapp urlarr
});

Promise.all(request)
  .then((res) => res.map((el) => createCard(el)))
  .finally(() => waitEl.classList.remove("start")); //uso l'array di promise per creare le card, per poi rimuovere la classe start alla comparsa delle card.
