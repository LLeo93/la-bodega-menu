export default function Header() {
  return (
    <header className="py-14 text-center max-w-xl">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#C9A96E] tracking-[0.12em]">
        La Bodega
      </h1>
      <p className="text-[10px] tracking-[0.4em] text-neutral-400 mt-2 uppercase">
        Coctelería
      </p>
      <div className="w-20 h-px bg-linear-to-r from-transparent via-[#C9A96E] to-transparent mx-auto my-6 opacity-70" />

      <p className="text-neutral-300 text-xs tracking-[0.3em] uppercase">
        Cócteles de autor, licores clásicos y un ambiente refinado.
      </p>
      <p className="text-xs text-neutral-400 uppercase tracking-widest mt-6">
        Selecciona tu menú
      </p>
    </header>
  );
}
