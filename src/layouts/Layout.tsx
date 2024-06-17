import { MobileNavbar } from "@/components/MobileNavbar";
import { Navbar } from "@/components/Navbar";
import { TypeButton } from "@/components/TypeButton";
import { useContextApp } from "@/context/ContextProvider";

import { Outlet } from "react-router-dom";
export default function Layout() {
  const { openMobileMenu, types } = useContextApp();

  return (
    <>
      {openMobileMenu && <MobileNavbar />}
      <Navbar />
      <div className="flex flex-wrap gap-1">
        {types.map((t) => (
          <TypeButton key={t} name={t} />
        ))}
      </div>

      <Outlet />
    </>
  );
}
