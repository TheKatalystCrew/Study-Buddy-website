
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black">StudyBuddy</h2>
            <p className="text-slate-300 max-w-xs mx-auto md:mx-0">
              Transforming the way students learn through live interactive sessions and concept-driven methodology.
            </p>
            <div className="pt-4 flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/studybuddy_classes?utm_source=qr&igsh=MXFrN2V2b3Z4YTdnOQ==" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-amber-400 hover:text-[#1e3a5f] transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                96672 40433
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                93118 20134
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                jaggi91234@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2 inline-block">Quick Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-slate-300 hover:text-amber-400 transition-colors">Course Benefits</a></li>
              <li><a href="#subjects" className="text-slate-300 hover:text-amber-400 transition-colors">Subjects Offered</a></li>
              <li><a href="#why-us" className="text-slate-300 hover:text-amber-400 transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} StudyBuddy Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
