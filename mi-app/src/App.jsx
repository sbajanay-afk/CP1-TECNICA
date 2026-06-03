import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import Contador from "./components/Contador";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Contador />
        <Carrusel />
        <Footer />
      </main>
    </div>
  );
}
