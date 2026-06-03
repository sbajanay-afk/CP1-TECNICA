import React, { useState } from "react";

const C = {
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#645b52",
  text: "#1c1714",
  soft: "#fffaf4",
  highlight: "#6f8c78",
};

export default function Hero() {
  const [mensaje, setMensaje] = useState("");
  const [btnHover, setBtnHover] = useState(false);
  const frases = ["Edición otoño-invierno lista.", "Combina básicos con piezas clave.", "Tu próximo look empieza aquí."];
  const [fraseIdx, setFraseIdx] = useState(0);

  function handleClick() {
    setMensaje(frases[fraseIdx]);
    setFraseIdx(i => (i + 1) % frases.length);
  }

  return (
    <section style={{
      minHeight: "100svh",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
      alignItems: "center",
      gap: 36,
      padding: "120px clamp(20px, 4vw, 56px) 72px",
      background: "linear-gradient(135deg, rgba(255,255,255,0.68), rgba(255,250,244,0.88) 52%, rgba(246,240,232,0.85))",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: "auto 10% 8% auto", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(161,111,69,0.15), transparent 70%)", pointerEvents: "none" }} />
      <div className="fade" style={{ position: "relative", zIndex: 1, maxWidth: 680, textAlign: "left" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.72)", border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 12, color: C.accent, fontWeight: 700, letterSpacing: ".12em", marginBottom: 22 }}>NUEVA TEMPORADA 2026</span>
        <h1 style={{ fontSize: "clamp(2.7rem, 7vw, 5.7rem)", fontWeight: 700, lineHeight: 0.95, marginBottom: 18, color: C.text }}>Vístete con<br /><span style={{ color: C.accent }}>intención</span></h1>
        <p style={{ fontSize: 18, color: C.muted, marginBottom: 28, maxWidth: 560 }}>Piezas versátiles, cortes limpios y combinaciones pensadas para verse bien sin esfuerzo. Una identidad nueva, basada en el mismo esqueleto del proyecto.</p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 26 }}>
          <a href="#coleccion" style={{ background: C.text, color: C.soft, borderRadius: 999, padding: "14px 22px", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", boxShadow: "0 16px 30px rgba(28, 23, 20, 0.14)" }}>Explorar colección</a>
          <a href="#contacto" style={{ background: "rgba(255,255,255,0.7)", color: C.text, border: `1px solid ${C.border}`, borderRadius: 999, padding: "14px 22px", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em" }}>Hacer pedido</a>
        </div>
        <button onClick={handleClick} onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)} style={{ background: btnHover ? C.accent : "transparent", color: btnHover ? "#fffaf4" : C.accent, border: `1px solid ${C.accent}`, borderRadius: 999, padding: "11px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .25s" }}>Inspirarme con un look</button>
        {mensaje && <p className="fade" style={{ marginTop: 18, fontSize: 16, fontWeight: 700, color: C.highlight }}>{mensaje}</p>}
      </div>
      <div className="fade" style={{ position: "relative", zIndex: 1, display: "grid", gap: 16 }}>
        <div style={{ borderRadius: 28, minHeight: 420, background: "linear-gradient(160deg, rgba(255,250,244,0.95), rgba(220,206,190,0.88))", border: `1px solid ${C.border}`, boxShadow: "0 24px 60px rgba(46, 31, 18, 0.10)", padding: 20, display: "grid", gap: 18 }}>
          <div style={{ borderRadius: 22, background: "linear-gradient(180deg, #f3dfce, #c5ab95)", minHeight: 240, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: "auto 18px 18px auto", width: 132, height: 132, borderRadius: "50%", background: "rgba(255,250,244,0.35)", filter: "blur(2px)" }} />
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#fffaf4", fontFamily: "var(--heading)", fontSize: 28, letterSpacing: "0.14em" }}>LOOKBOOK</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
            {[["Envío", "24 h"], ["Tallas", "XS-XL"], ["Material", "Premium"]].map(([title, value]) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.72)", border: `1px solid ${C.border}`, borderRadius: 18, padding: "14px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 12, letterSpacing: "0.12em", color: C.muted, textTransform: "uppercase" }}>{title}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginTop: 6 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
