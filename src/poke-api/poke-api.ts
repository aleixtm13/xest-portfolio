
function getSeededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export const fetchPokemonOfTheDay = async () => {
    // Get the current date as a seed
    const now = new Date();
    const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

    // Fetch total number of Pokémon
    const totalResponse = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
    const totalData = await totalResponse.json();
    const total = totalData.count;

    // Generate a deterministic random Pokémon ID based on the seed
    const randomId = Math.floor(getSeededRandom(seed) * total) + 1;

    // Fetch the Pokémon data
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await pokemonResponse.json();

    return pokemon;
}