import { useEffect } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useContextApp } from "./context/ContextProvider";

export function App() {
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

  return (
    <div className="p-6">
      <AppRoutes />
    </div>
  );
}
