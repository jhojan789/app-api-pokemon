export function getPokemonTypeBgColor(name: string) {
  switch (name) {
    case "normal":
      return "bg-gray-400";
    case "fighting":
      return "bg-red-600";
    case "flying":
      return "bg-sky-400";
    case "poison":
      return "bg-purple-600";
    case "ground":
      return "bg-yellow-700";
    case "rock":
      return "bg-gray-700";
    case "bug":
      return "bg-green-500";
    case "ghost":
      return "bg-indigo-800";
    case "steel":
      return "bg-gray-500";
    case "fire":
      return "bg-orange-500";
    case "water":
      return "bg-blue-500";
    case "grass":
      return "bg-green-600";
    case "electric":
      return "bg-yellow-400";
    case "psychic":
      return "bg-pink-500";
    case "ice":
      return "bg-blue-300";
    case "dragon":
      return "bg-blue-800";
    case "dark":
      return "bg-black";
    case "fairy":
      return "bg-pink-300";
    case "unknown":
      return "bg-gray-400";
    case "shadow":
      return "bg-purple-900";
    default:
      return "";
  }
}
