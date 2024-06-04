import { Card } from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";
import { useContextApp } from "@/context/ContextProvider";

export default function Home() {
  const { pokemons } = useContextApp();

  return (
    <main>
      <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {pokemons.length == 0 && <Skeleton qty={9} />}

        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </main>
  );
}
