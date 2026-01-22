import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Bot } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const features = [
    {
      icon: <Users size={20} className="text-[#2B4B44]" />,
      title: "Scale value selling across the whole team – not just your top reps."
    },
    {
      icon: <TrendingUp size={20} className="text-[#80E0CC]" />,
      title: "Enable sellers to consistently uncover broader, larger customer issues to attack."
    },
    {
      icon: <Bot size={22} className="text-[#2B4B44]" />,
      title: "Turn AI from a novelty into a repeatable, revenue-generating workflow."
    }
  ];

  const accentColor = "#80E0CC";

  return (
    <section id="outcomes" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#020014]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-[#050707F2]/95 rounded-none lg:rounded-[48px] p-6 md:p-12 lg:p-20 border border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Left Column: The Main Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-black/40 backdrop-blur-sm rounded-[32px] p-10 lg:p-14 border border-[#6BBBAA] relative overflow-hidden group"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#80E0CC]/5 rounded-full blur-[80px] group-hover:bg-[#80E0CC]/10 transition-colors" />

            <div className="relative z-10 text-center lg:text-left">
              <span className="text-[#80E0CC] text-[13px] font-bold uppercase tracking-[0.1em] block mb-2">
                HIGHER WIN RATES. FASTER VELOCITY. BIGGER DEALS.
              </span>

              <h2 className="text-[36px] leading-[120%] font-bold mb-5 tracking-tight">
                Win With <br />
                <span className="text-gray-500">Value.</span>
              </h2>

              <div className="space-y-6 text-[#8D9190] text-[16px] leading-[1.5] font-normal">
                <p>
                  Sales teams win when they align to the customer’s view of value – early and often. This is true of any deal – whether it’s a new logo or a cross-sell/upsell opportunity in large accounts.
                </p>
                <p>
                  Make a repeatable process out of strategic intervention with customers from day one and make value your advantage
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature List */}
          <div className="flex-1 w-full space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-[24px] transition-all duration-300 bg-transparent border border-transparent hover:bg-[#80E0CC]/[0.03] hover:border-[#80E0CC]/15"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all bg-[#121816] border border-white/5 hover:bg-[#1B2421] hover:border-[#80E0CC]/30">
                  {feature.icon}
                </div>
                <p className="text-[16px] leading-[1.5] text-[#80E0CC] font-normal flex-1">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
