import * as m from '../paraglide/messages';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 mt-auto border-t border-[#C9A96E]/10">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-[#C9A96E] text-xs tracking-widest uppercase mb-4">
          © {currentYear} La Bodega — {m.footer_rights()}
        </p>
        <div className="flex flex-col gap-1">
          <address className="text-[10px] text-neutral-400 tracking-wider not-italic uppercase">
            <p className="text-[10px] text-neutral-400 tracking-wider uppercase">
              Angelo Rossi • NIE: Y4277878F
            </p>
            Plaza Camilo José Cela 5, Benahavis, Málaga 29679
          </address>
        </div>
        <div className="mt-6 pt-4 border-t border-neutral-800/50 w-24 mx-auto" />
        <p className="text-[9px] text-neutral-400 tracking-tight mt-2 max-w-62.5 leading-relaxed">
          {m.footer_no_cookies()}
        </p>
      </div>
    </footer>
  );
}
