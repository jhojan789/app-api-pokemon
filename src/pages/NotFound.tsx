import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  console.log(location.state);

  return <div>{location.state} Not Found </div>;
}
