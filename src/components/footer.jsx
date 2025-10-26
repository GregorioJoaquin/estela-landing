export default function Footer() {
  return (
    <footer className="border-t border-estela-dark/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Cabaña Avícola Estela Marina</p>
        <div className="text-estela-dark/70">Hecho con React + Tailwind</div>
      </div>
    </footer>
  );
}
