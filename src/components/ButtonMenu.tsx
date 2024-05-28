import { useContextApp } from "@/context/ContextProvider";
import { IoMenu } from "react-icons/io5";

export function ButtonMenu() {
  const { setOpenMobileMenu } = useContextApp();

  const openMenu = () => {
    setOpenMobileMenu(true);
  };

  return (
    <IoMenu
      onClick={openMenu}
      className="bloc sm:hidden cursor-pointer"
      size="2rem"
    />
  );
}
