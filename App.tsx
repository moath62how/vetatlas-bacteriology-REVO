
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModuleModal from './components/ModuleModal';
import Background3D from './components/Background3D';
import { MODULES_DATA } from './constants';
import { ModuleCard } from './types';

const App: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleCard | null>(null);

  const handleCardClick = (module: ModuleCard) => {
    setSelectedModule(module);
  };

  const closeModal = () => {
    setSelectedModule(null);
  };

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white overflow-x-hidden bg-background-dark">
      {/* 3D Dynamic Background */}
      <Background3D />

      {/* Interactive Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] grid-bg"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 blur-[200px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow pt-20">
        <Hero />

        {/* Modules Section */}
        <section 
          id="curriculum-section"
          className="py-32 relative z-10 border-t border-white/5 bg-transparent scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="h-[2px] w-8 bg-primary"></div>
                   <p className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] font-black">Pathogenic Sub-Index</p>
                </div>
                <h3 className="text-5xl font-bold text-white tracking-tighter flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  </div>
                  Laboratory Database
                </h3>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex gap-3">
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono tracking-widest">04_ENTRIES_FOUND</div>
                  <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-[10px] text-primary font-black font-mono animate-pulse tracking-widest">SCAN_STATUS: ACTIVE</div>
                </div>
                <div className="text-[8px] text-slate-600 font-mono uppercase tracking-[0.3em]">Last Updated: 2026.05.21_14:30</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {MODULES_DATA.map((module) => (
                <div 
                  key={module.id}
                  onClick={() => handleCardClick(module)}
                  className="group glass-panel rounded-[2rem] p-0 overflow-hidden glass-panel-hover cursor-pointer relative flex flex-col h-full border-white/5"
                >
                  {/* High-Tech Corner Sugar */}
                  <div className="corner-accent corner-tl !w-6 !h-6 !opacity-20 group-hover:!opacity-80 group-hover:!scale-110"></div>
                  <div className="corner-accent corner-tr !w-6 !h-6 !opacity-20 group-hover:!opacity-80 group-hover:!scale-110"></div>
                  <div className="corner-accent corner-bl !w-6 !h-6 !opacity-20 group-hover:!opacity-80 group-hover:!scale-110"></div>
                  <div className="corner-accent corner-br !w-6 !h-6 !opacity-20 group-hover:!opacity-80 group-hover:!scale-110"></div>
                  
                  <div className="scanline"></div>
                  <div className="h-56 relative bg-slate-900 overflow-hidden">
                    <img 
                      alt={module.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-out" 
                      src={module.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className={`absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[9px] font-black tracking-[0.3em] uppercase ${module.colorClass}`}>
                      {module.category} / B-UNIT
                    </div>
                  </div>
                  
                  <div className="p-10 flex-grow flex flex-col relative bg-gradient-to-b from-white/[0.02] to-transparent">
                    <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary shadow-2xl group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-1000">
                      <span className="material-icons text-3xl">biotech</span>
                    </div>
                    
                    <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tighter chromatic-text">{module.title}</h4>
                    <p className="text-slate-400 text-sm mb-10 line-clamp-3 leading-relaxed flex-grow font-light opacity-70 group-hover:opacity-100 transition-opacity">
                      {module.description}
                    </p>
                    
                    {/* Animated Bio-Signal Sugar */}
                    <div className="mb-8 h-10 w-full opacity-20 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                      <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                        <path 
                          className="sparkline group-hover:stroke-secondary transition-colors" 
                          d="M0,10 L5,10 L8,2 L12,18 L15,10 L25,10 L28,5 L32,15 L35,10 L50,10 L53,0 L57,20 L60,10 L75,10 L78,8 L82,12 L85,10 L100,10" 
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <div className="flex items-center gap-4 text-[9px] text-slate-500 font-mono uppercase tracking-[0.2em]">
                         <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_10px_#0daf82] transition-all"></span>
                         {module.stats}
                      </div>
                      <div className="flex items-center gap-3 text-primary font-black text-[9px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
                        ACCESS_NODE <span className="material-icons text-sm">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Technical Footer */}
      <footer className="bg-background-dark/95 backdrop-blur-2xl border-t border-white/5 relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-secondary flex items-center justify-center shadow-2xl shadow-primary/20 rotate-3">
                  <span className="material-icons text-white text-4xl">biotech</span>
                </div>
                <div>
                  <span className="font-black text-4xl text-white tracking-tighter">VET<span className="text-primary">ATLAS</span></span>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-black">Digital Bio-Research Unit</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-xl font-light max-w-lg">
                The next generation of veterinary bacteriology education. Mapping the unseen world of pathogens with precision and scientific clarity.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer"><span className="material-icons text-sm">public</span></div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer"><span className="material-icons text-sm">mail</span></div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer"><span className="material-icons text-sm">share</span></div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-8">
                <h5 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
                   <span className="w-1 h-3 bg-primary"></span> NAV_INDEX
                </h5>
                <ul className="space-y-5 text-xs text-slate-400 font-medium tracking-wide">
                  <li><button onClick={() => scrollToSection('top')} className="hover:text-primary transition-colors flex items-center gap-3 group">
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary transition-colors"></span> Overview
                  </button></li>
                  <li><button onClick={() => scrollToSection('curriculum-section')} className="hover:text-primary transition-colors flex items-center gap-3 group">
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-primary transition-colors"></span> Pathogen Database
                  </button></li>
                </ul>
              </div>
              <div className="space-y-8">
                <h5 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
                   <span className="w-1 h-3 bg-secondary"></span> AFFILIATION
                </h5>
                <ul className="space-y-5 text-xs text-slate-400 font-medium tracking-wide">
                  <li className="text-slate-200 font-bold">Al-Arish University</li>
                  <li className="text-slate-500 opacity-60">Faculty of Veterinary Medicine</li>
                  <li className="text-slate-500 opacity-60">Department of Microbiology</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1 space-y-8">
                <h5 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
                   <span className="w-1 h-3 bg-emerald-500"></span> SCIENTIFIC TEAM
                </h5>
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-10"><span className="material-icons text-3xl">verified_user</span></div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-2 font-black">Lead Supervisor</p>
                  <p className="text-primary font-bold text-lg tracking-tight mb-4">Dr. Wafaa Ahmed</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-3 font-black">Research Staff</p>
                    <ul className="text-[11px] space-y-2 text-slate-300 font-medium">
                      <li className="flex items-center gap-2 group/name"><span className="w-1 h-1 bg-primary rounded-full group-hover/name:scale-150 transition-transform"></span> Mahmuud Refaat (REVO)</li>
                      <li className="flex items-center gap-2 group/name"><span className="w-1 h-1 bg-primary rounded-full group-hover/name:scale-150 transition-transform"></span> Nouran Khames</li>
                      <li className="flex items-center gap-2 group/name"><span className="w-1 h-1 bg-primary rounded-full group-hover/name:scale-150 transition-transform"></span> Yousef Ahmed</li>
                      <li className="flex items-center gap-2 group/name"><span className="w-1 h-1 bg-primary rounded-full group-hover/name:scale-150 transition-transform"></span> Nada Mohamed Anwer</li>
                      <li className="flex items-center gap-2 group/name"><span className="w-1 h-1 bg-primary rounded-full group-hover/name:scale-150 transition-transform"></span> Hana Musa</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 text-[9px] text-slate-600 font-mono">ID_VERIFIED_2026</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-slate-600 font-mono uppercase tracking-[0.4em] font-black">
            <div className="flex items-center gap-4">
               <span>© 2026 VetAtlas.edu</span>
               <span className="w-1 h-1 bg-white/20 rounded-full"></span>
               <span>All Rights Reserved</span>
            </div>
            <div className="flex gap-10">
              <span className="flex items-center gap-2 group cursor-help">
                <span className="material-icons text-[10px] text-primary">lock</span> 
                ENCR: <span className="text-slate-400">RSA_4096</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                LINK: <span className="text-emerald-500">ONLINE</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedModule && (
        <ModuleModal module={selectedModule} onClose={closeModal} />
      )}
    </div>
  );

  function scrollToSection(id: string) {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default App;
