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
