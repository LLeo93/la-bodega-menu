import './App.css';
import Header from './components/Header';
import LanguageSwitcher from './components/LanguageSwitcher';
import MenuSelector from './components/MenuSelector';
import { useEffect } from 'react';
import * as m from './paraglide/messages';
import { getLocale } from './paraglide/runtime';
import Footer from './components/Footer';

export default function App() {
  const locale = getLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = m.seo_title();
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', m.seo_description());
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', m.seo_title());
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', m.seo_description());
    document
      .querySelector('meta[property="twitter:title"]')
      ?.setAttribute('content', m.seo_title());
  }, [locale]);
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <main className="flex-1 relative z-10 w-full flex flex-col items-center px-4">
        {/* <div className="absolute -top-25 w-125 h-125 bg-[#C9A96E]/10 blur-[120px] rounded-full" /> */}

        <div className="relative z-10 w-full flex flex-col items-center px-4">
          <Header />
          <LanguageSwitcher />
          <MenuSelector />
        </div>
        <Footer />
      </main>
    </div>
  );
}
