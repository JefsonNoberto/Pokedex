const lista = document.getElementById("pokemons");
const maispokemons = document.getElementById("button");

let offset = 0;
let limit = 5;
mais(offset, limit);
function listadehtmlpokemon(pokemon) {
  return ` <li class="pokemon ${pokemon.type}">
  <span class="number">#0${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="imagem">
    <ol class="types">
       ${pokemon.types
         .map((type) => `<li class="type ${type}">${type}</li>`)
         .join("")}
    </ol>
    <img
      src="${pokemon.photo}"
      alt="${pokemon.name}"
    />
  </div>
</li>`;
}

maispokemons.addEventListener("click", () => {
  offset = offset + limit;
  mais(offset);
});

function mais(offset, limit) {
  pokeAPI.getpokemons(offset, limit).then((pokemons = []) => {
    lista.innerHTML += pokemons.map(listadehtmlpokemon).join("");
  });
}
