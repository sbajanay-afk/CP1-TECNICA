import React, { useState } from "react";
import TituloSeccion from "./TituloSeccion";

const C = {
  surface: "rgba(255, 250, 244, 0.82)",
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#645b52",
};

const looks = [
  { nombre: "Look City Soft", descripcion: "Camisa fluida, pantalón recto y bolso estructurado para oficina o brunch.", piezas: ["Camisa arena", "Pantalón recto", "Tote minimal"], tono: "#6f8c78" },
  { nombre: "Look Noche Cálida", descripcion: "Vestido corto, blazer oscuro y accesorios dorados para salir de noche.", piezas: ["Vestido satinado", "Blazer", "Aretes dorados"], tono: "#a16f45" },
  { nombre: "Look Weekend Layer", descripcion: "Capa ligera, denim relajado y camiseta base para un día casual.", piezas: ["Camiseta blanca", "Jean wide", "Sobrecamisa"], tono: "#1c1714" },
];

export default function Contador() {
  const [num, setNum] = useState(0);
  const actual = looks[num];
  const color = actual.tono;

  return (
    <section id="looks" style={{ padding: "84px clamp(20px, 4vw, 56px)", background: "linear-gradient(180deg, rgba(246,240,232,0.2), rgba(255,250,244,0.72), rgba(246,240,232,0.2))" }}>
      <TituloSeccion tag="LOOKS" titulo="Arma tu outfit favorito" />
      <div style={{ maxWidth: 820, margin: "36px auto 0", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 28, padding: "30px", textAlign: "left", boxShadow: "0 24px 54px rgba(46, 31, 18, 0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(220px, 0.95fr)", gap: 24, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color, fontWeight: 800, marginBottom: 14 }}>Opción {num + 1} de {looks.length}</div>
            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 12, color: "#1c1714" }}>{actual.nombre}</h3>
            <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: 20 }}>{actual.descripcion}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {actual.piezas.map((pieza) => (
                <span key={pieza} style={{ background: "rgba(255,255,255,.7)", border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 12px", fontSize: 13, color: "#1c1714", fontWeight: 700 }}>{pieza}</span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 24, padding: 18, background: `linear-gradient(160deg, ${color}22, rgba(255,255,255,.82))`, border: `1px solid ${C.border}` }}>
            <div style={{ borderRadius: 22, minHeight: 250, position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${color}55, rgba(255,250,244,0.95))` }}>
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#fffaf4", fontWeight: 800, letterSpacing: "0.16em", fontSize: 20 }}>STYLE MODE</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
          <button onClick={() => setNum((n) => (n - 1 + looks.length) % looks.length)} style={{ background: "rgba(255,255,255,.72)", color: "#1c1714", border: `1px solid ${C.border}`, borderRadius: 999, padding: "11px 18px", cursor: "pointer", fontWeight: 700 }}>Anterior</button>
          <button onClick={() => setNum(0)} style={{ background: "rgba(255,255,255,.72)", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 999, padding: "11px 18px", cursor: "pointer", fontWeight: 700 }}>Reset</button>
          <button onClick={() => setNum((n) => (n + 1) % looks.length)} style={{ background: color, color: "#fffaf4", border: `1px solid ${color}`, borderRadius: 999, padding: "11px 18px", cursor: "pointer", fontWeight: 700 }}>Siguiente</button>
        </div>
      </div>
    </section>
  );
}
