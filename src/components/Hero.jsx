import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { useLanguage, t } from "../context/LanguageContext";
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
      className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-28 md:px-10 md:pt-36 lg:px-12 lg:pb-32"
    >
      <motion.div style={{ opacity, y: translateY }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="space-y-7 lg:col-span-7 lg:space-y-8">
            <FadeIn delay={0.05}>
              <p className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm font-bold leading-relaxed text-[#ff4a22] md:text-base">
                {hero.roleLine.split(" + ").map((role, index) => (
                  <span key={role} className="inline-flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">+</span>}
                    {role}
                  </span>
                ))}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="max-w-[14ch] text-[clamp(3.25rem,7.2vw,6.75rem)] font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 dark:text-[#faf9f6]">
                {hero.title.split("").map((char, i) =>
                  char === "," || char === "." ? (
                    <span key={i} className="text-[#ff4a22]">
                      {char}
                    </span>
                  ) : (
                    char
                  ),
                )}
              </h1>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="mt-10 border-t border-zinc-200/80 pt-6 dark:border-white/10 sm:mt-12 sm:pt-8"
            >
              <p className="max-w-xl text-base font-light italic leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl">
                {lang === "en"
                  ? "Applied Bachelor of Computer Science graduate with 2+ years of experience in building integrated web platforms using React.js, and Express.js."
                  : "Menggabungkan estetika desain dan logika pemrograman untuk menghadirkan solusi digital menyeluruh mulai dari wireframe UI/UX, fungsionalitas web, hingga pengembangan gim."}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff4a22] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#ff4a22]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e03e1a] hover:shadow-xl hover:shadow-[#ff4a22]/30 active:translate-y-0"
              >
                {t("featuredProjects", "viewAll", lang)}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.25}
            className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-300 bg-[#faf9f6] shadow-xl shadow-zinc-950/5 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/20"
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
