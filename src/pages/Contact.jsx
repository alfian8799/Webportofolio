import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { useLanguage, t } from "../context/LanguageContext";

export const Contact = () => {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">{t('contactPage', 'tag', lang)}</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-[#faf9f6]">
            {t('contactPage', 'title', lang)}<span className="text-[#ff4a22]">.</span>
          </h1>
          <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 max-w-2xl mt-6 leading-relaxed">
            {t('contactPage', 'subtitle', lang)}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:alfianzarif311@gmail.com"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 mb-6 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'emailLabel', lang)}</p>
              <p className="text-xl font-medium dark:text-white">alfianzarif311@gmail.com</p>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="tel:089677618211"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 mb-6 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'phoneLabel', lang)}</p>
              <p className="text-xl font-medium dark:text-white">089677618211</p>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://www.linkedin.com/in/alfianzarif/"
              target="_blank"
              rel="noreferrer"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'linkedinLabel', lang)}</p>
              <p className="text-xl font-medium dark:text-white">Alfian Zainul Arif</p>
            </motion.a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'nameField', lang)}</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors"
                  placeholder={t('contactPage', 'namePlaceholder', lang)}
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'emailField', lang)}</label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors"
                  placeholder={t('contactPage', 'emailPlaceholder', lang)}
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{t('contactPage', 'messageField', lang)}</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors resize-none"
                  placeholder={t('contactPage', 'messagePlaceholder', lang)}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 bg-[#ff4a22] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e03e1a] transition-colors"
              >
                {t('contactPage', 'sendButton', lang)} <ArrowUpRight size={18} />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};