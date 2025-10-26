export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section__intro">
          <h2 className="section__title">Contacto</h2>
          <p className="section__description">Dejanos tu consulta y te respondemos a la brevedad.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Mensaje enviado! (demo)");
          }}
          className="contact__form"
        >
          <div className="contact__inputs">
            <input type="text" placeholder="Nombre" className="contact__control" required />
            <input type="email" placeholder="Correo" className="contact__control" required />
          </div>

          <textarea placeholder="Mensaje" rows={5} className="contact__control" required />

          <div className="contact__actions">
            <button type="submit" className="contact__submit">
              Enviar mensaje
            </button>

            <a
              href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="contact__whatsapp"
            >
              Continuar por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
