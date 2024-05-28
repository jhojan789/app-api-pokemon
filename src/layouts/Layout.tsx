import { MobileNavbar } from "@/components/MobileNavbar";
import { Navbar } from "@/components/Navbar";
import { useContextApp } from "@/context/ContextProvider";

import { Outlet } from "react-router-dom";
export default function Layout() {
  const { openMobileMenu } = useContextApp();

  return (
    <>
      {openMobileMenu && <MobileNavbar />}
      <Navbar />
      <Outlet />
    </>
  );
}
