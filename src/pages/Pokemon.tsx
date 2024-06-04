import { useContextApp } from "@/context/ContextProvider";
import { Suspense, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Pokemon() {
  const { pokemons } = useContextApp();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    const findPokemon = pokemons.find((p) => p.name === params.id);

    if (
      pokemons.length > 0 &&
      (findPokemon == null || findPokemon == undefined)
    ) {
      navigate("/not-found", { state: params.id });
      return;
    }

    setPokemon(findPokemon || null);
  }, [pokemons]);

  return (
    <main className="grid grid-cols-1 grid-rows-2 md:grid-cols-2">
      {!pokemon && <div>Loading...</div>}

      {pokemon && (
        <>
          <section>
            <div>
              <img
                src={pokemon?.image}
                alt={`Image of pokemon called ${pokemon?.name}`}
                className="w-full"
              />
            </div>
            <h1 className="text-center font-bold mb-3">
              {pokemon?.name.toUpperCase()}
            </h1>
          </section>
          <section className="flex flex-col gap-3">
            <div className=" rounded-md  bg-blue-200 shadow-md p-4">
              <h3 className="font-bold">TYPE</h3>
              <ul className="flex gap-2">
                {pokemon?.types.map((t, i, a) => {
                  const isLastItem = i < a.length - 1;
                  console.log(isLastItem);

                  return (
                    <Link to="/" key={t.type.name}>
                      {t.type.name.toUpperCase()}
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className=" rounded-md bg-blue-200 shadow-md p-4">
              <h2 className="font-bold">STATS</h2>
              <ul>
                {pokemon.stats.map((s) => (
                  <li
                    key={s.stat.name}
                    className="flex justify-between items-center gap-1"
                  >
                    <h3>{s.stat.name.toUpperCase()}:</h3>
                    <StatusBar value={s.base_stat} />
                    <span>{s.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function StatusBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1 bg-red-500">
      <div
        className=" h-1 bg-green-500"
        style={{ width: `${Math.floor(value / 2)}%` }}
      ></div>
    </div>
  );
}
