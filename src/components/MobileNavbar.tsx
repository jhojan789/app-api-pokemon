import { useContextApp } from "@/context/ContextProvider";
import { NavbarItem } from "./NavbarItem";
import { ButtonCloseMenu } from "./ButtonCloseMenu";

export function MobileNavbar() {
  const { navbarItems, setOpenMobileMenu } = useContextApp();

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0"
      style={{
        backgroundColor: "rgba(97, 141, 97, 0.47)",
      }}
      onClick={() => setOpenMobileMenu(false)}
    >
      <nav
        className="fixed top-5 right-0 bg-white w-4/5 p-4 shadow-lg rounded-l-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="flex flex-col items-end gap-4">
          {navbarItems.map((item) => (
            <NavbarItem key={item.title} item={item} />
          ))}
        </ul>
        <ButtonCloseMenu />
      </nav>
    </div>
  );
}
