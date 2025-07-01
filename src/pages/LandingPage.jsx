import React from "react";
import "./landing-page.css";   // ← importa los estilos dedicados

export default function LandingPage() {
  return (
    <section className="landing">
      {/* Hero centrado */}
      <div className="landing__hero">
        <h1 className="landing__title">
          ¡Bienvenido a <span className="landing__brand">Tu Panel</span>!
        </h1>
        <p className="landing__subtitle">
          Gestiona tu información de seguridad, dispositivos y mucho más desde
          un solo lugar.
        </p>

        <div className="landing__cta">
          <button className="btn btn--primary">Configurar seguridad</button>
          <button className="btn btn--outline">Ver dispositivos</button>
        </div>
      </div>

      {/* Footer pequeño */}
      <footer className="landing__footer">
        © 2025 Tu Empresa — Todos los derechos reservados
      </footer>
    </section>
  );
}
