import React from 'react';
import { C } from '../theme';
export default function TituloSeccion({ titulo, subtitulo }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{titulo}</h2>
      {subtitulo && <p style={{ color: C.textMuted }}>{subtitulo}</p>}
    </div>
  );
}
