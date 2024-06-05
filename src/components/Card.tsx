import { useNavigate } from "react-router-dom";
import { LazyImage } from "./LazyImage";
import { LoadingCard } from "./LoadingCard";

export function Card({ pokemon }: { pokemon: Pokemon }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() =>
          navigate(`/pokemons/${pokemon.name}`, { state: pokemon })
        }
        className=" relative flex items-center w-full max-w-96 min-h-36 cursor-pointer border hover:shadow-lg bg-slate-300 hover:animate-bounce rounded-lg p-4"
      >
        <LazyImage
          image={pokemon.image}
          placeholder=""
          loadingComponent={<LoadingCard />}
          className="w-full"
        />
        <h2>{pokemon.name.toUpperCase()}</h2>
      </div>
    </>
  );
}
