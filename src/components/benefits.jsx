const items = [
  { icon: "🌱", title: "Sustentable", desc: "Usamos energías renovables para reducir huella ambiental." },
  { icon: "🛡️", title: "Bioseguridad", desc: "Altas normas en cada proceso para proteger la salud del plantel." },
  { icon: "⚙️", title: "Tecnología", desc: "Gestión moderna y control de variables para mayor eficiencia." },
  { icon: "🥚", title: "Alimentación balanceada", desc: "Nutrición de calidad, rendimiento y bienestar animal." },
  { icon: "🔗", title: "Trazabilidad total", desc: "Registro lote a lote y mejora continua." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Beneficios de Estela Marina</h2>
        <p className="mt-2 text-center text-estela-dark/70">Sustentabilidad, bioseguridad y tecnología al servicio de la calidad.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(b => (
            <div key={b.title} className="rounded-xl bg-white shadow hover:shadow-lg transition-shadow p-6">
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-3 font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-estela-dark/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
