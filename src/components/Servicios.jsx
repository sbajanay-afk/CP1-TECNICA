import React from 'react';
import TituloSeccion from './TituloSeccion';
import Card from './Card';
export default function Servicios() {
  return (
    <section style={{ padding: '5rem' }}>
      <TituloSeccion titulo="Servicios" />
      <Card icono="💻" titulo="Web" descripcion="Desarrollo a medida." />
    </section>
  );
}
