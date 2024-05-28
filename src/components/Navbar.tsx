import logo from "@/assets/logo.png";
import { useContextApp } from "@/context/ContextProvider";
import { NavbarItem } from "./NavbarItem";
import { ButtonMenu } from "./ButtonMenu";

export function Navbar() {
  const { navbarItems } = useContextApp();

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="w-4/5 max-w-64">
        <img src={logo} alt="" className="w-full" />
      </div>
      <nav className="hidden sm:block ">
        <ul className="flex gap-4">
          {navbarItems.map((item) => (
            <NavbarItem key={item.title} item={item} />
          ))}
        </ul>
      </nav>
      <ButtonMenu />
    </div>
  );
}
