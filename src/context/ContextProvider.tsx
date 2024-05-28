import { ReactNode, createContext, useContext, useState } from "react";

const Context = createContext<Context>({
  navbarItems: [],
  openMobileMenu: false,
  setOpenMobileMenu: () => {},
});

export function useContextApp() {
  return useContext(Context);
}

export function ContextProvider({ children }: { children: ReactNode }) {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(() => {
    return false;
  });

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

  return (
    <Context.Provider
      value={{
        navbarItems,
        openMobileMenu,
        setOpenMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
}
