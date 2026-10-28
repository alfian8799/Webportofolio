import { useMemo, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { useLanguage, t } from "../context/LanguageContext";
import { projectsData } from "../data/projectsData";

const projects = Object.values(projectsData).filter(
  (project) => !project.uiUxPortfolio,
);

export const AllProjects = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const scaleImage = useTransform(scrollYProgress, [0.1, 0.5], [1.12, 1]);

  const filters = [
    { key: "All", label: lang === "en" ? "All" : "Semua" },
    { key: "Web", label: "Web" },
    { key: "app", label: "App" },
    { key: "game", label: "Game" },
  ];

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter(
            (p) =>
              p.category === active || p.keywords?.some((k) => k === active),
          ),
    [active],
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      {/* Section Header */}
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs font-mono font-bold tracking-widest uppercase mb-3 text-[#ff4a22]">
            {t("allProjects", "tag", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-[#faf9f6]">
            {t("allProjects", "title", lang)
              .split("")
              .map((char, i) =>
                char === "." || char === "?" ? (
                  <span key={i} className="text-[#ff4a22]">
                    {char}
                  </span>
                ) : (
                  char
                ),
              )}
          </h2>
        </div>
      </FadeIn>

      {/* Animated Divider Line */}
      <div className="h-px bg-zinc-200 dark:bg-zinc-800 mb-10 relative overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-transparent via-[#ff4a22] to-transparent"
          style={{ width: lineWidth }}
        />
      </div>

      {/* Filter Tabs & Counter */}
      <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                active === f.key
                  ? "bg-[#ff4a22] border-[#ff4a22] text-white shadow-md shadow-[#ff4a22]/20 font-semibold"
                  : "bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-[#ff4a22] hover:text-[#ff4a22]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
          {String(visible.length).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}{" "}
          {t("allProjects", "projectsWord", lang)}
        </p>
      </FadeIn>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((project, idx) => (
          <FadeIn
            key={project.slug || idx}
            delay={idx * 0.06}
            variant={idx % 2 === 0 ? "fade" : "slideRight"}
            className="h-full"
          >
            <Link
              to={project.slug ? `/projects/${project.slug}` : "#"}
              className="block h-full group"
            >
              {/* KOTAK PEMISAH (Card Wrapper Container) */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 group-hover:border-[#ff4a22]/40 dark:group-hover:border-[#ff4a22]/40 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#ff4a22]/5"
              >
                {/* Image Container with Floating Action Badge */}
                <div className="aspect-16/10 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-5 relative shadow-sm group-hover:shadow-lg transition-all duration-500 shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ scale: scaleImage }}
                    onError={(e) => (e.currentTarget.onerror = null)}
                  />

                  {/* Floating Action Badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    {/* <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white px-3.5 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/15 opacity-90 group-hover:opacity-100 group-hover:bg-[#ff4a22] group-hover:border-transparent transition-all duration-300 shadow-md">
                      {t("featuredProjects", "viewDetails", lang)}{" "}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span> */}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Editorial Meta Bar (Role | Year) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                        {project.role}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">|</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-[#faf9f6] group-hover:text-[#ff4a22] transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mt-2 mb-4">
                      {project.desc?.[lang] ?? project.desc}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5  mt-auto">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/50 px-2.5 py-1 rounded-md group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};