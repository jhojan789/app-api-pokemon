import { NavLink } from "react-router-dom";

interface NavbarItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  item: NavbarItem;
}

export function NavbarItem({ item, ...props }: NavbarItemProps) {
  return (
    <li {...props}>
      <NavLink to={item.slug}>{item.title}</NavLink>
    </li>
  );
}
