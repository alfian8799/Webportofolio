import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';
import { useLanguage, t } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';

export const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const scaleImage = useTransform(scrollYProgress, [0.1, 0.5], [1.12, 1]);

  const featuredProjects = [
    projectsData.lokaway,
    projectsData.noizumusic,
    projectsData.malamkelam,
    projectsData.questboard,
    projectsData.vinzcv,
    projectsData.viankasir,
  ].filter(Boolean);

  const { lang } = useLanguage();

  return (
    <section ref={sectionRef} id="projects" className="max-w-7xl mx-auto px-6 py-28">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-xs font-mono font-bold tracking-widest uppercase mb-3 text-[#ff4a22]">
            {t('featuredProjects', 'tag', lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-[#faf9f6]">
            {t("featuredProjects", "title", lang)
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

      {/* Animated divider */}
      <div className="h-px bg-zinc-200 dark:bg-zinc-800 mb-14 relative overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-transparent via-[#ff4a22] to-transparent"
          style={{ width: lineWidth }}
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20">
        {featuredProjects.map((project, idx) => (
          <FadeIn key={project.slug || idx} delay={idx * 0.08} variant={idx % 2 === 0 ? 'fade' : 'slideRight'}>
            <Link to={project.slug ? `/projects/${project.slug}` : '#'} className="block h-full group">
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full"
              >
                {/* Image Container with Floating Action Badge */}
                <div className="aspect-16/10 rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900/80 mb-5 relative shadow-sm group-hover:shadow-2xl group-hover:shadow-[#ff4a22]/10 transition-all duration-500">
                  <motion.img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover object-center origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ scale: scaleImage }}
                    onError={e => e.currentTarget.onerror = null}
                  />
                  
                  {/* Bottom-left floating badge (Ref image 1 style) */}
                  <div className="absolute bottom-4 left-4 z-10">
                    {/* <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/15 opacity-90 group-hover:opacity-100 group-hover:bg-[#ff4a22] group-hover:border-transparent transition-all duration-300 shadow-md">
                      {t('featuredProjects', 'viewDetails', lang)} <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 justify-between px-1">
                  <div>
                    {/* Editorial Meta Bar (Ref image 2 style: Category | Year) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">{project.role}</span>
                      <span className="text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-[#faf9f6] group-hover:text-[#ff4a22] transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed line-clamp-2 mt-2.5 mb-2">
                      {project.desc?.[lang] ?? project.desc}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
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

      {/* Bottom CTA Button */}
      <div className="flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-[#ff4a22] hover:bg-[#e03e1a] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-[#ff4a22]/20 hover:shadow-xl hover:shadow-[#ff4a22]/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          {t('featuredProjects', 'viewAll', lang)} <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
};