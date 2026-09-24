import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { t } from '../context/LanguageContext';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { q: t('faq', 'q1'), a: t('faq', 'a1') },
    { q: t('faq', 'q2'), a: t('faq', 'a2') },
    { q: t('faq', 'q3'), a: t('faq', 'a3') },
  ];

  return (
    <section className="max-w-250 mx-auto px-6 py-24">
      <FadeIn className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#ff4a22]">/// FAQ ///</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">{t('faq', 'title')}</h2>
      </FadeIn>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <motion.button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full text-left bg-[#faf9f6] dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#ff4a22]/20 dark:hover:border-[#ff4a22]/20 transition-all flex justify-between items-center cursor-pointer"
            >
              <span className="text-lg font-medium pr-8 dark:text-white">{faq.q}</span>
              <motion.span
                animate={{ rotate: openFaq === idx ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 bg-[#ff4a22] text-white p-2 rounded-full"
              >
                {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
              </motion.span>
            </motion.button>
            <AnimatePresence>
              {openFaq === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 font-light italic text-zinc-600 dark:text-zinc-400 leading-relaxed bg-[#faf9f6] dark:bg-zinc-900/50 rounded-b-2xl -mt-2 border border-t-0 border-black/5 dark:border-white/5">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
