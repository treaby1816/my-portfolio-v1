import React from 'react';
import { motion } from 'framer-motion';
import { Database, Award, Zap, ShieldCheck, Server } from 'lucide-react';
import actionShotImg from '../assets/action-shot.jpg';

// OFFICIAL LOGO IMPORTS
// We use .jpg for Python because your original file was a JPG.
import pythonLogo from '../assets/python.jpg'; 
import makeLogo from '../assets/make.png';
import zapierLogo from '../assets/zapier.png';
import n8nLogo from '../assets/n8n.png';

const About = () => {
  const techStack = [
    { title: "n8n", icon: <img src={n8nLogo} alt="n8n" className="w-8 h-8 object-contain" /> },
    { title: "Make", icon: <img src={makeLogo} alt="Make" className="w-8 h-8 object-contain" /> },
    { title: "Zapier", icon: <img src={zapierLogo} alt="Zapier" className="w-8 h-8 object-contain" /> },
    { title: "Python", icon: <img src={pythonLogo} alt="Python" className="w-8 h-8 object-contain" /> },
    { title: "SQL", icon: <Database className="text-blue-500 w-8 h-8" /> },
    { title: "Database", icon: <Server className="text-slate-400 w-8 h-8" /> }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* AUTHORITY BIO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 text-[#38bdf8] font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold">
              <ShieldCheck className="w-4 h-4" /> Professional Integrity
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 italic font-serif leading-tight">
              Architecting <span className="text-[#38bdf8]">Intelligence.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed mb-12">
              <p>
                I am <strong className="text-white text-xl md:text-2xl block mb-2">Adewole Felix Bamidele.</strong>
                With <strong>over 10 years of professional experience</strong> and <strong>5 years of core technical mastery</strong>, I serve as the bridge between legacy data and the autonomous future.
              </p>
              <p>
                My foundation is rooted in academic excellence—holding a <strong>Master’s Degree (2015)</strong>—and a decade-long commitment to operational precision. As a <strong>Solutions Architect</strong>, I engineer "Zero-Touch" business engines.
              </p>
            </div>

            {/* DYNAMIC EXPERIENCE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-slate-800/40 rounded-3xl border border-slate-800 flex items-center gap-4 transition-all shadow-xl"
              >
                 <Zap className="text-yellow-400 w-8 h-8" />
                 <div>
                   <p className="text-white font-bold text-2xl">10+ Years</p>
                   <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest leading-none mt-1">Professional Experience</p>
                 </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-slate-800/40 rounded-3xl border border-slate-800 flex items-center gap-4 transition-all shadow-xl"
              >
                 <Award className="text-[#38bdf8] w-8 h-8" />
                 <div>
                   <p className="text-white font-bold text-2xl">5+ Years</p>
                   <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest leading-none mt-1">Core Tech Mastery</p>
                 </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: PORTRAIT & RESPONSIVE TECH GRID */}
          <div className="space-y-10">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="relative rounded-[2.5rem] overflow-hidden border border-slate-700 shadow-2xl"
            >
               <img 
                 src={actionShotImg} 
                 alt="Adewole Felix Bamidele" 
                 className="w-full max-h-[500px] object-cover object-top transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-40" />
            </motion.div>

            {/* TECH GRID: Responsive for all devices */}
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-4">
               {techStack.map((skill, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ y: -10, backgroundColor: "rgba(30, 41, 59, 0.8)", borderColor: "#38bdf8" }}
                   className="p-4 bg-slate-800/20 rounded-2xl border border-slate-800 text-center flex flex-col items-center group transition-all"
                 >
                    <div className="mb-2 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white">
                      {skill.title}
                    </span>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;