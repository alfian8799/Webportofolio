import { useCallback, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Wrench,
  Layers,
  ExternalLink,

} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ProjectImageLightbox } from "../components/ProjectImageLightbox";
import { UXCaseStudy } from "../components/UXCaseStudy";
import { useLanguage, t } from "../context/LanguageContext";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const openImageViewer = useCallback((image) => {
    setSelectedImage(image);
  }, []);
  const closeImageViewer = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const project = projectsData[slug];

  // Helper Fallback Gambar Rusak / Tidak Ditemukan
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://placehold.co/1200x675/18181b/faf9f6?text=Image+Not+Found";
  };

  // Helper Ambil Teks Sesuai Bahasa (en/id)
  const getLocalizedText = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[lang] || field["id"] || field["en"] || "";
  };

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

  // Scope of Work List berdasarkan bahasa
  const scopeList = Array.isArray(project.scopeOfWork)
    ? project.scopeOfWork
    : project.scopeOfWork?.[lang] || project.scopeOfWork?.["id"] || [];

  // Ambil 2 proyek lain untuk rekomendasi
  const otherProjects = Object.entries(projectsData)
    .filter(
      ([key, item]) =>
        key !== slug && (!project?.uxCaseStudy || item.uxCaseStudy),
    )
    .slice(0, project?.uxCaseStudy ? 1 : 2);

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight dark:text-white mb-4">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light mb-4">
                {project.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] bg-[#ff4a22]/10 px-3 py-1 rounded-full font-bold">
                {project.role}
              </span>
              <span className="text-xs font-mono text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full">
                {project.year}
              </span>
              {project.category && (
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800/60 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
            </div>
          </FadeIn>
        </div>

        {/* 2. Banner Utama (Hero Image - Dinamis) */}
        <FadeIn delay={0.1}>
          <button
            type="button"
            onClick={() =>
              openImageViewer({
                src: project.image || "/images/placeholder.webp",
                alt: project.title,
              })
            }
            aria-label={
              lang === "en"
                ? `View ${project.title} image`
                : `Lihat gambar ${project.title}`
            }
            className="group relative mb-16 block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl text-left md:aspect-[21/9]"
          >
            <img
              src={project.image || "/images/placeholder.webp"}
              alt={project.title}
              onError={handleImageError}
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </button>
        </FadeIn>

        {project.uxCaseStudy ? (
          <UXCaseStudy project={project} onImageClick={openImageViewer} />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 mb-24">
              <div className="space-y-10">
                <FadeIn>
                  <section className="space-y-5">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                      {lang === "en" ? "Project Description" : "Deskripsi"}
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed text-lg">
                      {getLocalizedText(project.overview)}
                    </p>
                    {project.overviewDetail && (
                      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {getLocalizedText(project.overviewDetail)}
                      </p>
                    )}
                  </section>
                </FadeIn>
                {project.outcome && (
                  <FadeIn>
                    <section className="space-y-4 border-t border-zinc-200/70 pt-7 dark:border-zinc-800/70">
                      <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                        {lang === "en" ? "Results" : "Hasil"}
                      </h2>
                      <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed text-lg">
                        {getLocalizedText(project.outcome)}
                      </p>
                    </section>
                  </FadeIn>
                )}
              </div>

              <div className="space-y-10 lg:border-l lg:border-zinc-200/70 lg:dark:border-zinc-800/70 lg:pl-10">
                {scopeList.length > 0 && (
                  <FadeIn>
                    <section className="space-y-5">
                      <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        {t("projectDetail", "responsibilities", lang) || "Key Responsibilities"}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {scopeList.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#ff4a22] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </FadeIn>
                )}

                {project.stack && project.stack.length > 0 && (
                  <FadeIn>
                    <section className="space-y-5 border-t border-zinc-200/70 dark:border-zinc-800/70 pt-7">
                      <h2 className="text-xs font-mono uppercase tracking-widest text-[#ff4a22] font-semibold flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        {lang === "en" ? "Software & Tools" : "Software & Tools"}
                      </h2>
                      <ul className="flex flex-wrap gap-x-5 gap-y-3">
                        {project.stack.map((tool) => (
                          <li
                            key={tool}
                            className="text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        {project.demo && project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#ff4a22] hover:bg-[#e03d1a] rounded-full shadow-md shadow-[#ff4a22]/20 hover:shadow-lg hover:shadow-[#ff4a22]/35 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <span>{t("projectDetail", "liveDemo", lang) || "Live Demo"}</span>
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                        {project.repo && project.repo !== "#" && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#ff4a22] transition-colors"
                          >
                            <span>{t("projectDetail", "viewCode", lang) || "View Code"}</span>
                            <ExternalLink size={13} className="transition-transform duration-300 group-hover:scale-110" />
                          </a>
                        )}
                      </div>
                    </section>
                  </FadeIn>
                )}
              </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <FadeIn>
                <section className="space-y-7 mb-24">
                  <div className="flex items-end justify-between border-b border-zinc-200/70 dark:border-zinc-800/70 pb-4">
                    <h2 className="text-sm font-mono uppercase tracking-widest text-[#ff4a22] font-semibold">
                      {t("projectDetail", "galleryTag", lang) || "Showcase Gallery"}
                    </h2>
                    <span className="text-xs font-mono text-zinc-400">
                      {String(Math.min(project.gallery.length, 8)).padStart(2, "0")}{" "}
                      {t("projectDetail", "imagesWord", lang) || "Images"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-8 md:gap-12">
                    {project.gallery.slice(0, 8).map((imgUrl, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          openImageViewer({
                            src: imgUrl,
                            alt: `${project.title} showcase image ${i + 1}`,
                          })
                        }
                        aria-label={
                          lang === "en"
                            ? `View project image ${i + 1}`
                            : `Lihat gambar proyek ${i + 1}`
                        }
                        className="group block aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl text-left"
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} showcase image ${i + 1}`}
                          loading="lazy"
                          onError={handleImageError}
                          className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                        />
                      </button>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}
          </>
        )}

        {/* Animated Divider */}
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 mb-20 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-[#ff4a22] to-transparent"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Rekomendasi Proyek Terkait */}
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
                  className="group block transition-colors duration-300"
                >
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={p.image || "/images/placeholder.webp"}
                      alt={p.title}
                      loading="lazy"
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
        <ProjectImageLightbox
          key={selectedImage?.src || "closed"}
          image={selectedImage}
          lang={lang}
          onClose={closeImageViewer}
        />
      </div>
    </section>
  );
};

export default ProjectDetail;