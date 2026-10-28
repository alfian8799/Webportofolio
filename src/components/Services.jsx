import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { siteData } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export const Services = () => {
  const { lang } = useLanguage();
  const services = siteData.services;

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-28 ">
      <FadeIn className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">/// Expertise ///</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-white">What I Do?</h2>
        </div>
        <p className="max-w-md font-light italic text-zinc-500 dark:text-zinc-400 mt-6 md:mt-0 text-lg leading-relaxed">
          I build reliable software solutions, scalable web platforms, and coordinate technical engineering workflows.
        </p>
      </FadeIn>

      <div className="border-y border-black/10 dark:border-white/10 pt-6">
        {services.map((service, idx) => (
          <FadeIn key={idx} delay={0.08 * idx} variant="slide">
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-10 border-b border-black/10 dark:border-white/10 last:border-b-0 hover:bg-zinc-100/40 dark:hover:bg-zinc-900/40 transition-colors -mx-6 px-6 rounded-xl cursor-default"
            >
              <div className="md:col-span-1 text-sm text-zinc-400 dark:text-zinc-500 font-mono group-hover:text-[#ff4a22] transition-colors">{service.num}</div>
              <div className="md:col-span-3 flex items-start justify-between gap-4">
                <span className="text-2xl font-medium group-hover:text-black dark:group-hover:text-white transition-colors dark:text-zinc-200">{service.title[lang]}</span>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="hidden md:flex text-[#ff4a22]"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </div>
              <div className="md:col-span-3 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                {service.subs[lang].map((sub, i) => (
                  <p key={i} className="group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">— {sub}</p>
                ))}
              </div>
              <div className="md:col-span-5 font-light text-zinc-600 dark:text-zinc-400 leading-relaxed md:pr-12">
                {service.desc[lang]}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
