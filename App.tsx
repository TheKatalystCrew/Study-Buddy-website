
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Subjects from './components/Subjects';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import TrialModal from './components/TrialModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen relative selection:bg-amber-200 selection:text-[#1e3a5f]">
      <Header onBookTrial={toggleModal} />
      
      <main className="relative">
        <div id="home" className="pt-4">
          <Hero onBookTrial={toggleModal} />
        </div>
        
        <section id="benefits" className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Benefits />
          </div>
        </section>
        
        <section id="subjects" className="py-24 px-4">
          <Subjects />
        </section>
        
        <section id="why-us" className="py-24 px-4 overflow-hidden">
          <WhyChooseUs />
        </section>
      </main>

      <Footer />
      
      <Chatbot />

      {isModalOpen && <TrialModal onClose={toggleModal} />}
    </div>
  );
};

export default App;
