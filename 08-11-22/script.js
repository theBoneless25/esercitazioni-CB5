function createCard(i) {
  const containerPokemonCard = document.getElementById("container");

  const card = document.createElement("div");
  card.classList.add("cardPokemon");
  card.classList.add(`bg-${i.types[0].type.name}`);

  const imagePokemon = document.createElement("img");
  imagePokemon.src = i.sprites.front_default;

  const idPokemon = document.createElement("p");
  idPokemon.textContent = "# " + createId(i.id);

  function createId(id) {
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
  typePokemon.textContent = "Type: " + i.types[0].type.name;

  card.append(imagePokemon, idPokemon, namePokemon, typePokemon);
  containerPokemonCard.appendChild(card);
}

for (let i = 1; i <= 150; i++)
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((i) => createCard(i));
