export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-20">
        <div className="h-full w-full bg-hero-field bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-estela-dark/80 via-estela-dark/60 to-estela-dark/20" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute -top-32 right-[-12%] h-80 w-80 -translate-y-8 rounded-full bg-estela-yellow/20 blur-3xl" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 text-white md:flex-row md:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-estela-yellow">Granja integral</span>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Tradición rural con tecnología que cuida cada ave.
          </h1>
          <p className="text-base leading-relaxed text-white/85 sm:text-lg">
            En Estela Marina abrazamos el ritmo del campo y lo potenciamos con sistemas inteligentes, bioseguridad permanente y un equipo comprometido con el bienestar animal.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#modulos"
              className="inline-flex items-center justify-center rounded-full bg-estela-yellow px-7 py-3 font-semibold text-estela-dark shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Conocer módulos
            </a>
            <a
              href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 font-medium text-white/90 transition hover:border-white hover:text-white"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 shadow-soft backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-estela-yellow">Nuestro enfoque</p>
          <p className="mt-3 font-serif text-2xl leading-snug">
            Calidad certificada, lotes trazados y un hábitat pensado para aves sanas y productivas.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm">
            <div className="rounded-2xl bg-white/10 px-4 py-5">
              <p className="text-3xl font-serif text-estela-yellow">+15</p>
              <p className="mt-1 text-white/75">Años de innovación</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-5">
              <p className="text-3xl font-serif text-estela-yellow">24/7</p>
              <p className="mt-1 text-white/75">Monitoreo productivo</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-5">
              <p className="text-3xl font-serif text-estela-yellow">100%</p>
              <p className="mt-1 text-white/75">Trazabilidad</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-5">
              <p className="text-3xl font-serif text-estela-yellow">Bio</p>
              <p className="mt-1 text-white/75">Protocolos activos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
