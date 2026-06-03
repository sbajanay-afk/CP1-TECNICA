import React, { useState } from "react";
import TituloSeccion from "./TituloSeccion";

const C = {
  card: "rgba(255, 250, 244, 0.82)",
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#645b52",
  text: "#1c1714",
};

function Card({ icono, titulo, descripcion, color }) {
  const [abierto, setAbierto] = useState(false);
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: C.card, border: `1px solid ${hov ? color + "66" : C.border}`, borderRadius: 22, padding: "24px 22px", transition: "all .3s", transform: hov ? "translateY(-6px)" : "none", boxShadow: hov ? `0 16px 34px ${color}18` : "none" }}>
      <div style={{ width: 52, height: 52, borderRadius: 16, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 14, border: `1px solid ${color}30` }}>{icono}</div>
      <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, color: C.text }}>{titulo}</h3>
      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{descripcion}</p>
      <button onClick={() => setAbierto(a => !a)} style={{ marginTop: 16, background: "none", border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 12, color: C.text, cursor: "pointer" }}>{abierto ? "Ocultar" : "Ver detalle"}</button>
      {abierto && <p className="fade" style={{ marginTop: 12, fontSize: 12, color: C.text, background: color + "10", borderLeft: `3px solid ${color}`, padding: "10px 12px", borderRadius: 12 }}>Cada categoría ayuda a construir un look completo sin perder coherencia visual.</p>}
    </div>
  );
}

export default function Servicios() {
  const items = [
    { icono: "🧥", titulo: "Abrigos y capas", color: C.accent, descripcion: "Prendas que elevan el outfit y funcionan en cualquier temporada." },
    { icono: "👕", titulo: "Básicos premium", color: "#6f8c78", descripcion: "Camisetas, tops y blusas que combinan con todo sin verse simples." },
    { icono: "👖", titulo: "Denim y pantalones", color: "#7a5c49", descripcion: "Cortes que estilizan y aportan estructura a la silueta." },
    { icono: "👜", titulo: "Accesorios clave", color: "#4f4a43", descripcion: "Bolsos, cinturones y piezas pequeñas que terminan el look." },
  ];
  return (
    <section id="ventajas" style={{ padding: "84px clamp(20px, 4vw, 56px)" }}>
      <TituloSeccion tag="VENTAJAS" titulo="Categorías pensadas para combinar" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 18, marginTop: 40 }}>
        {items.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </section>
  );
}
