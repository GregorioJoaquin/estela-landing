export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-estela-dark/80 backdrop-blur text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold tracking-wide">
          Cabaña Avícola <span className="text-estela-yellow">Estela Marina</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#beneficios" className="hover:text-estela-yellow">Beneficios</a>
          <a href="#modulos" className="hover:text-estela-yellow">Módulos</a>
          <a href="#contacto" className="hover:text-estela-yellow">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex bg-estela-yellow text-estela-dark px-4 py-2 rounded-lg font-semibold hover:brightness-95"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
