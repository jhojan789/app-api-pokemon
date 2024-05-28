import { AppRoutes } from "./routes/AppRoutes";
import { useWindowSize } from "./hooks/useWindowSize";

export function App() {
  useWindowSize();
  return (
    <div className="p-6">
      <AppRoutes />
    </div>
  );
}
