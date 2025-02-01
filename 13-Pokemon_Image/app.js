const getPokemon = async () => {
  try {
    const PokemonName = document
      .getElementById("searchName")
      .value.toLowerCase();
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${PokemonName}`
    );
    if (!pokemonData.ok) {
      throw new Error("Could not find Pokemon");
    }

    const data = await pokemonData.json();
    console.log(data);
    const pokemonImage = data.sprites.front_default;
    const displayPokemon = document.getElementById("pokemonImg");
    displayPokemon.src = pokemonImage;
    displayPokemon.style.display = "block";
  } catch (error) {
    console.log(error);
  }
};

const btn = document.getElementById("searchBtn");
btn.addEventListener("click", () => {
  getPokemon();
  // console.log(1111);
});
