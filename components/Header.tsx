
import React from 'react';

interface HeaderProps {
  onBookTrial: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookTrial }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass h-20 rounded-3xl px-6 md:px-10 flex justify-between items-center shadow-lg shadow-slate-200/50">
          {/* Logo */}
          <div 
            onClick={(e) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="bg-[#1e3a5f] p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-900/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#1e3a5f] leading-none tracking-tight">StudyBuddy</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#1e3a5f] font-extrabold opacity-70">Online Classes</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'subjects', label: 'Subjects' },
              { id: 'why-us', label: 'Why Us?' }
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-bold text-slate-600 hover:text-[#1e3a5f] transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1e3a5f] hover:after:w-full after:transition-all"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <button 
              onClick={onBookTrial}
              className="bg-[#1e3a5f] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 transform hover:-translate-y-1 active:scale-95"
            >
              Book Trial
            </button>
          </nav>

          {/* Mobile CTA only */}
          <div className="md:hidden">
            <button 
              onClick={onBookTrial}
              className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-2xl font-black text-xs shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
