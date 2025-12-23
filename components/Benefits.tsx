
import React from 'react';

const benefits = [
  { text: "Concept-based teaching", highlighted: true },
  { text: "Regular doubt-clearing sessions", highlighted: false },
  { text: "Practice exercises & tests", highlighted: false },
  { text: "Exam & board-oriented prep", highlighted: false },
  { text: "Live + recorded classes", highlighted: false },
  { text: "Revision sessions anytime", highlighted: false },
  { text: "Soft & Hard Copy Notes", highlighted: false },
  { text: "Weekly Progress Reports", highlighted: true },
];

const Benefits: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-20">
        <span className="text-amber-500 font-black tracking-widest uppercase text-xs">Our Features</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mt-2">What You'll Experience</h2>
        <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full shadow-lg shadow-amber-200"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, idx) => (
          <div 
            key={idx} 
            className={`glass p-8 rounded-[2rem] border border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 flex flex-col items-center text-center ${benefit.highlighted ? 'ring-2 ring-amber-400 ring-offset-4 ring-offset-slate-50' : ''}`}
          >
            <div className={`rounded-2xl p-4 mb-6 ${benefit.highlighted ? 'bg-amber-400 shadow-lg shadow-amber-200' : 'bg-[#1e3a5f]/5'}`}>
              <svg className={`w-6 h-6 ${benefit.highlighted ? 'text-[#1e3a5f]' : 'text-[#1e3a5f]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-black text-[#1e3a5f] leading-tight">{benefit.text}</h3>
            {benefit.highlighted && (
              <span className="mt-4 bg-[#1e3a5f] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Premium</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
