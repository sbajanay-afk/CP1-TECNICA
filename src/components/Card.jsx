import React from 'react';
import { C } from '../theme';
export default function Card({ icono, titulo, descripcion }) {
  return <div style={{ backgroundColor: C.surface, padding: '2rem' }}><h3>{icono} {titulo}</h3><p>{descripcion}</p></div>;
}
