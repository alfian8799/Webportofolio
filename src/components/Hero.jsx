import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { siteData } from "../data/siteData";

export const Hero = () => {
  const { lang } = useLanguage();
  const hero = siteData.hero[lang];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-32"
    >
      <motion.div style={{ opacity, y: translateY }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <FadeIn>
              <div className="flex gap-12 text-sm font-medium text-zinc-800 dark:text-[#ff4a22]">
                <div>
                  <p>+ {hero.desc}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] dark:text-[#faf9f6]">
                {hero.title}
              </h1>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-black/10 dark:border-white/10 pt-8 mt-16"
            >
              <p className="text-xl ml-10 md:text-2xl font-light italic text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                {lang === 'en'
                  ? 'Applied Bachelor of Computer Science graduate with 2+ years of experience in building integrated web platforms using Laravel, React.js, and Express.js.'
                  : 'Lulusan Sarjana Terapan Ilmu Komputer dengan pengalaman 2+ tahun dalam membangun platform web terintegrasi menggunakan Laravel, React.js, dan Express.js.'}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-4/5 overflow-hidden bg-[#faf9f6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 z-10 group"
            >
              <img
                src={siteData.hero.image}
                alt="Alfian Zainul Arif Portrait"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#ff4a22]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
};
