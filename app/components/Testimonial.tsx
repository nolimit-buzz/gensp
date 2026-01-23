import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Phil V.",
    role: "Sr. Director, Partner Growth",
    image: "/philip.png",
    quote: "We spent the past year experimenting with AI across multiple initiatives, and Gen SP was one of the only use cases we've seen that went beyond 'cool tech', driving improved execution and a documented impact on wins and efficiency across our team.",
    company: "Opentext"
  },
  {
    name: "Natalie B.",
    role: "GTM Leadership & Revenue Enablement ",
    image: "/natalie.png",
    quote: "As part of a global value-selling initiative, the Gen SP AI workspace gave our teams a practical platform to practice, refine, and anchor conversations around value. More than 1,600 sellers used it as part of our enablement rollout, and it helped reinforce the mindset we were aiming for — more thoughtful, customer-centered, and outcomes-driven.",
    company: "ZScaler"
  },
  {
    name: "Jason R.",
    role: "Fractional CSO & Business Strategist",
    image: "/jason.png",
    quote: "We’ve engaged Gen SP across several initiatives, most recently to support a growth and whitespace assessment for one of our largest accounts in the utility and water sector. Their AI workspace delivered precise insights that constructively challenged our team and clarified where real opportunity existed. It provided credible evidence we could use with stakeholders and helped shape a smarter, more defensible growth plan.",
    company: ""
  }
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b0f2d1] opacity-[0.02] rounded-full blur-[150px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-[36px] font-bold mb-8"
          >
            Customizable, <span className="text-white/40">not <br />off-the-shelf.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] font-normal! text-gray-400 space-y-6 max-w-md mx-auto lg:mx-0"
          >
            <p>Gen SP is a customizable platform that anchors on the principles of strong value selling. We'll partner together to configure a set of AI prompts based on your organization's thought leadership, full solution set, target customers, etc. to create value insights curated for your sellers.</p>
            <p>This platform can be leveraged across all value planning motions – from deal acceleration to account expansion. Ultimately, enabling all of your sellers to drive <span className="text-white font-normal">more transformational deals.</span></p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full flex flex-col justify-center mx-auto lg:mx-0"
        >
          <div className="absolute -top-10 -right-10 text-white/5 pointer-events-none">
            <Quote size={200} />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0a0c10] border border-white/10 p-8 lg:p-12 rounded-[30px] relative z-10 backdrop-blur-xl min-h-[480px] max-w-[500px] flex flex-col justify-between self-end"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
                  <img
                    src={testimonials[activeIndex].image}
                    className="w-16 h-16 rounded-full border-2 border-[#b0f2d1]/50 object-cover"
                    alt={testimonials[activeIndex].name}
                  />
                  <div>
                    <h4 className="font-bold text-[20px]">{testimonials[activeIndex].name}</h4>
                    <p className="text-[#414946] text-[12px] uppercase tracking-widest font-bold">
                      {testimonials[activeIndex].role}
                    </p>
                    {testimonials[activeIndex].company && <p className="text-[#b0f2d1] text-[14px] tracking-widest font-bold">
                      @{testimonials[activeIndex].company}
                    </p>}
                  </div>
                </div>

                <p className="text-[16px] font-medium leading-relaxed mb-10 text-gray-200 flex-grow">
                  "{testimonials[activeIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      width: activeIndex === idx ? 32 : 16,
                      backgroundColor: activeIndex === idx ? "#b0f2d1" : "rgba(255, 255, 255, 0.1)"
                    }}
                    className="h-1 rounded-full cursor-pointer"
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-[8px] border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#b0f2d1]/40 transition-all active:scale-90 cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-[8px] border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#b0f2d1]/40 transition-all active:scale-90 cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
