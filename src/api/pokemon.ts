export async function getPokemonsAPI() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonDetailByURL(url: string) {
  try {
    const response = await fetch(url);
    const details = await response.json();
    return details;
  } catch (error) {
    console.log(error);
  }
}
