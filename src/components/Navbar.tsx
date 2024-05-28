import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import logo from "@/assets/logo.png";
import { useContextApp } from "@/context/ContextProvider";
import { NavbarItem } from "./NavbarItem";

export function Navbar() {
  const { navbarItems } = useContextApp();
  console.log(navbarItems);

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="w-4/5 max-w-64">
        <img src={logo} alt="" className="w-full" />
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-4">
          {navbarItems.map((item) => (
            <NavbarItem key={item.title} item={item} />
          ))}
        </ul>
      </nav>
      <IoMenu className="bloc sm:hidden cursor-pointer" size="2rem" />
    </div>
  );
}
