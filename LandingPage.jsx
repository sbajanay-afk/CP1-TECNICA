import { useState, useEffect } from "react";

/* ─── PALETA ─────────────────────────────────────────────── */
const C = {
  bg:       "#0d1117",
  surface:  "#161b22",
  card:     "#1c2333",
  border:   "#30363d",
  accent:   "#58a6ff",
  accentG:  "#3fb950",
  text:     "#e6edf3",
  muted:    "#8b949e",
  danger:   "#f85149",
};

/* ─── ESTILOS BASE ────────────────────────────────────────── */
const base = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.bg}; color: ${C.text}; font-family: 'Segoe UI', system-ui, sans-serif; }
  a { text-decoration: none; color: inherit; }
  html { scroll-behavior: smooth; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade { animation: fadeUp .5s ease both; }
`;

/* ════════════════════════════════════════════════
   COMPONENTE: Navbar
   ════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activo, setActivo] = useState("inicio");

  const secciones = ["inicio", "sobre-mi", "servicios", "proyectos", "galeria", "contacto"];

  useEffect(() => {
    const fn = () => {
      // Fo
      setScrolled(window.scrollY > 30);

      // Detectar qué sección está visible
      let seccionActual = "inicio";
      for (const id of secciones) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) seccionActual = id;
        }
      }
      setActivo(seccionActual);
    };

    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Scroll suave al hacer clic
  function irA(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 99,
      height: 60,
      background: scrolled ? "rgba(13,17,23,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition: "all .3s",
      display: "flex", alignItems: "center",
      padding: "0 40px",
    }}>
      {/* Logo */}
      <span style={{ fontWeight: 700, fontSize: 20, color: C.accent, flex: 1 }}>
        Mi Proyecto
      </span>

      {/* Links */}
      <div style={{ display: "flex", gap: 30 }}>
        {secciones.map(l => {
          const esActivo = activo === l;
          return (
            <a
              key={l}
              href={`#${l}`}
              onClick={e => irA(e, l)}
              style={{
                color: esActivo ? C.accent : C.muted,
                fontSize: 14, fontWeight: esActivo ? 700 : 500,
                textTransform: "capitalize",
                textDecoration: "none",
                transition: "all .2s",
                borderBottom: esActivo ? `2px solid ${C.accent}` : "2px solid transparent",
                paddingBottom: 4,
              }}
              onMouseEnter={e => { if (!esActivo) e.currentTarget.style.color = C.text; }}
              onMouseLeave={e => { if (!esActivo) e.currentTarget.style.color = C.muted; }}
            >{l}</a>
          );
        })}
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Hero
   ════════════════════════════════════════════════ */
function Hero() {
  const [mensaje, setMensaje] = useState("");
  const [btnHover, setBtnHover] = useState(false);

  const frases = [
    "¡Gracias por visitar! 🎉",
    "React es increíble ⚛️",
    "¡Tú puedes aprender esto! 💪",
  ];
  const [fraseIdx, setFraseIdx] = useState(0);

  function handleClick() {
    setMensaje(frases[fraseIdx]);
    setFraseIdx(i => (i + 1) % frases.length);
  }

  return (
    <section id="inicio" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "80px 20px 60px",
      background: `radial-gradient(ellipse 80% 50% at 50% 30%, #1f2d4a 0%, ${C.bg} 70%)`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Círculos decorativos de fondo */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        border: `1px solid ${C.border}`, top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", opacity: .3, pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", width: 620, height: 620, borderRadius: "50%",
        border: `1px solid ${C.border}`, top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", opacity: .15, pointerEvents: "none",
      }}/>

      <div className="fade" style={{ position: "relative", zIndex: 1 }}>
        {/* Chip */}
        <span style={{
          display: "inline-block", background: "#1f2d4a",
          border: `1px solid ${C.accent}44`, borderRadius: 999,
          padding: "4px 14px", fontSize: 12, color: C.accent,
          fontWeight: 600, letterSpacing: ".06em", marginBottom: 24,
        }}>⚛️ PROYECTO REACT · 2026</span>

        <h1 style={{
          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
          fontWeight: 800, lineHeight: 1.1, marginBottom: 16,
          color: C.text,
        }}>
          Mi Landing Page<br />
          <span style={{ color: C.accent }}>con React</span>
        </h1>

        <p style={{ fontSize: 17, color: C.muted, marginBottom: 36, maxWidth: 500 }}>
          Aprendiendo componentes, estados y eventos de JavaScript en React.
        </p>

        <button
          onClick={handleClick}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            background: btnHover ? C.accent : "transparent",
            color: btnHover ? C.bg : C.accent,
            border: `1px solid ${C.accent}`,
            borderRadius: 8, padding: "12px 32px",
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            transition: "all .25s",
          }}
        >
          Haz clic aquí
        </button>

        {mensaje && (
          <p className="fade" style={{
            marginTop: 20, fontSize: 18, fontWeight: 600,
            color: C.accentG,
          }}>{mensaje}</p>
        )}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Card  (reutilizable)
   ════════════════════════════════════════════════ */
function Card({ icono, titulo, descripcion, color }) {
  const [abierto, setAbierto] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.card,
        border: `1px solid ${hov ? color + "66" : C.border}`,
        borderRadius: 12, padding: "24px 22px",
        transition: "all .3s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 8px 24px ${color}22` : "none",
      }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: 10,
        background: color + "20", display: "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 14,
        border: `1px solid ${color}33`,
      }}>{icono}</div>

      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: C.text }}>
        {titulo}
      </h3>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{descripcion}</p>

      <button
        onClick={() => setAbierto(a => !a)}
        style={{
          marginTop: 14, background: "none",
          border: `1px solid ${C.border}`, borderRadius: 6,
          padding: "5px 12px", fontSize: 12, color: C.muted,
          cursor: "pointer", transition: "border-color .2s",
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = color}
        onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
      >
        {abierto ? "▲ Cerrar" : "▼ Ver más"}
      </button>

      {abierto && (
        <p className="fade" style={{
          marginTop: 10, fontSize: 12, color: C.text,
          background: color + "11", borderLeft: `3px solid ${color}`,
          padding: "8px 10px", borderRadius: 4, lineHeight: 1.65,
        }}>
          Este componente recibe datos por <strong>props</strong> y gestiona su
          estado con <strong>useState</strong>. ¡Es reutilizable!
        </p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Servicios
   ════════════════════════════════════════════════ */
function Servicios() {
  const items = [
    { icono: "⚛️", titulo: "Componentes React", color: C.accent,
      descripcion: "Bloques reutilizables de UI con su propia lógica y estado." },
    { icono: "🎣", titulo: "useState & useEffect", color: "#3fb950",
      descripcion: "Hooks para manejar el estado y los efectos secundarios." },
    { icono: "⚡", titulo: "Eventos JS", color: "#f0883e",
      descripcion: "onClick, onChange y más dan vida interactiva a la app." },
    { icono: "🎨", titulo: "CSS Dinámico", color: "#d2a8ff",
      descripcion: "Estilos que cambian en tiempo real según el estado." },
  ];

  return (
    <section id="servicios" style={{ padding: "80px 40px" }}>
      <TituloSeccion tag="SERVICIOS" titulo="¿Qué usamos?" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: 18, marginTop: 40,
      }}>
        {items.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Contador
   ════════════════════════════════════════════════ */
function Contador() {
  const [num, setNum] = useState(0);

  const color = num > 0 ? C.accentG : num < 0 ? C.danger : C.accent;

  return (
    <section id="proyectos" style={{
      padding: "80px 40px",
      background: `linear-gradient(180deg, transparent, #111827 40%, #111827 60%, transparent)`,
    }}>
      <TituloSeccion tag="INTERACTIVIDAD" titulo="Contador con estado" />
      <p style={{ color: C.muted, textAlign: "center", marginTop: 8, fontSize: 14 }}>
        useState + onClick — el color cambia según el valor
      </p>

      <div style={{
        maxWidth: 340, margin: "36px auto 0",
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 14, padding: "32px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: 72, fontWeight: 800, color,
          transition: "color .3s", lineHeight: 1,
          marginBottom: 24,
        }}>{num}</div>

        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          {[
            { label: "−", fn: () => setNum(n => n - 1), bg: "#f85149" },
            { label: "Reset", fn: () => setNum(0), bg: C.muted },
            { label: "+", fn: () => setNum(n => n + 1), bg: "#3fb950" },
          ].map(b => (
            <button key={b.label} onClick={b.fn} style={{
              background: b.bg + "22", color: b.bg,
              border: `1px solid ${b.bg}55`,
              borderRadius: 8, padding: "10px 20px",
              fontSize: 18, fontWeight: 700, cursor: "pointer",
              transition: "background .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = b.bg + "44"}
              onMouseLeave={e => e.currentTarget.style.background = b.bg + "22"}
            >{b.label}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Footer
   ════════════════════════════════════════════════ */
function Footer() {
  const [input, setInput] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviar() {
    if (!input.trim()) return;
    setEnviado(true);
    setInput("");
    setTimeout(() => setEnviado(false), 3000);
  }

  return (
    <footer id="contacto" style={{
      borderTop: `1px solid ${C.border}`,
      padding: "60px 40px 30px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 40,
    }}>
      <div>
        <p style={{ color: C.accent, fontWeight: 700, fontSize: 18, marginBottom: 10 }}>
          Mi Proyecto
        </p>
        <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.7 }}>
          Proyecto universitario para aprender React y JavaScript con componentes reutilizables.
        </p>
      </div>

      <div>
        <p style={{ fontWeight: 600, marginBottom: 12 }}>Tecnologías</p>
        {["React 18", "JavaScript ES2024", "CSS-in-JS", "Hooks (useState, useEffect)"].map(t => (
          <p key={t} style={{ color: C.muted, fontSize: 13, marginBottom: 6 }}>· {t}</p>
        ))}
      </div>

      <div>
        <p style={{ fontWeight: 600, marginBottom: 16 }}>Contacto</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Email */}
          <a href="mailto:jgarciav30@unemi.edu.ec" style={{
            display: "flex", alignItems: "center", gap: 10,
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "10px 14px",
            textDecoration: "none", transition: "all .2s",
            color: C.text,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; }}
          >
            <span style={{ fontSize: 18 }}>✉️</span>
            <div>
              <p style={{ fontSize: 11, color: C.muted, marginBottom: 1 }}>Email</p>
              <p style={{ fontSize: 13, color: C.accent, fontWeight: 500 }}>jgarciav30@unemi.edu.ec</p>
            </div>
          </a>

          {/* Teléfono */}
          <a href="tel:+593969237338" style={{
            display: "flex", alignItems: "center", gap: 10,
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "10px 14px",
            textDecoration: "none", transition: "all .2s",
            color: C.text,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.accentG; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; }}
          >
            <span style={{ fontSize: 18 }}>📱</span>
            <div>
              <p style={{ fontSize: 11, color: C.muted, marginBottom: 1 }}>Celular</p>
              <p style={{ fontSize: 13, color: C.accentG, fontWeight: 500 }}>0969237338</p>
            </div>
          </a>
        </div>
      </div>

      {/* Redes sociales */}
      <div style={{ gridColumn: "1 / -1", borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
        <p style={{ fontWeight: 600, marginBottom: 16, textAlign: "center" }}>Síguenos en</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a
            href="https://discord.gg/HcfJN6W7x"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#5865F222", border: "1px solid #5865F255",
              borderRadius: 10, padding: "10px 20px",
              color: "#7289da", fontWeight: 600, fontSize: 14,
              textDecoration: "none", transition: "all .2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#5865F244";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#5865F222";
              e.currentTarget.style.transform = "none";
            }}
          >
            {/* Ícono Discord SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#7289da">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Únete a Discord
          </a>
        </div>
      </div>

      <div style={{
        gridColumn: "1 / -1",
        borderTop: `1px solid ${C.border}`,
        paddingTop: 20, textAlign: "center",
        color: C.muted, fontSize: 13,
      }}>
        © 2026 Mi Proyecto · Proyecto académico hecho con ⚛️ React + JavaScript
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Carrusel de tarjetas
   ════════════════════════════════════════════════ */
function Carrusel() {
  const tarjetas = [
    { emoji: "🌐", titulo: "Desarrollo Web", desc: "Creamos sitios modernos con React, HTML y CSS adaptados a cualquier dispositivo.", color: "#58a6ff" },
    { emoji: "📱", titulo: "Diseño Responsive", desc: "Interfaces que se ven perfectas en celular, tablet y computadora.", color: "#3fb950" },
    { emoji: "⚡", titulo: "Alto Rendimiento", desc: "Aplicaciones rápidas y optimizadas gracias al Virtual DOM de React.", color: "#f0883e" },
    { emoji: "🔒", titulo: "Seguridad", desc: "Buenas prácticas de desarrollo para proteger los datos del usuario.", color: "#d2a8ff" },
    { emoji: "🎨", titulo: "UI Personalizada", desc: "Diseños únicos con estilos dinámicos y animaciones en CSS.", color: "#f85149" },
  ];

  const [actual, setActual] = useState(0);

  function anterior() {
    setActual(i => (i - 1 + tarjetas.length) % tarjetas.length);
  }

  function siguiente() {
    setActual(i => (i + 1) % tarjetas.length);
  }

  const t = tarjetas[actual];

  return (
    <section id="galeria" style={{ padding: "80px 40px", textAlign: "center" }}>
      <TituloSeccion tag="GALERÍA" titulo="Cambio de tarjetas" />
      <p style={{ color: C.muted, fontSize: 14, marginTop: 8, marginBottom: 40 }}>
        Ejemplo de cambio de tarjeta con useState — botones ← →
      </p>

      {/* Tarjeta activa */}
      <div key={actual} className="fade" style={{
        maxWidth: 420, margin: "0 auto",
        background: C.card,
        border: `1px solid ${t.color}55`,
        borderRadius: 16, padding: "40px 32px",
        boxShadow: `0 8px 32px ${t.color}22`,
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{t.emoji}</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: t.color, marginBottom: 12 }}>
          {t.titulo}
        </h3>
        <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>{t.desc}</p>
      </div>

      {/* Controles */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 32 }}>
        <button onClick={anterior} style={{
          background: C.surface, border: `1px solid ${C.border}`,
          color: C.text, borderRadius: 8, padding: "10px 22px",
          fontSize: 18, cursor: "pointer", transition: "border-color .2s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
          onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
        >←</button>

        {/* Indicadores de puntos */}
        <div style={{ display: "flex", gap: 8 }}>
          {tarjetas.map((_, i) => (
            <button key={i} onClick={() => setActual(i)} style={{
              width: i === actual ? 24 : 8, height: 8,
              borderRadius: 99, border: "none",
              background: i === actual ? C.accent : C.border,
              cursor: "pointer", transition: "all .3s",
              padding: 0,
            }} />
          ))}
        </div>

        <button onClick={siguiente} style={{
          background: C.surface, border: `1px solid ${C.border}`,
          color: C.text, borderRadius: 8, padding: "10px 22px",
          fontSize: 18, cursor: "pointer", transition: "border-color .2s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
          onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
        >→</button>
      </div>

      {/* Contador de posición */}
      <p style={{ color: C.muted, fontSize: 13, marginTop: 16 }}>
        {actual + 1} / {tarjetas.length}
      </p>
    </section>
  );
}

/* ════════════════════════════════════════════════
   COMPONENTE: Sobre mí
   ════════════════════════════════════════════════ */
function SobreMi() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const habilidades = [
    { nombre: "HTML", nivel: 85, color: "#f0883e" },
    { nombre: "CSS",  nivel: 75, color: "#58a6ff" },
    { nombre: "JavaScript", nivel: 65, color: "#f0e050" },
    { nombre: "React", nivel: 55, color: "#3fb950" },
  ];

  return (
    <section id="sobre-mi" style={{ padding: "80px 40px" }}>
      <TituloSeccion tag="SOBRE MÍ" titulo="¿Quién soy?" />

      <div style={{
        maxWidth: 700, margin: "40px auto 0",
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 16, padding: "36px",
      }}>
        {/* Avatar + datos */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          {/* Iniciales como avatar */}
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #58a6ff33, #3fb95033)",
            border: `2px solid ${C.accent}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, fontWeight: 800, color: C.accent,
            flexShrink: 0,
          }}>JG</div>

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 4 }}>
              Jostyn Fernando Garcia Vargas
            </h3>
            <span style={{
              display: "inline-block",
              background: "#3fb95022", border: "1px solid #3fb95044",
              borderRadius: 999, padding: "3px 12px",
              fontSize: 12, color: C.accentG, fontWeight: 600,
            }}>
              🎓 Ingeniería en Software
            </span>
          </div>
        </div>

        {/* Descripción */}
        <p style={{
          color: C.muted, fontSize: 15, lineHeight: 1.8,
          marginTop: 24, borderTop: `1px solid ${C.border}`, paddingTop: 20,
        }}>
          Soy estudiante de <strong style={{ color: C.text }}>Ingeniería en Software</strong>, 
          apasionado por el desarrollo web y la tecnología. Actualmente aprendiendo React 
          y JavaScript para construir aplicaciones modernas e interactivas.
        </p>

        {/* Botón mostrar habilidades */}
        <button
          onClick={() => setMostrarInfo(m => !m)}
          style={{
            marginTop: 20, background: "transparent",
            border: `1px solid ${C.accent}`, borderRadius: 8,
            padding: "9px 22px", color: C.accent,
            fontSize: 14, fontWeight: 600, cursor: "pointer",
            transition: "all .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = C.accent + "22"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
        >
          {mostrarInfo ? "▲ Ocultar habilidades" : "▼ Ver habilidades"}
        </button>

        {/* Barras de habilidades */}
        {mostrarInfo && (
          <div className="fade" style={{ marginTop: 24 }}>
            {habilidades.map(h => (
              <div key={h.nombre} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{h.nombre}</span>
                  <span style={{ fontSize: 13, color: C.muted }}>{h.nivel}%</span>
                </div>
                <div style={{
                  background: C.border, borderRadius: 99, height: 8, overflow: "hidden",
                }}>
                  <div style={{
                    width: `${h.nivel}%`, height: "100%",
                    background: h.color, borderRadius: 99,
                    transition: "width .8s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Util: encabezado de sección ─── */
function TituloSeccion({ tag, titulo }) {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
        color: C.accent, display: "block", marginBottom: 10,
      }}>{tag}</span>
      <h2 style={{
        fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
        fontWeight: 800, color: C.text,
      }}>{titulo}</h2>
    </div>
  );
}

/* ════════════════════════════════════════════════
   APP RAÍZ
   ════════════════════════════════════════════════ */
export default function App() {
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = base;
    document.head.appendChild(s);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Servicios />
      <Contador />
      <Carrusel />
      <Footer />
    </>
  );
}
