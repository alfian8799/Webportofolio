import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Wrench, Layers } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const project = projectsData[slug];

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#fdfdfd] dark:bg-[#09090b]">
        <div className="text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {lang === "en" ? "Project Not Found" : "Proyek Tidak Ditemukan"}
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#ff4a22] font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to Projects" : "Kembali ke Proyek"}
          </Link>
        </div>
      </section>
    );
  }

  const otherProjects = Object.entries(projectsData)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 py-10 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Navigasi Kembali */}
        <FadeIn>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#ff4a22] dark:hover:text-[#ff4a22] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {lang === "en" ? "Back to Projects" : "Kembali ke Proyek"}
          </Link>
        </FadeIn>

        {/* 1. Hero Header */}
        <div className="mb-10">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] bg-[#ff4a22]/10 px-3 py-1 rounded-full font-bold">
                {project.role}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight dark:text-white mb-6">
              {project.title}
            </h1>
          </FadeIn>
        </div>

        {/* 2. Banner Utama */}
        <FadeIn delay={0.1}>
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-zinc-200/50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800/80 shadow-2xl mb-16 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </FadeIn>

        {/* 3. Tataletak Utama: Sticky Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Kiri: Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            <FadeIn>
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-8">
                
                {/* Tools & Tech Stack */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#ff4a22]" />
                    {lang === "en" ? "Tools & Stack" : "Alat & Teknologi"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack?.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/50 px-3 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

                {/* Scope of Work / Responsibilities */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#ff4a22]" />
                    {lang === "en" ? "Key Responsibilities" : "Tanggung Jawab"}
                  </h3>
                  <ul className="space-y-3">
                    {(project.scopeOfWork?.[lang] || project.scopeOfWork?.["id"] || project.scopeOfWork || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#ff4a22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>
          </aside>

          {/* Kanan: Content Flow */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* 01. Overview */}
            <FadeIn>
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                {lang === "en" ? "Overview" : "Ringkasan"}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold dark:text-white">
                  {lang === "en" ? "Project Overview" : "Ringkasan Proyek"}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
                  {project.overview?.[lang] || project.overview?.["id"] || project.overview}
                </p>
              </section>
            </FadeIn>

            {/* 02. Final Outcome */}
            <FadeIn>
              <section className="space-y-3 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                {lang === "en" ? "Results" : "Hasil Akhir"}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold dark:text-white">
                  {lang === "en" ? "Final Outcome" : "Hasil Akhir"}
                </h3>
                <div className="p-6 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80">
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.outcome?.[lang] || project.outcome?.["id"] || project.outcome}
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* 03. Showcase Gallery (1 Kolom Vertikal) */}
            {project.gallery && project.gallery.length > 0 && (
              <FadeIn>
                <section className="space-y-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                      Showcase Gallery
                    </h2>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.gallery.length} Images
                    </span>
                  </div>

                  {/* Layout 1 Kolom Kebawah */}
                  <div className="flex flex-col gap-8">
                    {project.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 shadow-md group"
                      >
                        <img
                          src={img}
                          alt={`${project.title} showcase mockup ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

          </main>
        </div>

        {/* Animated Divider */}
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 mb-20 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-[#ff4a22] to-transparent"
            style={{ width: lineWidth }}
          />
        </div>

        {/* 4. Rekomendasi Proyek Terkait */}
        <section>
          <FadeIn className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
              {lang === "en" ? "Related Projects" : "Proyek Terkait"}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map(([key, p], idx) => (
              <FadeIn key={key} delay={idx * 0.1}>
                <Link
                  to={`/projects/${key}`}
                  className="group block rounded-2xl p-4 bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#ff4a22]/50 transition-all duration-300"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-4 relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold dark:text-white group-hover:text-[#ff4a22] transition-colors flex items-center justify-between">
                    {p.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#ff4a22]" />
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                    {p.subtitle || p.role}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default ProjectDetail;