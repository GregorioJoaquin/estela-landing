const stats = [
  { label: "Años de innovación", value: "+15" },
  { label: "Monitoreo productivo", value: "24/7" },
  { label: "Trazabilidad", value: "100%" },
  { label: "Protocolos activos", value: "Bio" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
      </div>
      <div className="hero__highlight" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Granja integral</span>
          <h1 className="hero__title">Tradición rural con tecnología que cuida cada ave.</h1>
          <p className="hero__lead">
            En Estela Marina abrazamos el ritmo del campo y lo potenciamos con sistemas inteligentes, bioseguridad permanente y un
            equipo comprometido con el bienestar animal.
          </p>
          <div className="hero__actions">
            <a href="#modulos" className="button button--primary">
              Conocer módulos
            </a>
            <a
              href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <div className="hero__card">
          <p className="hero__eyebrow">Nuestro enfoque</p>
          <h3>Calidad certificada, lotes trazados y un hábitat pensado para aves sanas y productivas.</h3>
          <p>
            Cada módulo integra monitoreo, bioseguridad y bienestar animal para asegurar un crecimiento sostenible.
          </p>
          <div className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
