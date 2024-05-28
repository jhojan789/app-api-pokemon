type Pokemon = {
  id: number;
  name: string;
  type: string;
  order: number;
  image: string;
  cries: string;
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
