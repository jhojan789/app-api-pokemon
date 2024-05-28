import { useContextApp } from "@/context/ContextProvider";
import { IoIosCloseCircle } from "react-icons/io";

export function ButtonCloseMenu() {
  const { setOpenMobileMenu } = useContextApp();

  return (
    <IoIosCloseCircle
      className="absolute top-3 left-3 cursor-pointer "
      size="1.5rem"
      onClick={() => setOpenMobileMenu(false)}
    />
  );
}
