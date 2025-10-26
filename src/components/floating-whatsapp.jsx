export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5493456552786?text=Hola%20Estela%20Marina%2C%20quisiera%20hacer%20una%20consulta"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white shadow-lg shadow-[#1d7a45]/40 transition hover:-translate-y-0.5 hover:shadow-xl"
      aria-label="Abrir chat de WhatsApp"
    >
      <svg
        className="h-5 w-5 transition-transform group-hover:scale-110"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 3C9.397 3 4 8.397 4 15c0 2.168.577 4.235 1.672 6.08L4 29l8.154-1.62A11.85 11.85 0 0 0 16 27c6.603 0 12-5.397 12-12S22.603 3 16 3Zm0 21.6c-1.616 0-3.197-.43-4.58-1.245l-.328-.193-4.853.965.997-4.697-.212-.343A9.34 9.34 0 0 1 6.6 15c0-5.182 4.218-9.4 9.4-9.4 5.182 0 9.4 4.218 9.4 9.4 0 5.182-4.218 9.4-9.4 9.4Zm5.093-6.418c-.278-.14-1.651-.812-1.908-.904-.257-.093-.444-.14-.63.14-.186.28-.722.903-.885 1.09-.163.186-.325.21-.603.07-.278-.14-1.178-.434-2.244-1.382-.83-.739-1.39-1.652-1.552-1.93-.163-.279-.017-.429.123-.57.127-.126.278-.326.417-.488.139-.163.186-.279.279-.465.093-.186.046-.35-.023-.488-.07-.14-.63-1.519-.863-2.08-.227-.545-.458-.472-.63-.48l-.538-.01c-.186 0-.488.07-.743.35-.257.28-.975.953-.975 2.322 0 1.37.999 2.693 1.138 2.879.14.186 1.967 3.006 4.77 4.214.667.288 1.19.46 1.595.588.67.213 1.28.183 1.762.111.537-.08 1.651-.675 1.886-1.329.233-.651.233-1.21.163-1.328-.069-.116-.257-.186-.535-.325Z" />
      </svg>
      <span className="text-sm">Escribinos</span>
    </a>
  );
}
