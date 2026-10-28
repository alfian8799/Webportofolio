import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "../context/LanguageContext";
import {
  uiUxPortfolioContent,
  uiUxProjectsData,
} from "../data/uiUxProjectsData";

const uxProjects = [
  uiUxProjectsData.lokaway,
  uiUxProjectsData.noizumusic,
  uiUxProjectsData.elevatedsoles,
  uiUxProjectsData.belajarmengaji,
].filter(Boolean);

export const UXProjects = () => {
  const { lang } = useLanguage();
  const content = uiUxPortfolioContent[lang];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 pt-16 md:pt-24"
    >
      <FadeIn className="mb-12">
        <p className="text-xs font-mono font-bold tracking-widest uppercase mb-3 text-[#ff4a22]">
          {content.eyebrow}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-[#faf9f6]">
            {content.title}
            <span className="text-[#ff4a22]">.</span>
          </h1>
        
        </div>
      </FadeIn>

      <div className="h-px bg-zinc-200 dark:bg-zinc-800 mb-14 relative overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-transparent via-[#ff4a22] to-transparent"
          style={{ width: lineWidth }}
        />
      </div>

      <div className="space-y-14 md:space-y-20">
        {uxProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <Link
              to={`/projects/${project.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
            >
              <div
                className={`aspect-16/10 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 ${
                  index % 2 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className={index % 2 ? "md:order-1" : ""}>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
                  0{index + 1} <span className="mx-2 text-[#ff4a22]">/</span>
                  UI/UX Design <span className="mx-2">/</span> {project.year}
                </p>
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-[#ff4a22] transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-6 h-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h2>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  {project.subtitle}
                </p>
                <p className="mt-5 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {project.desc?.[lang] ?? project.desc}
                </p>
                <p className="mt-5 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {lang === "en" ? "TOOLS" : "TOOLS"}{" "}
                  <span className="ml-2 text-zinc-600 dark:text-zinc-300">
                    {project.stack.join(", ")}
                  </span>
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-20 " />
    </section>
  );
};
