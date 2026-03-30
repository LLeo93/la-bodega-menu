import { CocktailIcon } from './CocktailIcon';
import { SpiritsIcon } from './SpiritsIcon';
import { useState } from 'react';
import * as m from '../paraglide/messages';

export default function MenuSelector() {
  const [loading, setLoading] = useState(false);

  const handleSelect = (menu: string) => {
    setLoading(true);
    window.open(menu, '_self', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {loading && (
        <div
          role="dialog"
          aria-modal="true"
          aria-live="polite"
          aria-busy="true"
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-40"
        >
          <span className="text-[#C9A96E] text-sm tracking-widest">
            {m.loading_menu()}
          </span>
        </div>
      )}

      <section className="flex flex-col md:flex-row gap-8 mt-10 ">
        <button
          onClick={() => handleSelect('/Menu Cocktails.pdf')}
          className="cursor-pointer group relative w-72 p-8 rounded-2xl bg-linear-to-b from-[#1a1a1c] to-[#111112] border border-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500 shadow-lg hover:shadow-[#C9A96E]/10 hover:-translate-y-1"
          aria-label={m.menu_cocktails_aria()}
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[#C9A96E]/5 blur-xl " />

          <div className="relative z-10 flex flex-col items-center text-center ">
            <div className="text-4xl mb-4">
              <CocktailIcon aria-hidden="true" />
            </div>

            <h2 className="text-2xl tracking-wide group-hover:text-[#C9A96E] transition">
              {m.menu_cocktails_title()}
            </h2>

            <div className="w-10 h-px bg-neutral-700 my-3 group-hover:bg-[#C9A96E]" />

            <p className="text-xs text-neutral-300 tracking-wider uppercase">
              {m.menu_cocktails_subtitle()}
            </p>
          </div>
        </button>

        <button
          onClick={() => handleSelect('/Menu Spirits.pdf')}
          className="cursor-pointer group relative w-72 p-8 rounded-2xl bg-linear-to-b from-[#1a1a1c] to-[#111112] border border-[#2a2a2c] hover:border-[#C9A96E] transition-all duration-500 shadow-lg hover:shadow-[#C9A96E]/10 hover:-translate-y-1"
          aria-label={m.menu_spirits_aria()}
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[#C9A96E]/5 blur-xl" />

          <div className="relative z-10 flex flex-col items-center text-center ">
            <div className="text-4xl mb-4">
              <SpiritsIcon aria-hidden="true" />
            </div>

            <h2 className="text-2xl tracking-wide group-hover:text-[#C9A96E] transition ">
              {m.menu_spirits_title()}
            </h2>

            <div className="w-10 h-px bg-neutral-700 my-3 group-hover:bg-[#C9A96E]" />

            <p className="text-xs text-neutral-300 tracking-wider uppercase">
              {m.menu_spirits_subtitle()}
            </p>
          </div>
        </button>
      </section>
    </>
  );
}
