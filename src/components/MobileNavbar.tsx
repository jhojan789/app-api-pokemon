import { useContextApp } from "@/context/ContextProvider";
import { NavbarItem } from "./NavbarItem";

export function MobileNavbar() {
  const { navbarItems } = useContextApp();

  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-4">
        {navbarItems.map((item) => (
          <NavbarItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
}
