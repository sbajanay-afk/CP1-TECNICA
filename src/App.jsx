import { useEffect } from 'react';
import { baseStyles } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const sheet = document.createElement('style');
    sheet.textContent = baseStyles;
    document.head.appendChild(sheet);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Servicios />
      <Carrusel />
      <Footer />
    </>
  );
}
