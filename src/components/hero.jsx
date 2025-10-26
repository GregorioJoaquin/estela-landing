export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-28">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520052205864-92d242b3a76d?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto max-w-5xl px-4 py-20 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Cabaña Avícola Estela Marina
        </h1>
        <p className="mt-2 text-lg italic text-estela-yellow">“La calidad es lo primero”</p>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90">
          Somos una granja avícola dedicada a la excelencia productiva, la innovación tecnológica y el bienestar animal.
          Nos destacamos por nuestra <b>seriedad</b>, <b>compromiso</b> y un trabajo constante enfocado en la <b>calidad</b> y la <b>sustentabilidad</b>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#modulos"
            className="inline-flex items-center justify-center rounded-lg bg-estela-yellow text-estela-dark font-semibold px-5 py-3 hover:brightness-95"
          >
            Ver módulos
          </a>
          <a
            href="https://wa.me/5490000000000?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/70 px-5 py-3 hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
