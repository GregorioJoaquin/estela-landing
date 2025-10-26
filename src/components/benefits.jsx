const items = [
  { icon: "🌱", title: "Sustentable", desc: "Usamos energías renovables para reducir huella ambiental." },
  { icon: "🦠", title: "Bioseguridad", desc: "Altas normas en cada proceso para proteger la salud del plantel." },
  { icon: "⚙️", title: "Tecnología", desc: "Gestión moderna y control de variables para mayor eficiencia." },
  { icon: "🥚", title: "Alimentación balanceada", desc: "Nutrición de calidad, rendimiento y bienestar animal." },
  { icon: "🔗", title: "Trazabilidad total", desc: "Registro lote a lote y mejora continua." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white/80 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-estela-dark sm:text-4xl">Beneficios de Estela Marina</h2>
          <p className="mt-3 text-estela-dark/70">
            Sustentabilidad, bioseguridad y tecnología al servicio de la calidad.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <div key={b.title} className="rounded-3xl bg-estela-beige/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-4 font-serif text-xl text-estela-dark">{b.title}</h3>
              <p className="mt-2 text-sm text-estela-dark/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
