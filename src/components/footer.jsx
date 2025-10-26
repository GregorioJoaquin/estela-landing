export default function Footer() {
  return (
    <footer className="border-t border-white/50 bg-estela-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm md:flex-row">
        <p className="font-serif text-base">© {new Date().getFullYear()} Cabaña Avícola Estela Marina</p>
        <div className="text-white/70">Hecho con React y un toque de Tailwind rural moderno.</div>
      </div>
    </footer>
  );
}
