const pokeAPI = {};

function converte_pokemon(pokedetails) {
  const pokemon = new Pokemon();
  pokemon.name = pokedetails.name;
  pokemon.number = pokedetails.id;
  const types = pokedetails.types.map((slot) => slot.type.name);
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokedetails.sprites.other.dream_world.front_default;

  return pokemon;
}
pokeAPI.getpokemondetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converte_pokemon);
};
pokeAPI.getpokemons = () => {
  const pokemonapi = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(pokemonapi)
    .then((response) => response.json())
    .then((responsebody) => responsebody.results)
    .then((pokemons) => pokemons.map(pokeAPI.getpokemondetail))
    .then((detalhe) => Promise.all(detalhe))
    .then((detalhes) => detalhes);
};
