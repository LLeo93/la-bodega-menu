import { setLocale, getLocale, locales } from '../paraglide/runtime';
export default function LanguageSwitcher() {
  const currentLocale = getLocale();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-4 items-center bg-black/20 backdrop-blur-sm p-2 rounded-lg">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
            currentLocale === l
              ? 'text-[#C9A96E] border-b border-[#C9A96E] pb-1'
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          {l === 'es' ? 'Español' : 'English'}
        </button>
      ))}
    </div>
  );
}
