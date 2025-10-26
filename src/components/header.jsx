export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-estela-dark/80 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-serif text-lg font-semibold tracking-wide">
          Cabaña Avícola <span className="text-estela-yellow">Estela Marina</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#beneficios" className="transition hover:text-estela-yellow">Beneficios</a>
          <a href="#modulos" className="transition hover:text-estela-yellow">Módulos</a>
          <a href="#contacto" className="transition hover:text-estela-yellow">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-full bg-estela-yellow px-5 py-2 text-sm font-semibold text-estela-dark shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
