const modules = [
  { title: "Recría", emoji: "🐣", desc: "Desarrollo y control de aves jóvenes con foco en sanidad y bienestar." },
  { title: "Alimentación", emoji: "🍽️", desc: "Nutrición eficiente y controlada según etapas y objetivos." },
  { title: "Bioseguridad", emoji: "🦠", desc: "Protocolos estrictos, planes sanitarios y control de accesos." },
  { title: "Seguimiento diario", emoji: "📊", desc: "Registro de postura, consumo, agua y mortalidad con trazabilidad." },
];

export default function Modules() {
  return (
    <section id="modulos" className="modules">
      <div className="container">
        <div className="section__intro">
          <h2 className="section__title">Módulos de trabajo</h2>
          <p className="section__description">Organización clara para resultados consistentes.</p>
        </div>
        <div className="modules__grid">
          {modules.map((m) => (
            <div key={m.title} className="module-card">
              <div className="module-card__emoji">{m.emoji}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
