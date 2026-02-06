import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';
//
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f172a] pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-gray-300 font-medium tracking-widest uppercase">Available for Projects Globally</span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight min-h-[160px] md:min-h-[auto]">
              Hi, I'm a <br />
              <span className="text-[#38bdf8]">
                {/* */}
                <Typewriter
                  options={{
                    strings: ['Data Analyst', 'AI Automation Expert', 'Virtual Assistant', 'Solutions Architect'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              Building "Zero-Touch" business systems that bridge the gap between complex data and operational efficiency.
            </motion.p>

            {/* FIXED: Added href and changed to <a> tag for navigation */}
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-4 bg-[#38bdf8] text-slate-900 font-extrabold rounded-xl flex items-center gap-3 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              View Solutions <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <img 
                src={profileImg} 
                alt="Adewole Felix Bamidele" 
                className="rounded-3xl border-2 border-slate-700/50 shadow-2xl max-h-[520px] w-full object-cover object-top transition-all duration-700 group-hover:border-[#38bdf8]/50"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-[#0f172a]/95 backdrop-blur-md border border-[#38bdf8]/30 px-6 py-3 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform">
                 <p className="font-serif text-[#38bdf8] text-2xl italic tracking-widest">MrBami</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;