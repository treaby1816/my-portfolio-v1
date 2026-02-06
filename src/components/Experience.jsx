import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  // Data strictly from your Resume
  const experiences = [
    {
      role: "Lead AI Automation Engineer",
      company: "Freelance / Portfolio",
      location: "Remote",
      period: "Jan 2026 - Present",
      description: [
        "Executed a high-impact 30-Day AI Automation Challenge, deploying live agents for medical triage and lead scoring.",
        "Built comprehensive n8n workflows to demonstrate enterprise-level automation."
      ]
    },
    {
      role: "Full Stack Developer & Architect",
      company: "Treabyn Global Mall",
      location: "Remote",
      period: "Feb 2026 - Present",
      description: [
        "Engineered a lightweight, headless e-commerce platform using Vite + React.",
        "Architected a backend using Google Sheets API, allowing non-technical staff to manage inventory without a CMS."
      ]
    },
    {
      role: "Digital Transformation Consultant",
      company: "Ondo State Civil Service",
      location: "Ondo State / Hybrid",
      period: "Sep 2025 - Dec 2025",
      description: [
        "Spearheaded the digitization proposal for the Service Matters Department.",
        "Designed the roadmap to transition from paper files to a secure digital database for the Head of Service."
      ]
    },
    {
      role: "Data Analyst & Virtual Assistant",
      company: "Various Clients",
      location: "Remote / Abuja",
      period: "2015 - Present",
      description: [
        "Leveraged SQL and Python to clean and visualize complex datasets.",
        "Provided executive virtual assistance, including transcribing formal retirement notifications and calendar management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-700 hover:border-accent transition-colors group"
            >
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-accent transition-colors"></span>
              
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent" /> {exp.role}
                    </h3>
                    <h4 className="text-lg text-cyan-400 mt-1">{exp.company}</h4>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-sm text-gray-400 flex items-center justify-end gap-1">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center justify-end gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;