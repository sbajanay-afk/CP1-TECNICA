import React, { useState } from "react";
import TituloSeccion from "./TituloSeccion";

const C = {
  card: "rgba(255, 250, 244, 0.84)",
  surface: "rgba(255,255,255,0.72)",
  border: "rgba(68, 56, 47, 0.16)",
  muted: "#645b52",
  text: "#1c1714",
};

export default function Carrusel() {
  const tarjetas = [
    { emoji: "01", titulo: "Luce minimal", desc: "Vestido fluido, sandalias limpias y joyería fina para un acabado sofisticado.", color: "#a16f45" },
    { emoji: "02", titulo: "Urbano pulido", desc: "Capa ligera, denim amplio y sneakers neutros para un look equilibrado.", color: "#6f8c78" },
    { emoji: "03", titulo: "Noche editorial", desc: "Blazer estructurado, top satinado y accesorios contrastantes para destacar.", color: "#1c1714" },
  ];
  const [actual, setActual] = useState(0);
  const t = tarjetas[actual];

  return (
    <section id="galeria" style={{ padding: "84px clamp(20px, 4vw, 56px)", textAlign: "center" }}>
      <TituloSeccion tag="LOOKBOOK" titulo="Galería editorial" />
      <div key={actual} className="fade" style={{ maxWidth: 920, margin: "32px auto", background: C.card, border: `1px solid ${t.color}55`, borderRadius: 28, padding: "18px", boxShadow: "0 24px 50px rgba(46, 31, 18, 0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, alignItems: "stretch" }}>
          <div style={{ minHeight: 300, borderRadius: 24, background: `linear-gradient(160deg, ${t.color}55, rgba(255,255,255,.78))`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#fffaf4", fontSize: 34, fontWeight: 800, letterSpacing: "0.16em" }}>{t.emoji}</div>
          </div>
          <div style={{ textAlign: "left", padding: 12, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ display: "inline-block", width: "fit-content", padding: "7px 12px", borderRadius: 999, border: `1px solid ${t.color}33`, color: t.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", marginBottom: 14, textTransform: "uppercase" }}>Selección {actual + 1}</span>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: C.text, marginBottom: 12 }}>{t.titulo}</h3>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>{t.desc}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 12px", fontSize: 13, color: C.text, fontWeight: 700 }}>Disponible en talla S a L</span>
              <span style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 12px", fontSize: 13, color: C.text, fontWeight: 700 }}>Envío rápido</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <button onClick={() => setActual(i => (i - 1 + tarjetas.length) % tarjetas.length)} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, padding: "11px 20px", borderRadius: 999, cursor: "pointer", fontWeight: 700 }}>Anterior</button>
        <button onClick={() => setActual(i => (i + 1) % tarjetas.length)} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, padding: "11px 20px", borderRadius: 999, cursor: "pointer", fontWeight: 700 }}>Siguiente</button>
      </div>
    </section>
  );
}
