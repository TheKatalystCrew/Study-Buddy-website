
import React from 'react';

interface HeroProps {
  onBookTrial: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookTrial }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative glass-dark rounded-[3rem] overflow-hidden p-8 md:p-16 min-h-[600px] flex items-center shadow-2xl shadow-blue-900/30">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-2xl border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-white font-bold text-xs tracking-wider uppercase">Live Concept-Based Learning</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                Start Your <br />
                <span className="text-amber-400">Free week</span> ✨
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                Premium online classes for grades 5th to 12th. Experience learning that sticks with our 7-day trial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={onBookTrial}
                className="bg-amber-400 text-[#1e3a5f] hover:bg-amber-300 font-black px-12 py-5 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-400/20 active:scale-95"
              >
                Join Free Trial
              </button>
              <a 
                href="tel:9667240433"
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Premium Visual */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-amber-400/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" 
                alt="Student studying online" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-6 rounded-3xl">
                  <div className="flex items-center gap-5">
                    <div className="bg-amber-400 p-3 rounded-2xl shadow-lg">
                      <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#1e3a5f] font-black text-lg">Next Batch: Monday</p>
                      <p className="text-slate-600 font-bold text-sm">Limited seats for free trial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
