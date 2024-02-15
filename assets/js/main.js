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

const lista = document.getElementById("pokemons");
pokeAPI.getpokemons().then((pokemons) => {
  lista.innerHTML = pokemons.map(listadehtmlpokemon).join("");
});
