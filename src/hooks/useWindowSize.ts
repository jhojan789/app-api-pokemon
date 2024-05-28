import { useContextApp } from "@/context/ContextProvider";
import { useEffect } from "react";

export function useWindowSize() {
  const { setOpenMobileMenu, openMobileMenu } = useContextApp();
  const handleResize = () => {
    if (openMobileMenu && window.innerWidth >= 640) setOpenMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMobileMenu]);
}
