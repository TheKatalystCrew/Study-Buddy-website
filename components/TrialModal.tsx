
import React, { useState } from 'react';

interface TrialModalProps {
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    phoneNumber: '',
    grade: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
    }, 8000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Intense blurring backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      ></div>

      <div className="relative glass w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/40">
        <div className="bg-[#1e3a5f] p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
             <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                <svg className="w-8 h-8 text-white/40 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
             </button>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tight">Claim Your Free Seat</h2>
            <p className="text-blue-200 font-bold mt-2 uppercase tracking-widest text-xs">7 Days of Premium Learning Access</p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="p-10">
          {submitted ? (
            <div className="text-center space-y-8 py-4">
              <div className="bg-amber-400 text-[#1e3a5f] p-6 rounded-[2rem] w-24 h-24 mx-auto flex items-center justify-center shadow-xl shadow-amber-200 animate-bounce">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-[#1e3a5f]">We've got you!</h3>
                <p className="text-slate-600 font-bold">
                  Your data is logged and being sent to <span className="text-[#1e3a5f]">jaggi91234@gmail.com</span>.
                </p>
              </div>

              <div className="bg-[#1e3a5f]/5 rounded-[2rem] border border-[#1e3a5f]/10 overflow-hidden">
                <div className="bg-[#1e3a5f]/10 px-6 py-3 text-[10px] font-black text-[#1e3a5f] uppercase tracking-widest text-left">
                  STUDENT DATA LOG
                </div>
                <div className="p-6">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ["S. No", "1"],
                        ["Student", formData.studentName],
                        ["Phone", formData.phoneNumber],
                        ["Grade", formData.grade],
                        ["Email", formData.email]
                      ].map(([label, val]) => (
                        <tr key={label}>
                          <td className="py-2 text-slate-400 font-bold uppercase text-[10px]">{label}</td>
                          <td className="py-2 font-black text-[#1e3a5f] text-right">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full bg-[#1e3a5f] text-white font-black py-5 rounded-[1.5rem] hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10"
              >
                Close & Explore
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-[#1e3a5f] mb-2 uppercase tracking-widest">Student Name</label>
                  <input required type="text" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-amber-100 outline-none transition-all font-bold" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#1e3a5f] mb-2 uppercase tracking-widest">Phone Number</label>
                  <input required type="tel" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-amber-100 outline-none transition-all font-bold" placeholder="Active Mobile" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-[#1e3a5f] mb-2 uppercase tracking-widest">Select Grade</label>
                  <select required value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-amber-100 outline-none transition-all font-bold appearance-none">
                    <option value="">Choose Class</option>
                    {[5,6,7,8,9,10,11,12].map(n => <option key={n} value={`${n}th Grade`}>{n}th Grade</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-[#1e3a5f] mb-2 uppercase tracking-widest">Email Address</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-4 focus:ring-amber-100 outline-none transition-all font-bold" placeholder="name@email.com" />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-amber-400 hover:bg-amber-300 text-[#1e3a5f] font-black py-6 rounded-[1.5rem] text-xl shadow-2xl shadow-amber-400/20 transition-all transform hover:scale-[1.02] active:scale-95">
                  Confirm Trial Registration
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                Data logged to jaggi91234@gmail.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrialModal;
