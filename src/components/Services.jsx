import { FadeIn } from "./FadeIn";
import { siteData } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export const Services = () => {
  const { lang } = useLanguage();
  const services = siteData.services;

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <FadeIn className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-300">
            {lang === "en" ? "Skills" : "Keahlian"}
          </h2>
        </FadeIn>

        <div className="md:col-span-9">
          {services.map((service, idx) => (
            <FadeIn
              key={service.title.en}
              delay={0.08 * idx}
              variant="slide"
            >
              <article
                className={`${
                  idx > 0
                    ? "mt-10 border-t border-zinc-200/70 pt-8 dark:border-zinc-800/70 md:mt-12 md:pt-10"
                    : ""
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  {service.title[lang]}
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.desc[lang]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">
                  <span className="font-medium">
                    {lang === "en" ? "Tools: " : "Tools: "}
                  </span>
                  {service.tools[lang].join(", ")}.
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
