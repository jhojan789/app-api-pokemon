import { getPokemonDetailByURL, getPokemonsAPI } from "@/api/pokemon";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  console.log(pokemons);

  useEffect(() => {
    (async () => {
      try {
        const pokemonsArray = [];

        const response = await getPokemonsAPI();

        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailByURL(pokemon.url);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
            cries: pokemonDetails.latest,
          });
        }

        setPokemons(pokemonsArray);
      } catch (error) {}
    })();
  }, []);

  return (
    <main>
      <section>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </main>
  );
}
