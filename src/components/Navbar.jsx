import React, { useState } from 'react';
import { C } from '../theme';
export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: C.surface, padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: C.text }}>
        <div>MiPortfolio</div>
      </div>
    </nav>
  );
}
