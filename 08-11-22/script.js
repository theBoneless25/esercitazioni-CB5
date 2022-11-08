const bodyEl = document.querySelector("body");

const CreateCard = (i) => {
  const pokemonCardEl = document.createElement("div");
  pokemonCardEl.className = "pokemon_card";

  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", i.sprites.front_default);

  const id = document.createElement("h4");
  id.className = "id_pokemon";
  id.textContent = `#${i.id}`;

  const nameEl = document.createElement("h1");
  nameEl.textContent = i.name;

  const typesPokemonEl = document.createElement("p");
  typesPokemonEl.className = "pokemon_types";
  typesPokemonEl.textcontent = `Types : ${i.types[0].type.name}`;

  pokemonCardEl.append(imageEl, id, nameEl, typesPokemonEl);
  bodyEl.appendChild(pokemonCardEl);
};

fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((res) => res.json())
  .then((poke) => {
    poke.results.forEach((item) =>
      fetch(item.url).then((res) =>
        res.json().then((pokemon) => CreateCard(pokemon))
      )
    );
  });

const colorCardPokemon = {
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  ghost: "#705898",
  ice: "#98d8d8",
};

///--HO PROVATO AD INSERIRE IL COLORE NEL BACKGROUND SOTTO CONSIGLIO DEL TUTOR MA NON SONO RIENTRATO NEL TEMPO
