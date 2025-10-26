const modules = [
  { title: "Recría", emoji: "🐣", desc: "Desarrollo y control de aves jóvenes con foco en sanidad y bienestar." },
  { title: "Alimentación", emoji: "🍽️", desc: "Nutrición eficiente y controlada según etapas y objetivos." },
  { title: "Bioseguridad", emoji: "🧯", desc: "Protocolos estrictos, planes sanitarios y control de accesos." },
  { title: "Seguimiento diario", emoji: "📊", desc: "Registro de postura, consumo, agua y mortalidad con trazabilidad." },
];

export default function Modules() {
  return (
    <section id="modulos" className="bg-gradient-to-br from-estela-beige via-white to-estela-beige py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-estela-dark sm:text-4xl">Módulos de trabajo</h2>
          <p className="mt-3 text-estela-dark/70">Organización clara para resultados consistentes.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.title} className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/70 p-6 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">{m.emoji}</div>
              <h3 className="mt-4 font-serif text-xl text-estela-dark">{m.title}</h3>
              <p className="mt-2 text-sm text-estela-dark/75">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
