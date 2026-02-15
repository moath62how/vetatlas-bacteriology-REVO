
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrambledTitle, setScrambledTitle] = useState("Bacteriology");
  const originalTitle = "Bacteriology";
  const chars = "!@#$%^&*()_+{}:\"<>?|1234567890ABCDEF";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledTitle(prev => 
        originalTitle
          .split("")
          .map((letter, index) => {
            if (index < iteration) return originalTitle[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= originalTitle.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollToCurriculum = () => {
    const section = document.getElementById('curriculum-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic DNA/Orb Rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[850px] h-[850px] rounded-full border border-primary/20 absolute animate-[spin_60s_linear_infinite]"></div>
        <div className="w-[650px] h-[650px] rounded-full border border-secondary/20 absolute animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="w-[450px] h-[450px] rounded-full border border-white/5 absolute"></div>
      </div>

      {/* Floating Animated DNA Strand Sugar */}
      <div className="absolute right-[5%] top-[20%] opacity-30 animate-pulse hidden xl:block pointer-events-none">
        <svg width="60" height="400" viewBox="0 0 60 400">
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <circle cx="10" cy={i * 20} r="3" fill="#0daf82">
                <animate attributeName="cx" values="10;50;10" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy={i * 20} r="3" fill="#06b6d4">
                <animate attributeName="cx" values="50;10;50" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
              </circle>
              <line y1={i * 20} y2={i * 20} stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                <animate attributeName="x1" values="10;50;10" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
                <animate attributeName="x2" values="50;10;50" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
              </line>
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex flex-col lg:flex-row items-center gap-4 mb-2">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              CORE_DATABASE_UPV_2.4.2
            </div>
            <div className="text-slate-500 font-mono text-[9px] uppercase tracking-widest hidden lg:block">
              Connection: <span className="text-emerald-500">SECURE_SSL</span>
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
            Veterinary <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary glitch-text" data-text={scrambledTitle}>
              {scrambledTitle}
            </span> <br/>
            Atlas
          </h1>

          <div className="space-y-6">
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              An immersive diagnostic frontier mapping the pathogens of the animal kingdom. 
              Verified research at your fingertips.
            </p>
            
            <div className="pt-6 border-l-2 border-primary/40 pl-6 lg:mx-0 mx-auto max-w-xl lg:max-w-none text-left bg-white/5 rounded-r-2xl p-4 border border-white/5 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.4em] text-secondary font-black mb-2 flex items-center gap-2">
                <span className="material-icons text-xs">school</span>
                Scientific Publication
              </p>
              <p className="text-sm text-slate-300 font-medium leading-relaxed italic opacity-80">
                A student-led research initiative at <span className="text-white border-b border-white/20">Al-Arish University</span>, 
                supervised by <span className="text-primary font-bold">Dr. Wafaa Ahmed</span>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
            <button 
              onClick={scrollToCurriculum}
              className="group relative px-10 py-5 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(13,175,130,0.3)] hover:shadow-[0_0_50px_rgba(13,175,130,0.5)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span className="flex items-center gap-3 relative z-10">
                <span className="material-icons text-xl group-hover:rotate-12 transition-transform">biotech</span>
                Initialize Modules
              </span>
            </button>
            <button className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
               Documentation
            </button>
          </div>
        </div>

        {/* Decorative Viewfinder UI */}
        <div className="relative hidden lg:block h-[650px] w-full">
           <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse opacity-20"></div>
           <div className="absolute -inset-10 border border-white/5 rounded-full animate-pulse delay-700 opacity-10"></div>
           
           {/* Microscope Frame Sugar */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border-2 border-primary/20 rounded-full flex items-center justify-center">
              <div className="w-[450px] h-[450px] border-2 border-dashed border-secondary/10 rounded-full animate-[spin_100s_linear_infinite]"></div>
              
              <img 
                alt="Bacterial Culture" 
                className="w-[400px] h-[400px] object-cover rounded-full opacity-80 mix-blend-screen animate-[pulse_6s_ease-in-out_infinite] grayscale brightness-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0j5A24VLgL405_iVRPLE60ZicI1zejjati8ep8f19S5FRxwG2jzwueoCkBoKgPaCfclZ-4f00U-UoHmHdCb-YoonCG6vHOyis-i-4aqbRGywZCWpESrEO4SENYblNFzlLhwuAA0W_7NMpXjp1WmV1YkHIug_mVAet4XAXihY1uCsWednlQMFBzOsguIeHC1kn7Hqllr_R2QZdZNp-xac9uUy4cIKm-AzsC6xRIwedEDnOXdPmN59aPz2G44WSdBBNGFQbbC2ot9yf"
              />
              
              {/* Floating ID Card Sugar */}
              <div className="absolute -top-10 -right-10 glass-panel p-6 rounded-2xl w-72 dna-float shadow-2xl border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-secondary font-black uppercase tracking-[0.3em]">REF: ANALYT_294</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 group">
                    <img 
                      alt="Brucella Culture" 
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform" 
                      src="https://images.unsplash.com/photo-1581093583449-8255a7d46e66?auto=format&fit=crop&q=80&w=1000"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-md font-bold tracking-tight">Brucella SPP.</h4>
                    <p className="text-slate-500 text-[10px] font-mono mt-1">G-NEG / COCCIBACILLI</p>
                    <div className="mt-2 w-full bg-white/5 rounded-full h-1 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary w-3/4 h-full rounded-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-600">
                   <span>MAGN: 40,000X</span>
                   <span className="text-primary">98.4% MATCH</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
