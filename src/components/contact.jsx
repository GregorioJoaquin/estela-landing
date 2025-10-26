export default function Contact() {
  return (
    <section id="contacto" className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Contacto
        </h2>
        <p className="mt-2 text-center text-estela-dark/70">
          Dejanos tu consulta y te respondemos a la brevedad.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Mensaje enviado! (demo)");
          }}
          className="mt-8 grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-lg border border-estela-dark/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-estela-yellow"
              required
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full rounded-lg border border-estela-dark/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-estela-yellow"
              required
            />
          </div>

          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full rounded-lg border border-estela-dark/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-estela-yellow"
            required
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-lg bg-estela-green text-white font-semibold px-6 py-3 hover:brightness-110"
            >
              Enviar
            </button>

            <a
              href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-lg border border-estela-dark/30 px-6 py-3 hover:bg-estela-dark/5"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
