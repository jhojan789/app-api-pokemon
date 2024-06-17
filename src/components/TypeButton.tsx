import { getPokemonTypeBgColor } from "@/utils/Colors";
import { Link } from "react-router-dom";

export function TypeButton({ name }: { name: string }) {
  return (
    <Link
      className={`border rounded-md p-2 text-white ${getPokemonTypeBgColor(
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
