export default function Contact() {
  return (
    <section id="contacto" className="bg-white/80 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-estela-dark sm:text-4xl">Contacto</h2>
          <p className="mt-3 text-estela-dark/70">Dejanos tu consulta y te respondemos a la brevedad.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Mensaje enviado! (demo)");
          }}
          className="mt-10 grid gap-4 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-2xl border border-estela-dark/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-estela-yellow focus:ring-2 focus:ring-estela-yellow/40"
              required
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full rounded-2xl border border-estela-dark/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-estela-yellow focus:ring-2 focus:ring-estela-yellow/40"
              required
            />
          </div>

          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full rounded-2xl border border-estela-dark/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-estela-yellow focus:ring-2 focus:ring-estela-yellow/40"
            required
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-full bg-estela-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Enviar mensaje
            </button>

            <a
              href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full border border-estela-dark/20 px-6 py-3 text-sm font-medium text-estela-dark transition hover:bg-estela-dark/5"
            >
              Continuar por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
