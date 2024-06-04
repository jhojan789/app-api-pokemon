import { getPokemonDetailByURL, getPokemonsAPI } from "@/api/pokemon";
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

        const response = await getPokemonsAPI();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        navbarItems,
        openMobileMenu,
        pokemons,
        setOpenMobileMenu,
        setPokemons,
      }}
    >
      {children}
    </Context.Provider>
  );
}
