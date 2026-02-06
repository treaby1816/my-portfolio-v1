import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Landmark, ShoppingBag, Database, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "AI Business Agents",
      icon: <Bot className="w-8 h-8 text-accent" />,
      description: "Developing intelligent n8n-powered agents that automate lead qualification and customer support 24/7.",
      skills: ["n8n", "AI Logic", "API Integration"]
    },
    {
      title: "Executive VA & Operations",
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      description: "Providing elite support for founders: Email/Calendar management, executive scheduling, and operational workflows.",
      skills: ["Executive Support", "Scheduling", "Inbox Mgmt"]
    },
    {
      title: "GovTech & Registry Systems",
      icon: <Landmark className="w-8 h-8 text-indigo-400" />,
      description: "Building secure, RBAC-protected digital registries to replace manual paper-based government bureaucracies.",
      skills: ["Digital Transformation", "Security", "RBAC"]
    },
    {
      title: "Headless E-commerce",
      icon: <ShoppingBag className="w-6 h-6 text-blue-400" />,
      description: "Engineering lightweight stores using Google Sheets as a backend to eliminate monthly platform fees.",
      skills: ["React", "Google Apps Script", "Paystack"]
    },
    {
      title: "Data Analytics & BI",
      icon: <Database className="w-6 h-6 text-green-400" />,
      description: "Cleaning and visualizing complex datasets to provide actionable business intelligence and KPI tracking.",
      skills: ["SQL", "Python", "Power BI", "Excel"]
    },
    {
      title: "Data Entry & Management",
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
      description: "Accurate, secure management of sensitive personnel records and administrative documentation.",
      skills: ["Accuracy", "Confidentiality", "Efficiency"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">The <span className="text-accent">Hybrid</span> Advantage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Blending enterprise-grade engineering with high-level executive support.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-accent transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span key={skill} className="text-[10px] bg-slate-900 text-gray-400 px-2 py-1 rounded border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;