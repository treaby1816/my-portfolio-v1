import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { motion } from 'framer-motion';

// Ensure this file exists in src/assets/sculpture.jpg
import sculptureImg from './assets/sculpture.jpg';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans selection:bg-[#38bdf8] selection:text-slate-900">
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative py-20 bg-[#020617] border-t border-slate-800/60 overflow-hidden">
        {/* Top Glow Border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          
          {/* MrBami Signature Seal */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 group cursor-pointer"
          >
            <img 
              src={sculptureImg} 
              alt="MrBami Signature Seal" 
              className="h-10 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
            /> 
          </motion.div>

          <div className="text-center space-y-6">
            {/* Quick Access Navigation */}
            <div className="flex flex-wrap justify-center gap-8 mb-4">
               {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                 <a 
                   key={item} 
                   href={`#${item.toLowerCase()}`} 
                   className="text-[10px] font-bold text-gray-500 hover:text-[#38bdf8] uppercase tracking-[0.3em] transition-colors"
                 >
                   {item}
                 </a>
               ))}
            </div>

            <div className="pt-8 border-t border-slate-900/50">
              <p className="text-gray-600 text-[11px] font-mono tracking-widest leading-relaxed uppercase">
                © {new Date().getFullYear()} Adewole Felix Bamidele. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#38bdf8]/5 blur-[80px] rounded-full -z-10" />
      </footer>
    </div>
  );
}

export default App;