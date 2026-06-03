import React from "react";
export default function TituloSeccion({ tag, titulo }) {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".18em", color: "#a16f45", display: "block", marginBottom: 10, textTransform: "uppercase" }}>{tag}</span>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#1c1714" }}>{titulo}</h2>
    </div>
  );
}
