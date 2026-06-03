import React, { useState } from "react";
import TituloSeccion from "./TituloSeccion";

const C = {
  card: "rgba(255, 250, 244, 0.8)",
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#645b52",
  text: "#1c1714",
  accentG: "#6f8c78",
};

export default function SobreMi() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const habilidades = [
    { nombre: "Algodón premium", nivel: 92, color: "#a16f45" },
    { nombre: "Lino fresco", nivel: 84, color: "#6f8c78" },
    { nombre: "Denim estructurado", nivel: 78, color: "#8a6f5a" },
    { nombre: "Acabados limpios", nivel: 88, color: "#1c1714" },
  ];

  return (
    <section id="coleccion" style={{ padding: "88px clamp(20px, 4vw, 56px)" }}>
      <TituloSeccion tag="COLECCIÓN" titulo="Nuestra esencia" />
      <div style={{ maxWidth: 1120, margin: "40px auto 0", background: C.card, border: `1px solid ${C.border}`, borderRadius: 28, padding: "32px", boxShadow: "0 26px 60px rgba(46, 31, 18, 0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22, alignItems: "start" }}>
          <div style={{ padding: 24, borderRadius: 22, background: "linear-gradient(180deg, rgba(255,255,255,.82), rgba(246,240,232,.86))", border: `1px solid ${C.border}` }}>
            <div style={{ width: 78, height: 78, borderRadius: "50%", background: "linear-gradient(135deg, #1c1714, #a16f45)", display: "grid", placeItems: "center", fontSize: 28, fontWeight: 800, color: "#fffaf4", marginBottom: 18 }}>AU</div>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: C.text, marginBottom: 8 }}>Moda pensada para durar</h3>
            <p style={{ color: C.muted, lineHeight: 1.8 }}>
              Curamos prendas que mezclan comodidad, cortes versátiles y una estética limpia. La base del proyecto se mantiene, pero la narrativa se transforma por completo en una marca de ropa.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ background: "rgba(255,255,255,.66)", border: `1px solid ${C.border}`, borderRadius: 22, padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 12 }}>
                <span style={{ fontSize: 12, letterSpacing: "0.14em", color: C.accent, fontWeight: 800, textTransform: "uppercase" }}>Lo que ofrecemos</span>
                <span style={{ background: "rgba(111, 140, 120, 0.12)", color: C.accentG, borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 700 }}>Selección curada</span>
              </div>
              <p style={{ color: C.muted, lineHeight: 1.75 }}>
                Básicos elevados, capas ligeras, prendas estructuradas y accesorios que completan el outfit sin saturarlo.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
              {[["48h", "despacho"], ["100%", "materiales elegidos"], ["1 a 1", "asesoría de estilo"]].map(([value, label]) => (
                <div key={label} style={{ background: "rgba(255,255,255,.7)", border: `1px solid ${C.border}`, borderRadius: 18, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: C.text }}>{value}</div>
                  <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => setMostrarInfo(m => !m)} style={{ marginTop: 24, background: "transparent", border: `1px solid ${C.accent}`, borderRadius: 999, padding: "11px 20px", color: C.accent, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .2s" }}>
          {mostrarInfo ? "Ocultar detalles" : "Ver materiales"}
        </button>
        {mostrarInfo && (
          <div className="fade" style={{ marginTop: 24, display: "grid", gap: 16 }}>
            {habilidades.map((h) => (
              <div key={h.nombre}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{h.nombre}</span>
                  <span style={{ fontSize: 13, color: C.muted }}>{h.nivel}%</span>
                </div>
                <div style={{ background: "rgba(68, 56, 47, 0.12)", borderRadius: 999, height: 9, overflow: "hidden" }}>
                  <div style={{ width: `${h.nivel}%`, height: "100%", background: h.color, borderRadius: 999, transition: "width .8s ease" }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
