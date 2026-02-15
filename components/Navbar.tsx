
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => scrollToSection('top')}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
              <span className="material-icons text-white text-2xl">biotech</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none text-white">VET<span className="text-primary">ATLAS</span></span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Bacteriology</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
              <button 
                onClick={() => scrollToSection('top')}
                className="px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all focus:bg-primary focus:shadow-lg focus:shadow-primary/25"
              >Home</button>
              <button 
                onClick={() => scrollToSection('curriculum-section')}
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >Modules</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center bg-white/5 rounded-full px-3 py-1 transition-all duration-300 ${showSearch ? 'w-48 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
              <input 
                type="text" 
                placeholder="Search Atlas..." 
                className="bg-transparent border-none text-xs text-white focus:ring-0 w-full"
              />
            </div>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${showSearch ? 'text-primary bg-primary/10' : 'text-slate-400 hover:text-primary hover:bg-white/5'}`}
            >
              <span className="material-icons">{showSearch ? 'close' : 'search'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
