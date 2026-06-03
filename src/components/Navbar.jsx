import React, { useEffect, useState } from "react";

const C = {
  bg: "rgba(255, 250, 244, 0.76)",
  border: "rgba(68, 56, 47, 0.16)",
  accent: "#a16f45",
  muted: "#6d655d",
  text: "#1c1714",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activo, setActivo] = useState("inicio");
  const secciones = ["inicio", "coleccion", "ventajas", "looks", "galeria", "contacto"];

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 24);
      let seccionActual = "inicio";
      for (const id of secciones) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) seccionActual = id;
        }
      }
      setActivo(seccionActual);
    };
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function irA(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 99,
      background: scrolled ? C.bg : "transparent",
      backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition: "all .3s ease", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px clamp(18px, 4vw, 44px)",
    }}>
      <a href="#inicio" onClick={(e) => irA(e, "inicio")} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #1c1714, #a16f45)", boxShadow: "0 10px 24px rgba(161, 111, 69, 0.28)" }} />
        <span style={{ fontWeight: 800, fontSize: 18, color: C.text, letterSpacing: "0.08em" }}>ATELIER URBANO</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {secciones.map(l => {
          const esActivo = activo === l;
          return (
            <a key={l} href={`#${l}`} onClick={e => irA(e, l)} style={{
              color: esActivo ? C.text : C.muted, fontSize: 13, fontWeight: esActivo ? 700 : 500,
              letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "all .2s",
              borderBottom: esActivo ? `2px solid ${C.accent}` : "2px solid transparent", paddingBottom: 5,
            }}>{l === "coleccion" ? "Colección" : l === "ventajas" ? "Ventajas" : l === "galeria" ? "Looks" : l === "contacto" ? "Contacto" : l}</a>
          );
        })}
        <a href="#contacto" onClick={(e) => irA(e, "contacto")} style={{ background: C.text, color: "#fffaf4", borderRadius: 999, padding: "10px 18px", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", boxShadow: "0 14px 28px rgba(28, 23, 20, 0.12)" }}>
          Reservar cita
        </a>
      </div>
    </nav>
  );
}
