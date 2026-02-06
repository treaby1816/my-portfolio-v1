import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ShoppingCart, 
  Cpu, 
  HeartPulse, 
  Users, 
  MessageSquare,
  Github
} from 'lucide-react';

// --- IMPORT YOUR IMAGES HERE ---
// Make sure these filenames match EXACTLY what is in your src/assets folder!
import serviceMattersImg from '../assets/service-matters-shot.jpg';
import treabynImg from '../assets/treabyn-mall-shot.jpg';
import aiOnboardingImg from '../assets/ai-onboarding-shot.jpg';
import medicalTriageImg from '../assets/medical-triage-shot.jpg';
import rccgImg from '../assets/church-db-shot.jpg';
import orderNotifierImg from '../assets/order-notifier-shot.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Service Matters Digitalization",
      role: "Solutions Architect",
      description: "A comprehensive digital transformation of the Service Matters Department for the Ondo State Civil Service, replacing manual bureaucracy with automated registry logic.",
      tech: ["AppSheet", "Process Automation"],
      icon: <ShieldCheck className="w-5 h-5 text-[#38bdf8]" />,
      // Using the imported variable
      image: serviceMattersImg,
      github: "https://github.com/treaby1816/ServiceMatters" 
    },
    {
      title: "Treabyn Global Mall",
      role: "Web Developer",
      description: "A high-performance headless e-commerce store built using Google Sheets as a real-time backend to manage inventory and real-time orders.",
      tech: ["React", "Google Sheets API"],
      icon: <ShoppingCart className="w-5 h-5 text-green-400" />,
      image: treabynImg,
      github: "https://github.com/treaby1816/treabyn-global-mall"
    },
    {
      title: "AI Client Onboarding Agent",
      role: "AI Automation Expert",
      description: "An n8n-powered intelligent intake engine built to automate lead scoring, folder provisioning, and client communication.",
      tech: ["n8n", "AI Logic"],
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      image: aiOnboardingImg,
      github: "https://github.com/treaby1816/ai-client-onboarding"
    },
    {
      title: "Medical Triage AI Agent",
      role: "Automation Engineer",
      description: "An automated patient intake system that uses AI logic to prioritize medical cases based on symptom severity and data inputs.",
      tech: ["n8n", "Conditional Logic"],
      icon: <HeartPulse className="w-5 h-5 text-red-400" />,
      image: medicalTriageImg,
      github: "https://github.com/treaby1816/medical-triage-agent"
    },
    {
      title: "RCCG Member Management",
      role: "Data Engineer",
      description: "Designing a centralized digital member database for RCCG Jesus House to streamline record-keeping and member identification.",
      tech: ["SQL", "Database Design"],
      icon: <Users className="w-5 h-5 text-blue-400" />,
      image: rccgImg,
      github: "https://github.com/treaby1816/rccg-member-db"
    },
    {
      title: "AI Order Notifier (Telegram/SMS)",
      role: "AI Automation Expert",
      description: "An intelligent notification engine that uses an AI brain to classify and route high-priority orders directly to Telegram and SMS for instant fulfillment.",
      tech: ["n8n", "Twilio API"],
      icon: <MessageSquare className="w-5 h-5 text-yellow-400" />,
      image: orderNotifierImg,
      github: "https://github.com/treaby1816/ai-order-notifier"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-[#0f172a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic font-serif">
            Case <span className="text-[#38bdf8]">Studies.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Visual proof of operational excellence—from government digitalization to AI-driven notification systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }} 
              viewport={{ once: true }}
              className="group bg-slate-800/20 rounded-[2rem] border border-slate-800 overflow-hidden flex flex-col hover:border-[#38bdf8]/40 hover:bg-slate-800/40 transition-all shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-slate-800">
                <img 
                  src={project.image} 
                  alt={`${project.title} Screenshot`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent" />
                
                {/* ACTIVE GITHUB LINK OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <a 
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-5 py-2 bg-[#38bdf8] text-slate-900 rounded-full font-bold flex items-center gap-2 scale-90 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-[#38bdf8]/20"
                   >
                      <Github size={18} /> View Blueprint
                   </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 text-[#38bdf8] group-hover:bg-[#0f172a] transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">
                    MrBami Signature
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold text-[#38bdf8]/70 uppercase tracking-widest mb-5">
                  {project.role}
                </p>
                
                <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900 text-[10px] font-mono text-gray-500 rounded-full border border-slate-800 group-hover:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;