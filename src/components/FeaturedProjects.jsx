import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const scaleImage = useTransform(scrollYProgress, [0.1, 0.5], [1.15, 1]);

  const featuredProjects = [
    { 
      title: "VinzCV", 
      category: "React.js • Express.js • MongoDB", 
      role: "Full-Stack Developer",
      year: "2026", 
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
      desc: "Built a resume builder web platform featuring real-time preview, PDF export, and interactive dashboard.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    { 
      title: "Vinz Movie", 
      category: "React.js • Vite • TMDB API", 
      role: "Front-End Developer",
      year: "2026", 
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
      desc: "Responsive movie database web application with real-time REST API integration for searching movies and TV shows.",
      tags: ["React", "Vite", "REST API"]
    },
    { 
      title: "VianKasir POS", 
      category: "Laravel • Filament PHP • MySQL", 
      role: "Full-Stack Developer",
      year: "2026", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      desc: "Modern point of sale and inventory management dashboard featuring detailed analytics widgets.",
      tags: ["Laravel", "Filament", "MySQL"]
    },
    { 
      title: "Game Dev Quest Board", 
      category: "HTML5 • CSS • JavaScript", 
      role: "Full Development",
      year: "2026", 
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      desc: "Interactive Kanban board application to track game production pipelines with a real-time gamified progress bar.",
      tags: ["HTML5", "CSS", "JavaScript"]
    },
    { 
      title: "Portfolio Platform", 
      category: "React • Vite • Tailwind", 
      role: "Front-End Developer",
      year: "2026", 
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
      desc: "Modern personal portfolio website featuring smooth scroll animations, dark mode, and responsive Swiss grid design.",
      tags: ["React", "Tailwind", "Framer Motion"]
    },
    { 
      title: "API Auth Service", 
      category: "Express.js • JWT • MongoDB", 
      role: "Backend Developer",
      year: "2025", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      desc: "Robust RESTful authentication service with secure JWT handling, refresh tokens, and role-based access control.",
      tags: ["Node.js", "JWT", "MongoDB"]
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="max-w-7xl mx-auto px-6 py-28">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">/// Featured Projects ///</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-[#faf9f6]">
            Projects That<br />Define My Craft
          </h2>
        </div>
        <p className="max-w-md font-light italic text-zinc-600 dark:text-zinc-400 mt-6 md:mt-0 text-lg leading-relaxed">
          A curated selection of primary web applications and technical solutions built with modern standards.
        </p>
      </FadeIn>

      {/* Animated divider */}
      <div className="h-px bg-black/10 dark:bg-white/10 mb-12 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#ff4a22] to-transparent"
          style={{ width: lineWidth }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14 mb-20">
        {featuredProjects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.08} variant={idx % 2 === 0 ? 'fade' : 'slideRight'}>
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6 relative shadow-md group-hover:shadow-2xl group-hover:shadow-[#ff4a22]/10 transition-all duration-500">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover origin-center"
                  style={{ scale: scaleImage }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium px-3.5 py-1.5 bg-black/40 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-mono italic text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{project.role}</p>
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 rounded-full px-3 py-1">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-[#faf9f6] group-hover:text-[#ff4a22] dark:group-hover:text-[#ff4a22] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mt-2">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/50 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-[#ff4a22] hover:bg-[#e03e1a] text-white px-8 py-4 rounded-full text-base font-medium transition-colors shadow-lg shadow-[#ff4a22]/20"
        >
          View All Projects <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
};
