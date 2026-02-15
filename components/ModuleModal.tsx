
import React, { useState } from 'react';
import { ModalProps, SubSection } from '../types';

const ModuleModal: React.FC<ModalProps> = ({ module, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [activeSection, setActiveSection] = useState<SubSection | null>(null);

  if (!module) return null;

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    const saved = JSON.parse(localStorage.getItem('saved_modules') || '[]');
    if (!saved.includes(module.id)) {
      localStorage.setItem('saved_modules', JSON.stringify([...saved, module.id]));
    }
  };

  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return <br key={index} />;

      if (trimmedLine.startsWith('###')) {
        return (
          <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4 border-b border-primary/20 pb-2 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full"></span>
            {trimmedLine.replace('###', '').trim()}
          </h3>
        );
      }
      if (trimmedLine.startsWith('##')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-primary/30 pb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
            {trimmedLine.replace('##', '').trim()}
          </h2>
        );
      }

      if (trimmedLine === '---') {
        return <div key={index} className="my-6 border-t border-white/5" />;
      }

      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('✓') || trimmedLine.startsWith('✗') || /^\d\./.test(trimmedLine)) {
        let colorClass = "text-slate-300";
        if (trimmedLine.startsWith('✓')) colorClass = "text-primary";
        if (trimmedLine.startsWith('✗')) colorClass = "text-red-400";
        
        return (
          <div key={index} className={`ml-4 mb-2 flex items-start gap-2 ${colorClass}`}>
            <span className="material-icons mt-1 flex-shrink-0 text-[10px] opacity-70">
              {trimmedLine.startsWith('✓') ? 'check_circle' : (trimmedLine.startsWith('✗') ? 'cancel' : 'fiber_manual_record')}
            </span>
            <span className="leading-relaxed">
              {trimmedLine.replace(/^[•\-✓✗]|^\d\./, '').trim()}
            </span>
          </div>
        );
      }

      if (trimmedLine.startsWith('💡') || trimmedLine.startsWith('⚠️') || trimmedLine.startsWith('⚡') || trimmedLine.startsWith('🩺') || trimmedLine.startsWith('💊')) {
        return (
          <div key={index} className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-4 text-sm text-slate-200 backdrop-blur-sm">
             <div className="flex gap-3">
               <span className="flex-shrink-0">{trimmedLine.charAt(0)}</span>
               <span>{trimmedLine.substring(2)}</span>
             </div>
          </div>
        );
      }

      return (
        <p key={index} className="text-slate-300 mb-2 leading-relaxed">
          {trimmedLine}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background-dark/95 backdrop-blur-xl" 
        onClick={onClose}
      />
      <div className="relative glass-panel rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(13,175,130,0.15)] border-white/10 flex flex-col animate-[fadeIn_0.3s_ease-out]">
        <div className="scanline"></div>
        
        {/* Header/Image Section */}
        <div className="h-56 relative flex-shrink-0">
          <img 
            src={module.image} 
            alt={module.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent"></div>
          
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
            <div className={`bg-black/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 text-xs font-black tracking-[0.2em] uppercase ${module.colorClass}`}>
              {module.category} / B-CORE
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl flex items-center justify-center text-white hover:bg-red-500/80 transition-all border border-white/10 hover:scale-110"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          
          <div className="absolute bottom-6 left-8">
            <div className="flex items-center gap-4">
              {activeSection && (
                <button 
                  onClick={() => setActiveSection(null)}
                  className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/30 transition-all shadow-[0_0_15px_rgba(13,175,130,0.2)]"
                >
                  <span className="material-icons">arrow_back</span>
                </button>
              )}
              <div>
                <h2 className="text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                  {module.title}
                  {activeSection && <span className="text-primary font-light text-2xl opacity-80 select-none">/</span>}
                  {activeSection && <span className="text-primary font-medium text-2xl animate-[fadeIn_0.3s_ease-out]">{activeSection.title}</span>}
                </h2>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Status: <span className="text-primary">Verified Diagnostic</span></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Access: <span className="text-secondary">Level 3</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Scrollable */}
        <div className="flex-grow overflow-y-auto p-8 no-scrollbar bg-surface-dark/30 relative">
          <div className="max-w-3xl mx-auto">
            {activeSection ? (
              <div className="animate-[fadeIn_0.4s_ease-out] pb-10">
                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(activeSection.content)}
                </div>
                <div className="mt-12 flex justify-center">
                   <button 
                    onClick={() => setActiveSection(null)}
                    className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 flex items-center gap-2 text-xs transition-all uppercase tracking-widest"
                  >
                    <span className="material-icons text-sm">grid_view</span>
                    Return to Module Index
                  </button>
                </div>
              </div>
            ) : module.sections && module.sections.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[fadeIn_0.5s_ease-out] pb-10">
                {module.sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSection(section)}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 hover:translate-y-[-2px] transition-all text-left group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                       <span className="material-icons text-4xl">{section.icon}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-all">
                      <span className="material-icons">{section.icon}</span>
                    </div>
                    <div className="z-10">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">{section.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.2em] font-mono">Ref: B-SEC-{idx + 1}</p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="pb-10">
                <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                  <p className="text-xl text-slate-400 font-light italic leading-relaxed">
                    "{module.description}"
                  </p>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1">Module ID</span>
                    <span className="font-mono text-secondary text-sm">B-ATH-00{module.id}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(module.details || '')}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-surface-dark/90 backdrop-blur-2xl border-t border-white/10 flex gap-4 flex-shrink-0">
          <button 
            onClick={handleSave}
            className={`flex-1 py-4 rounded-xl border transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs ${
              isSaved 
                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(13,175,130,0.2)]' 
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="material-icons text-sm">{isSaved ? 'check' : 'bookmark'}</span>
            {isSaved ? 'Diagnostic Record Saved' : 'Archive to Research Atlas'}
          </button>
          <div className="hidden sm:flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-[10px] text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            SYNC: STABLE
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;
