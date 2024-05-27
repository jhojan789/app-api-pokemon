import Layout from "@/layouts/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Pokemon from "@/pages/Pokemon";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pokemons/:id" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
