import React, { useState, useEffect } from 'react';
export default function Contador({ valorFinal, texto }) {
  const [c, setC] = useState(0);
  useEffect(() => { setC(valorFinal); }, [valorFinal]);
  return <div>{c} {texto}</div>;
}
