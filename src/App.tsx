import './App.css';
import Header from './components/Header';
import MenuSelector from './components/MenuSelector';

export default function App() {
  return (
    <main className="relative min-h-screen flex flex-col items-center text-white overflow-hidden">
      {/* <div className="absolute -top-25 w-125 h-125 bg-[#C9A96E]/10 blur-[120px] rounded-full" /> */}

      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <Header />
        <MenuSelector />
      </div>
    </main>
  );
}
