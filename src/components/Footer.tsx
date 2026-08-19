export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-light tracking-wide">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy & Legal</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
          <a href="#" className="hover:text-white transition-colors">Locations</a>
        </div>
        
        <div>
          <span className="opacity-50">Concept Project — Tesla Coffee (Frontend Assignment)</span>
        </div>
      </div>
    </footer>
  );
}
