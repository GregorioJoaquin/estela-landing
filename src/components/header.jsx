export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#hero" className="site-header__brand">
          Cabaña Avícola <span>Estela Marina</span>
        </a>
        <nav className="site-header__nav">
          <a href="#beneficios" className="site-header__link">
            Beneficios
          </a>
          <a href="#modulos" className="site-header__link">
            Módulos
          </a>
          <a href="#contacto" className="site-header__link">
            Contacto
          </a>
        </nav>
        <a href="#contacto" className="site-header__cta">
          Contactar
        </a>
      </div>
    </header>
  );
}
