type Props = {
  file: string;
  onClose: () => void;
};

export default function PdfViewer({ file, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <button
          onClick={onClose}
          className="text-sm text-neutral-300 hover:text-[#C9A96E] transition tracking-wide"
          aria-label="Chiudi menu"
        >
          ← Back
        </button>

        <div className="text-xs tracking-widest text-neutral-500 uppercase">
          Menu
        </div>

        <a
          href={file}
          target="_blank"
          className="text-sm text-[#C9A96E] hover:opacity-80"
        >
          Open PDF
        </a>
      </div>

      <iframe src={file} className="flex-1 w-full" title="Menu PDF" />
    </div>
  );
}
