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
      <div className="flex flex-wrap">
        {types.map((t) => (
          <TypeButton name={t} />
        ))}
      </div>

      <Outlet />
    </>
  );
}
