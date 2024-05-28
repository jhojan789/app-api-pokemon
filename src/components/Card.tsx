export function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className=" flex items-center w-full max-w-96 cursor-pointer border hover:shadow-lg bg-white hover:animate-bounce rounded-lg p-4">
      <div className="w-full">
        <img src={pokemon.image} alt="" className="w-full " />
      </div>
      <h2>{pokemon.name.toUpperCase()}</h2>
    </div>
  );
}
