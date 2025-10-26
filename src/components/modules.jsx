const modules = [
  { title: "Recría", emoji: "🐣", desc: "Desarrollo y control de aves jóvenes con foco en sanidad y bienestar." },
  { title: "Alimentación", emoji: "🍽️", desc: "Nutrición eficiente y controlada según etapas y objetivos." },
  { title: "Bioseguridad", emoji: "🧯", desc: "Protocolos estrictos, planes sanitarios y control de accesos." },
  { title: "Seguimiento diario", emoji: "📊", desc: "Registro de postura, consumo, agua y mortalidad con trazabilidad." },
];

export default function Modules() {
  return (
    <section id="modulos" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Módulos de trabajo</h2>
        <p className="mt-2 text-center text-estela-dark/70">Organización clara para resultados consistentes.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(m => (
            <div key={m.title} className="rounded-2xl border border-estela-dark/10 bg-estela-beige p-6 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="text-4xl">{m.emoji}</div>
              <h3 className="mt-3 font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-estela-dark/80">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
