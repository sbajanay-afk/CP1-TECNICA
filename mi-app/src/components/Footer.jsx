import React from "react";

const C = {
  card: "rgba(255, 250, 244, 0.82)",
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#645b52",
  text: "#1c1714",
};

export default function Footer() {
  return (
    <footer id="contacto" style={{ borderTop: `1px solid ${C.border}`, padding: "72px clamp(20px, 4vw, 56px) 34px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, background: "rgba(255,255,255,0.28)" }}>
      <div>
        <p style={{ color: C.accent, fontWeight: 800, fontSize: 18, marginBottom: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>Atelier Urbano</p>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8 }}>Venta de ropa con enfoque editorial: prendas que se combinan fácil, se ven bien y duran más de una temporada.</p>
      </div>
      <div>
        <p style={{ fontWeight: 800, marginBottom: 16, color: C.text }}>Contacto</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href="mailto:ventas@atelierurbano.com" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 14px", color: C.text, textDecoration: "none" }}>ventas@atelierurbano.com</a>
          <a href="tel:+593969237338" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 14px", color: C.text, textDecoration: "none" }}>0969237338</a>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: 800, marginBottom: 16, color: C.text }}>Horario</p>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8 }}>Lunes a sábado: 10:00 - 19:00</p>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8 }}>Pedidos por WhatsApp y entregas a domicilio.</p>
      </div>
    </footer>
  );
}
