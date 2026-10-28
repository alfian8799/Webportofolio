import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Gamepad2,
  MapPin,
  PanelsTopLeft,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { useLanguage, t } from "../context/LanguageContext";
import { siteData } from "../data/siteData";

const AboutDivider = ({ targetRef, className = "" }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <div
      className={`relative h-px overflow-hidden bg-zinc-200 dark:bg-zinc-800 ${className}`}
    >
      <motion.div
        className="h-full bg-linear-to-r from-transparent via-[#ff4a22] to-transparent"
        style={{ width: lineWidth }}
      />
    </div>
  );
};

export const About = () => {
  const { lang } = useLanguage();
  const about = siteData.about[lang];
  const skillsSection = siteData.about.skillsSection[lang];
  const skillIcons = [PanelsTopLeft, Code2, Gamepad2];
  const aboutHeaderRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const experienceHeaderRef = useRef(null);

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={aboutHeaderRef}>
          <FadeIn className="mb-8">
            <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">{t('aboutPage', 'tag', lang)}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-[#faf9f6]">
              {t("aboutPage", "title", lang)
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
            </h1>
          </FadeIn>
        </div>
        <AboutDivider targetRef={aboutHeaderRef} className="mb-12" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <FadeIn>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {t("aboutPage", "aboutMe", lang)}
            </h2>
            <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {about.intro1}
            </p>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {t("aboutPage", "careerObjective", lang)}
            </h2>
            <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {about.intro2}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-zinc-300 bg-[#faf9f6] dark:border-zinc-700 dark:bg-zinc-900">
              <img
                 src={siteData.hero.image}
                alt="Alfian Zainul Arif Portrait"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>
        </div>

        <section className="group/skills mb-40">
          <div ref={skillsHeaderRef}>
            <FadeIn className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#ff4a22]">
                  {skillsSection.eyebrow}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
                  {skillsSection.title}
                  <span className="text-[#ff4a22]">.</span>
                </h2>
              </div>
            </FadeIn>
          </div>
          <AboutDivider targetRef={skillsHeaderRef} className="mb-6" />

          <div>
            {siteData.services.map((service, index) => {
              const SkillIcon = skillIcons[index];

              return (
                <FadeIn key={service.title.en} delay={index * 0.08}>
                  <article className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 md:py-9">
                    <div className="flex items-start gap-4 md:col-span-4">
                      <div className="pt-1 text-[#ff4a22]">
                        <SkillIcon aria-hidden="true" size={22} strokeWidth={1.6} />
                      </div>
                      <div>
                        <p className="mb-2 text-[11px] font-mono tracking-widest text-zinc-400">
                          {String(index + 1).padStart(2, "0")}{" "}
                          <span className="text-[#ff4a22]">/</span>{" "}
                          {String(siteData.services.length).padStart(2, "0")}
                        </p>
                        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-2xl">
                          {service.title[lang]}
                        </h3>
                      </div>
                    </div>

                    <div className="md:col-span-8">
                      <p className="max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
                        {service.desc[lang]}
                      </p>
                      <div className="mt-6">
                        <h4 className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-400">
                          {lang === "en" ? "Tools & Technologies" : "Tools & Teknologi"}
                        </h4>
                        <ul className="flex flex-wrap gap-x-2 gap-y-2">
                          {service.tools[lang].map((tool, toolIndex) => (
                            <li
                              key={tool}
                              className="text-sm text-zinc-500 transition-colors hover:text-[#ff4a22] dark:text-zinc-400"
                            >
                              {tool}
                              {toolIndex < service.tools[lang].length - 1 && (
                                <span className="ml-2 text-[#ff4a22]/70">,</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <div ref={experienceHeaderRef}>
            <FadeIn className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#ff4a22]">
                  {lang === "en" ? "Career Journey" : "Perjalanan Karier"}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
                  {t("aboutPage", "experienceTitle", lang)}
                  <span className="text-[#ff4a22]">.</span>
                </h2>
              </div>
            </FadeIn>
          </div>
          <AboutDivider targetRef={experienceHeaderRef} className="mb-6" />

          <div>
            {siteData.about.timeline.map((item, index) => (
              <FadeIn key={item.link} delay={index * 0.08}>
                <article className="grid grid-cols-1 gap-5  md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="md:col-span-4">
                    <p className="text-sm font-mono text-[#ff4a22]">
                      {item.period} <span className="text-zinc-500">·</span>{" "}
                      {item.duration}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <BriefcaseBusiness
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-zinc-400"
                      />
                      <span>
                        {item.org} <span className="text-zinc-400">·</span>{" "}
                        {item.employment}
                      </span>
                    </div>
                    <div className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
                      />
                      <span>
                        {item.location} <span className="text-zinc-400">·</span>{" "}
                        {item.workplace}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-2xl">
                        {item.role}
                      </h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors hover:text-[#ff4a22] dark:text-zinc-400"
                      >
                        LinkedIn
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                      </a>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {item.description[lang]}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {item.highlights[lang].map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4a22]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};