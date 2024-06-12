import { getPokemonTypeBgColor } from "@/utils/Colors";
import { Link } from "react-router-dom";

export function TypeButton({ type }: { type: PokemonType }) {
  const name = type.type.name;

  return (
    <Link
      className={`border rounded-md p-2 text-gray-200 ${getPokemonTypeBgColor(
        name
      )}`}
      key={name}
      to={`/type/${name}`}
      state={{ q: "type", value: name }}
    >
      {name.toUpperCase()}
    </Link>
  );
}
