
import React from 'react';

const subjectCategories = [
  {
    title: "5th to 8th",
    desc: "Complete Foundation",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi"],
    icon: "📚"
  },
  {
    title: "9th & 10th",
    desc: "Board Excellence",
    subjects: ["Mathematics", "Science"],
    icon: "🔬"
  },
  {
    title: "11th & 12th",
    desc: "Science Stream",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: "🧪"
  },
  {
    title: "11th & 12th",
    desc: "Commerce Stream",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    icon: "📊"
  },
  {
    title: "11th & 12th",
    desc: "Humanities Stream",
    subjects: ["History", "Pol. Science", "Geography", "Economics"],
    icon: "🎨"
  }
];

const Subjects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <span className="text-amber-500 font-black tracking-widest uppercase text-xs">Academic Streams</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mt-2">Subjects We Master</h2>
        <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full shadow-lg shadow-amber-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjectCategories.map((cat, idx) => (
          <div key={idx} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e3a5f] to-amber-400 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative glass p-10 rounded-[2.5rem] h-full flex flex-col border border-white/50 transition-all duration-300 group-hover:-translate-y-1">
              <div className="text-5xl mb-6">{cat.icon}</div>
              <h3 className="text-2xl font-black text-[#1e3a5f] mb-2">{cat.title}</h3>
              <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-6">{cat.desc}</p>
              
              <div className="flex-1 space-y-3">
                {cat.subjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    {sub}
                  </div>
                ))}
              </div>
              
              <button className="mt-8 w-full py-4 rounded-2xl bg-[#1e3a5f]/5 text-[#1e3a5f] font-black text-sm hover:bg-[#1e3a5f] hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
