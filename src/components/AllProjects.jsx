import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { projectsData } from "../data/projectsData";

const projects = Object.values(projectsData);

const filters = ["All", "Web App", "Front-End", "Backend"];

export const AllProjects = () => {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">
            /// All Projects ///
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-[#faf9f6]">
            The Full<br />Project Archive
          </h2>
        </div>
        <p className="max-w-md font-light italic text-zinc-600 dark:text-zinc-400 mt-6 md:mt-0 text-lg leading-relaxed">
          Katalog lengkap proyek: dari aplikasi full-stack hingga layanan
          backend dan antarmuka interaktif.
        </p>
      </FadeIn>

      <div className="h-px bg-black/10 dark:bg-white/10 mb-10 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#ff4a22] to-transparent"
          style={{ width: lineWidth }}
        />
      </div>

      <FadeIn className="flex flex-wrap items-center justify-between gap-6 mb-14">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                active === f
                  ? "bg-[#ff4a22] border-[#ff4a22] text-white"
                  : "bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-[#ff4a22] hover:text-[#ff4a22]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          {String(visible.length).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((project, idx) => (
          <FadeIn key={project.title} delay={idx * 0.08} variant="slide">
            <Link to={project.slug ? `/projects/${project.slug}` : '#'} className="block">
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group h-full flex flex-col bg-[#faf9f6] dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#ff4a22]/10 transition-all duration-500"
            >
              <div className="aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 text-white text-xs font-medium px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 hover:bg-[#ff4a22] transition-colors"
                    >
                      Live Demo <ArrowUpRight size={12} />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-white text-xs font-medium px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 hover:bg-black transition-colors"
                    >
                      Code <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/15">
                  {project.status}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-[#faf9f6] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {project.category} • {project.year}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/50 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
