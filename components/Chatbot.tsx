
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../services/gemini';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hey! I'm your StudyBuddy AI. Ask me anything about our classes or trial process! ✨" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const response = await sendMessageToAI(input);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm having a bit of trouble. Call us instead!" }]);
    setIsLoading(false);
  };

  const renderText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
        return (
          <div key={i} className="flex items-start gap-3 mb-2 px-1">
            <span className="text-amber-500 font-black shrink-0 mt-1">●</span>
            <span className="font-medium text-slate-700">{trimmed.replace(/^[*|-]\s*/, '')}</span>
          </div>
        );
      }
      return <p key={i} className={`mb-3 last:mb-0 ${line.length > 50 ? 'leading-relaxed' : 'font-bold'}`}>{line}</p>;
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[80]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#1e3a5f] text-white w-16 h-16 rounded-[1.5rem] shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center group"
        >
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="glass w-[380px] md:w-[420px] h-[600px] rounded-[2.5rem] shadow-2xl flex flex-col border border-white/50 overflow-hidden animate-in slide-in-from-bottom-12 fade-in duration-500">
          <div className="bg-[#1e3a5f] p-6 text-white flex justify-between items-center px-8">
            <div className="flex items-center gap-4">
              <div className="bg-amber-400 p-2 rounded-xl shadow-lg shadow-amber-900/20">
                <svg className="w-6 h-6 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              </div>
              <div>
                <h3 className="font-black text-lg leading-none">Buddy AI</h3>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1 mt-1">
                  <span className="w-1 h-1 rounded-full bg-amber-400 animate-ping"></span>
                  Active Now
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-5 rounded-[1.5rem] text-sm shadow-sm transition-all duration-300 hover:shadow-md ${
                  m.role === 'user' 
                    ? 'bg-[#1e3a5f] text-white rounded-tr-none' 
                    : 'glass bg-white text-slate-800 rounded-tl-none border-white/80'
                }`}>
                  {renderText(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass bg-white p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white/50 border-t border-white/50">
            <div className="flex gap-3 glass-dark p-2 rounded-[1.5rem]">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Buddy AI..."
                className="flex-1 bg-transparent border-none rounded-xl px-4 py-2 text-sm text-white focus:ring-0 outline-none font-bold placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-amber-400 text-[#1e3a5f] p-3 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
