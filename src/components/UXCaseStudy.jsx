import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useLanguage, t } from "../context/LanguageContext";

const localized = (content, lang) => {
  if (typeof content === "string") return content;
  return content?.[lang] || content?.id || content?.en || "";
};

export const UXCaseStudy = ({ project, onImageClick }) => {
  const { lang } = useLanguage();
  const caseStudy = project.uxCaseStudy;

  return (
    <div className="mb-24">
      <FadeIn>
        <div className="mb-8 flex items-center justify-between border-b border-zinc-200/70 pb-4 dark:border-zinc-800/70">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4a22]">
            {lang === "en" ? "UI/UX Design Case Study" : "Studi Kasus Desain UI/UX"}
          </p>
          <span className="text-xs font-mono text-zinc-400">
            {localized(caseStudy.period, lang) || project.year}
          </span>
        </div>
      </FadeIn>

      <div>
        {caseStudy.sections.map((section, index) => (
          <FadeIn key={localized(section.heading, lang)} delay={index * 0.04}>
            <section className="grid grid-cols-1 gap-4 border-b border-zinc-200/70 py-7 dark:border-zinc-800/70 md:grid-cols-12 md:gap-8 md:py-9">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100 md:col-span-3">
                {localized(section.heading, lang)}
              </h2>
              <div className="space-y-4 md:col-span-9">
                {section.body && (
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
                    {localized(section.body, lang)}
                  </p>
                )}
                {section.paragraphs?.[lang] && (
                  <div className="space-y-4">
                    {section.paragraphs[lang].map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ff4a22]" />
                        <span>{localized(item, lang)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>

      {caseStudy.process?.length > 0 && (
        <section className="py-12 md:py-16">
          <FadeIn>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4a22]">
                  {lang === "en" ? "Design Process" : "Proses Desain"}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
                  {lang === "en" ? "From research to prototype" : "Dari riset hingga prototipe"}
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {String(caseStudy.process.length).padStart(2, "0")}{" "}
                {lang === "en" ? "STEPS" : "TAHAP"}
              </span>
            </div>
          </FadeIn>

          <ol className="space-y-8">
            {caseStudy.process.map((step, index) => (
              <FadeIn key={localized(step.heading, lang)} delay={index * 0.03}>
                <li className="border-t border-zinc-200/70 pt-6 dark:border-zinc-800/70">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="pt-0.5 text-xs font-mono text-[#ff4a22]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {localized(step.heading, lang)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {localized(step.body, lang)}
                      </p>
                      {step.items && (
                        <ul className="mt-3 space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff4a22]" />
                              <span>{localized(item, lang)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.resource && (
                        <a
                          href={step.resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#ff4a22] hover:underline"
                        >
                          {localized(step.resource.label, lang)}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onImageClick({
                        src:
                          step.image ||
                          project.gallery?.[index % project.gallery.length] ||
                          project.image,
                        alt: `${localized(step.heading, lang)} — ${project.title}`,
                      })
                    }
                    aria-label={
                      lang === "en"
                        ? `View image: ${localized(step.heading, lang)}`
                        : `Lihat gambar: ${localized(step.heading, lang)}`
                    }
                    className="group mt-6 block w-full cursor-zoom-in overflow-hidden rounded-2xl text-left"
                  >
                    <img
                      src={
                        step.image ||
                        project.gallery?.[index % project.gallery.length] ||
                        project.image
                      }
                      alt={`${localized(step.heading, lang)} — ${project.title}`}
                      loading="lazy"
                      className="h-auto w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <span className="mt-2 block text-right text-xs text-zinc-500 transition-colors group-hover:text-[#ff4a22]">
                      {lang === "en"
                        ? "Click to enlarge"
                        : "Klik untuk memperbesar"}
                    </span>
                  </button>
                </li>
              </FadeIn>
            ))}
          </ol>
        </section>
      )}

      <div className="grid grid-cols-1 gap-10 border-t border-zinc-200/70 py-9 dark:border-zinc-800/70 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <section>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4a22]">
              {lang === "en" ? "Outcome" : "Kesimpulan"}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {localized(caseStudy.conclusion, lang)}
            </p>
          </section>
        </FadeIn>
        <FadeIn delay={0.08}>
          <section>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4a22]">
              {lang === "en" ? "Lessons Learned" : "Pelajaran"}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {localized(caseStudy.lessonLearned, lang)}
            </p>
          </section>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="flex flex-wrap items-center justify-between gap-5 border-y border-zinc-200/70 py-6 dark:border-zinc-800/70">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.stack.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ff4a22] px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-md shadow-[#ff4a22]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e03d1a] hover:shadow-lg hover:shadow-[#ff4a22]/30"
            >
              {t("projectDetail", "liveDemo", lang) || "Live Demo"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </FadeIn>

      {/* {project.gallery?.length > 0 && (
        <section className="mt-16 space-y-8">
          <FadeIn>
            <div className="flex items-end justify-between border-b border-zinc-200/70 pb-4 dark:border-zinc-800/70">
              <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#ff4a22]">
                {lang === "en" ? "Interface Gallery" : "Galeri Antarmuka"}
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                {String(Math.min(project.gallery.length, 8)).padStart(2, "0")}{" "}
                {lang === "en" ? "SCREENS" : "LAYAR"}
              </span>
            </div>
          </FadeIn>
          <div className="space-y-8 md:space-y-12">
            {project.gallery.slice(0, 8).map((image, index) => (
              <FadeIn key={image} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() =>
                    onImageClick({
                      src: image,
                      alt: `${project.title} - ${lang === "en" ? "interface screen" : "tampilan antarmuka"} ${index + 1}`,
                    })
                  }
                  aria-label={
                    lang === "en"
                      ? `View interface screen ${index + 1}`
                      : `Lihat tampilan antarmuka ${index + 1}`
                  }
                  className="group block w-full cursor-zoom-in overflow-hidden text-left"
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${lang === "en" ? "interface screen" : "tampilan antarmuka"} ${index + 1}`}
                    loading="lazy"
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <span className="mt-2 block text-right text-xs text-zinc-500 transition-colors group-hover:text-[#ff4a22]">
                    {lang === "en" ? "Click to enlarge" : "Klik untuk memperbesar"}
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>
      )} */}
    </div>
  );
};
