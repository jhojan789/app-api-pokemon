import { Card } from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";
import { useContextApp } from "@/context/ContextProvider";
import { getPokemonTypeBgColor } from "@/utils/Colors";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Search(): JSX.Element {
  const location = useLocation();
  const { pokemons } = useContextApp();
  const [typedPokemons, setTypedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (location.state.q === "type") {
      setTypedPokemons(
        getPokemonsByType({ type: location.state.value, pokemons: pokemons })
      );
    }
  }, [pokemons, location.pathname]);

  return (
    <main>
      <div className="flex justify-center">
        <h1
          className={`font-bold text-center my-6 w-fit py-1 px-5 rounded-lg text-gray-200 shadow-lg border ${getPokemonTypeBgColor(
            location.state.value
          )}`}
        >
          {location.state.value.toUpperCase()}
        </h1>
      </div>
      <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {typedPokemons.length == 0 && <Skeleton qty={9} />}

        {typedPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </main>
  );
}

function getPokemonsByType({
  type,
  pokemons,
}: {
  type: string;
  pokemons: Pokemon[];
}): Pokemon[] {
  const findPokemons = pokemons.filter((pokemon) =>
    pokemon.types.some((t) => t.type.name === type)
  );

  return findPokemons;
}
