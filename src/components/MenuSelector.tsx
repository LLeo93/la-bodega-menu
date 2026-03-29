import { CocktailIcon } from './CocktailIcon';
import { SpiritsIcon } from './SpiritsIcon';
import { useState } from 'react';

type Props = {
  onSelect: (menu: string) => void;
};

export default function MenuSelector({ onSelect }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSelect = (menu: string) => {
    setLoading(true);
    onSelect(menu);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {loading && (
        <div
          role="dialog"
          aria-live="polite"
          aria-busy="true"
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-40"
        >
          <span className="text-[#C9A96E] text-sm tracking-widest">
            Cargando menú...
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 mt-10 ">
        <button
          onClick={() => handleSelect('/Menu Cocktails.pdf')}
          className="cursor-pointer group relative w-72 p-8 rounded-2xl bg-linear-to-b from-[#1a1a1c] to-[#111112] border border-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500 shadow-lg hover:shadow-[#C9A96E]/10 hover:-translate-y-1"
          aria-label="Abrir menú de cócteles"
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[#C9A96E]/5 blur-xl " />

          <div className="relative z-10 flex flex-col items-center text-center ">
            <div className="text-4xl mb-4">
              <CocktailIcon />
            </div>

            <h2 className="text-2xl tracking-wide group-hover:text-[#C9A96E] transition">
              Cócteles
            </h2>

            <div className="w-10 h-px bg-neutral-700 my-3 group-hover:bg-[#C9A96E]" />

            <p className="text-xs text-neutral-300 tracking-wider uppercase">
              Clásicos y de Autor
            </p>
          </div>
        </button>

        <button
          onClick={() => handleSelect('/Menu Spirits.pdf')}
          className="cursor-pointer group relative w-72 p-8 rounded-2xl bg-linear-to-b from-[#1a1a1c] to-[#111112] border border-[#2a2a2c] hover:border-[#C9A96E] transition-all duration-500 shadow-lg hover:shadow-[#C9A96E]/10 hover:-translate-y-1"
          aria-label="Abrir menú de licores"
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[#C9A96E]/5 blur-xl" />

          <div className="relative z-10 flex flex-col items-center text-center ">
            <div className="text-4xl mb-4">
              <SpiritsIcon />
            </div>

            <h2 className="text-2xl tracking-wide group-hover:text-[#C9A96E] transition ">
              Licores
            </h2>

            <div className="w-10 h-px bg-neutral-700 my-3 group-hover:bg-[#C9A96E]" />

            <p className="text-xs text-neutral-300 tracking-wider uppercase">
              Selección Premium
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
