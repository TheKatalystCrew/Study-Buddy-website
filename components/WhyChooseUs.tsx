
import React from 'react';

const reasons = [
  "Personalized Concept-Based Teaching",
  "High-Engagement Zoom Classes",
  "Zero-Doubt Learning Environment",
  "24/7 Access to Recorded Lectures",
  "Weekly Adaptive Testing"
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="glass p-10 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-200 relative overflow-hidden border border-white">
        
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div>
              <span className="text-amber-500 font-black tracking-widest uppercase text-xs">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#1e3a5f] mt-4 leading-tight">
                Why Students <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500">Love Learning</span> <br /> With Us
              </h2>
            </div>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="bg-amber-400 p-2.5 rounded-2xl shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-slate-700 tracking-tight leading-7">{reason}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-2xl border-4 border-white shadow-lg" alt="Student" />
                ))}
              </div>
              <div>
                <p className="text-[#1e3a5f] font-black">Join 500+ Happy Students</p>
                <div className="flex text-amber-500">
                  {"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600" className="rounded-[2.5rem] shadow-2xl w-full h-64 object-cover" alt="Classroom" />
                  <div className="glass p-8 rounded-[2.5rem] border border-white">
                    <p className="text-slate-600 font-bold italic">"Concepts are finally clear!"</p>
                    <p className="mt-4 text-[#1e3a5f] font-black text-sm">- Grade 12 Science</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                   <div className="bg-[#1e3a5f] p-8 rounded-[2.5rem] shadow-2xl text-white">
                      <h4 className="text-4xl font-black text-amber-400">98%</h4>
                      <p className="font-bold text-sm mt-2">Satisfaction Rate Among Parents</p>
                   </div>
                   <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600" className="rounded-[2.5rem] shadow-2xl w-full h-64 object-cover" alt="Learning" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
