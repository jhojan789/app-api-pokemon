import {
  getPokemonDetailByURL,
  getPokemonTypes,
  getPokemonsAPI,
} from "@/api/pokemon";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const Context = createContext<Context>({
  navbarItems: [],
  openMobileMenu: false,
  pokemons: [],
  types: [],
  setOpenMobileMenu: () => {},
  setPokemons: () => {},
});

export function useContextApp() {
  return useContext(Context);
}

export function ContextProvider({ children }: { children: ReactNode }) {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(() => {
    return false;
  });
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [types, setTypes] = useState<string[]>([]);

  const navbarItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
  ];
  useEffect(() => {
    (async () => {
      try {
        const pokemonsArray = [];
        const types = [];

        const response = await getPokemonsAPI();
        const typesResponse = await getPokemonTypes();

        console.log(typesResponse.results);

        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailByURL(pokemon.url);
          // console.log(pokemonDetails);

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            types: pokemonDetails.types,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
            cries: pokemonDetails.latest,
            stats: pokemonDetails.stats,
          });
        }
        setPokemons(pokemonsArray);

        for await (const type of typesResponse.results) {
          types.push(type.name);
        }

        setTypes(types);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(types);

  return (
    <Context.Provider
      value={{
        navbarItems,
        openMobileMenu,
        pokemons,
        types,
        setOpenMobileMenu,
        setPokemons,
      }}
    >
      {children}
    </Context.Provider>
  );
}
