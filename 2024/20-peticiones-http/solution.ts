/* eslint-disable no-console */

(async() => {
  await fetchWebsiteContent('https://rickandmortyapi.com/api');
})();

async function fetchWebsiteContent(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    console.log('Request was successful!');
    console.log('Website content:\n', data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Failed to fetch the website content. Error:',
        error.message
      );
    }
  }
}


// Tipos de las respuestas de la API
interface PokemonType {
  type: { name: string };
}

interface GameIndex {
  version: { name: string };
}

interface EvolutionChain {
  species: { name: string };
  evolves_to: EvolutionChain[];
}

interface PokemonData {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: PokemonType[];
  species: { url: string };
  game_indices: GameIndex[];
}

async function fetchPokemonData(pokemon: string): Promise<void> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    if (!response.ok) {
      throw new Error(`Pokémon not found! Status: ${response.status}`);
    }

    const pokemonData: PokemonData = await response.json();
    console.log(`Name: ${pokemonData.name}`);
    console.log(`ID: ${pokemonData.id}`);
    console.log(`Weight: ${pokemonData.weight}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log('Types:', pokemonData.types.map((typeInfo) => typeInfo.type.name).join(', '));

    // Obtener la cadena de evoluciones
    const speciesResponse = await fetch(pokemonData.species.url);
    const speciesData = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    const evolutionChain: string[] = [];
    let currentStage: EvolutionChain | null = evolutionData.chain;

    while (currentStage) {
      evolutionChain.push(currentStage.species.name);
      currentStage = currentStage.evolves_to[0] || null;
    }

    console.log('Evolution Chain:', evolutionChain.join(' -> '));

    // Obtener los juegos en los que aparece el Pokémon
    console.log('Games:', pokemonData.game_indices.map((game) => game.version.name).join(', '));
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to fetch Pokémon data. Error:', error.message);
    }
  }
}

fetchPokemonData('pikachu');
