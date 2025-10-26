export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© {new Date().getFullYear()} Cabaña Avícola Estela Marina</p>
        <div className="site-footer__note">Hecho con React y un toque rural moderno.</div>
      </div>
    </footer>
  );
}
