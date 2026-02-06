import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Handle form submission logic here */
    setSubmitted(true);
    /* Reset form after 5 seconds */
    setTimeout(() => setSubmitted(false), 5000); 
  };

  return (
    <section id="contact" className="py-24 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">
            Let's <span className="text-[#38bdf8]">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to automate your operations or analyze your data? Reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Connection Details */}
          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-slate-900 transition-all duration-300 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Email</h3>
                <a href="mailto:felixadewole16@gmail.com" className="text-lg text-white hover:text-[#38bdf8] transition-colors font-medium">
                  felixadewole16@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-green-400 group-hover:bg-green-400 group-hover:text-slate-900 transition-all duration-300 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Me Directly</h3>
                <a href="tel:+2348065136221" className="text-lg text-white hover:text-green-400 transition-colors font-medium">
                  080-651-362-21
                </a>
              </div>
            </div>

            {/* LinkedIn Profiles */}
            <div className="pt-6">
              <h3 className="text-white font-bold mb-6 opacity-40 uppercase text-xs tracking-[0.3em]">Professional Networks</h3>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/felix-adewole-data-analyst" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] rounded-xl hover:bg-[#0077b5] hover:text-white transition-all w-fit font-bold shadow-sm"
                >
                  <Linkedin className="w-5 h-5" /> Data Analyst Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/felix-adewole-virtual-assistant" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] rounded-xl hover:bg-[#0077b5] hover:text-white transition-all w-fit font-bold shadow-sm"
                >
                  <Linkedin className="w-5 h-5" /> Virtual Assistant Profile
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form with Success State */}
          <div className="bg-slate-800/30 p-8 md:p-10 rounded-[2rem] border border-slate-700/50 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#38bdf8] transition-all" placeholder="Adewole Felix" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#38bdf8] transition-all" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea required rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#38bdf8] transition-all resize-none" placeholder="How can I help you automate?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#38bdf8] hover:bg-cyan-400 text-slate-900 font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/10 active:scale-95">
                    <Send className="w-5 h-5" /> Send Secure Message
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Message Received!</h3>
                  <p className="text-gray-400 max-w-[250px] mx-auto">
                    Thank you. I will personally review your request and get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Chat Widget */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://wa.me/2348065136221', '_blank')}
        className="fixed bottom-10 right-10 z-50 p-5 bg-[#38bdf8] text-slate-900 rounded-full shadow-2xl shadow-cyan-500/40 cursor-pointer group"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0f172a] animate-pulse"></span>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
          Chat with me
        </span>
      </motion.button>
    </section>
  );
};

export default Contact;