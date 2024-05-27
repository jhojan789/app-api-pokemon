import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
}
