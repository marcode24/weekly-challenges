/* eslint-disable no-console */
async function fetchWebsiteContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    console.log('Request was successful!');
    console.log('Website content:\n', data);
  } catch (error) {
    console.error('Failed to fetch the website content. Error:', error.message);
  }
}

fetchWebsiteContent('https://google.com');

async function fetchPokemonData(pokemon) {
  try {
    const response = await
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (!response.ok) {
      throw new Error(`Pokémon not found! Status: ${response.status}`);
    }

    const pokemonData = await response.json();
    console.log(`Name: ${pokemonData.name}`);
    console.log(`ID: ${pokemonData.id}`);
    console.log(`Weight: ${pokemonData.weight}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log('Types:', pokemonData.types
      .map((typeInfo) => typeInfo.type.name)
      .join(', '));

    // Obtener la cadena de evoluciones
    const speciesResponse = await fetch(pokemonData.species.url);
    const speciesData = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();
    const evolutionChain = [];
    let currentStage = evolutionData.chain;

    while (currentStage) {
      evolutionChain.push(currentStage.species.name);
      const [firstEvolution] = currentStage.evolves_to;
      currentStage = firstEvolution;
    }

    console.log('Evolution Chain:', evolutionChain.join(' -> '));

    // Obtener los juegos en los que aparece el Pokémon
    console.log('Games:', pokemonData.game_indices
      .map((game) => game.version.name)
      .join(', '));
  } catch (error) {
    console.error('Failed to fetch Pokémon data. Error:', error.message);
  }
}

fetchPokemonData('pikachu');
