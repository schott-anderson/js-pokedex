pokeApi.getPokemonEvolution = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiEvolutionToPokemonEvolution);
};

let evolutionChain = [];

pokeApi.getEvolution = (numberPokemon) => {
  const url = `https://pokeapi.co/api/v2/evolution-chain/${numberPokemon}`;

  return fetch(url).then((response) =>
    response
      .json()
      .then((jsonBody) => jsonBody.chain)
      .then((jsChain) => jsChain.species)
      .then((jsSpecies) => evolutionChain.push(jsSpecies.name))
  );
};

// precisa acessar o grupo de evolução. https://pokeapi.co/api/v2/evolution-chain/14/
