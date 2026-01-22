
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, RefreshCw, Layers, Bot, Send } from 'lucide-react';

const CoachSection: React.FC = () => {
  const pillars = [
    { label: 'Research', icon: <Search size={20} />, desc: 'Build on your understanding of the account. Go deeper and brainstorm value.' },
    { label: 'Create', icon: <PenTool size={20} />, desc: 'Generate new assets and artifacts to support your engagements.' },
    { label: 'Refine', icon: <RefreshCw size={20} />, desc: 'Tweak the value hypothesis, business case, or questioning.' },
    { label: 'Enrich', icon: <Layers size={20} />, desc: 'Add context based on inside knowledge. Upload value frameworks, decks, etc.' }
  ];

  return (
    <section id="meet-coach" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Coach: Your thought partner in <span className="text-white/40 italic">building, <br /> refining, and executing</span> your value strategy
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Business casing is a dynamic process. Coach helps sellers instantly tailor insights to the moment – whether prepping for an executive meeting or refining your business case.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pillars.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(176, 242, 209, 0.3)" }}
              className={`p-8 rounded-2xl border transition-all ${idx === 2 ? 'bg-[#b0f2d1]/5 border-[#b0f2d1]/30' : 'bg-white/5 border-white/5'}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${idx === 2 ? 'bg-[#b0f2d1] text-black' : 'text-[#b0f2d1] bg-[#b0f2d1]/10'}`}>
                {p.icon}
              </div>
              <h4 className={`text-xs font-black uppercase tracking-widest mb-3 ${idx === 2 ? 'text-white' : 'text-gray-500'}`}>{p.label}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Coach Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0c10] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-white/5 p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b0f2d1]/20 border border-[#b0f2d1]/40 flex items-center justify-center relative">
                <Bot size={20} className="text-[#b0f2d1]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#0a0c10] rounded-full"></div>
              </div>
              <div>
                <span className="block font-bold">Coach</span>
                <span className="text-[10px] text-[#b0f2d1] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b0f2d1] animate-pulse"></span> OPERATIONAL: RESEARCH
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-[#b0f2d1]"
                />
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="p-8 space-y-8 min-h-[400px] relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-1 bg-white/5 border border-white/5 p-6 rounded-2xl rounded-tl-none max-w-2xl">
                <p className="text-gray-300">Hello! I am your Value Selling Coach. Ask me questions or upload documents for me to guide you effectively.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-end gap-4"
            >
              <div className="bg-[#b0f2d1]/10 border border-[#b0f2d1]/30 p-6 rounded-2xl rounded-tr-none max-w-2xl shadow-lg">
                <p className="text-gray-200">Dive deeper into where Acme is currently spending to mitigate risk as it relates to their undergrounding initiatives...</p>
              </div>
            </motion.div>

            {/* Typing indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex gap-4 items-center"
            >
              <div className="bg-white/5 px-4 py-3 rounded-2xl flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#b0f2d1] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#b0f2d1] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#b0f2d1] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Coach is thinking...</span>
            </motion.div>

            {/* Input Bar Mockup */}
            <div className="absolute bottom-6 left-8 right-8">
              <div className="bg-white/5 border border-white/10 rounded-full p-2 pl-6 flex items-center gap-4">
                <input type="text" placeholder="Ask Coach anything..." className="bg-transparent border-none outline-none flex-1 text-sm text-gray-400" disabled />
                <button className="w-10 h-10 rounded-full bg-[#b0f2d1] text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachSection;
