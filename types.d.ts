type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  order: number;
  image: string;
  cries: string;
  stats: StatType[];
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type StatType = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type NavbarItem = {
  title: string;
  slug: string;
};

type Context = {
  navbarItems: NavbarItem[];
  openMobileMenu: boolean;
  pokemons: Pokemon[];
  types: string[];
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

interface LazyImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  placeholder: string;
  loadingComponent?: JSX.Element;
}
