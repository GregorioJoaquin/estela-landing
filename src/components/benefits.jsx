const items = [
  { icon: "🌱", title: "Sustentable", desc: "Usamos energías renovables para reducir huella ambiental." },
  { icon: "🦠", title: "Bioseguridad", desc: "Altas normas en cada proceso para proteger la salud del plantel." },
  { icon: "⚙️", title: "Tecnología", desc: "Gestión moderna y control de variables para mayor eficiencia." },
  { icon: "🥚", title: "Alimentación balanceada", desc: "Nutrición de calidad, rendimiento y bienestar animal." },
  { icon: "🔗", title: "Trazabilidad total", desc: "Registro lote a lote y mejora continua." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section section-light">
      <div className="container">
        <div className="section__intro">
          <h2 className="section__title">Beneficios de Estela Marina</h2>
          <p className="section__description">Sustentabilidad, bioseguridad y tecnología al servicio de la calidad.</p>
        </div>
        <div className="benefits__grid">
          {items.map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="benefit-card__icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
