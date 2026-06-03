import React from 'react';
import { C } from '../theme';
export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Diseño y Desarrollo <span style={{ color: C.accent }}>Digital</span></h1>
    </section>
  );
}
