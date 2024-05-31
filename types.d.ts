type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  order: number;
  image: string;
  cries: string;
};

type PokemonType = {
  slot: number;
  type: {
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
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LazyImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  placeholder: string;
  loadingComponent?: JSX.Element;
}
