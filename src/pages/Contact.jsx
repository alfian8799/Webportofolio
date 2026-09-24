import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

export const Contact = () => {
  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">/// Contact ///</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-[#faf9f6]">
            Let's Work Together<span className="text-[#ff4a22]">.</span>
          </h1>
          <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 max-w-2xl mt-6 leading-relaxed">
            Have a project in mind? Let's collaborate to build reliable web applications and software solutions. Feel free to reach out directly.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:alfianzarif311@gmail.com"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 mb-6 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Email</p>
              <p className="text-xl font-medium dark:text-white">alfianzarif311@gmail.com</p>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="tel:089677618211"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 mb-6 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Phone</p>
              <p className="text-xl font-medium dark:text-white">089677618211</p>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://www.linkedin.com/in/alfianzarif/"
              target="_blank"
              rel="noreferrer"
              className="block border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-[#ff4a22] transition-colors"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">LinkedIn</p>
              <p className="text-xl font-medium dark:text-white">Alfian Zainul Arif</p>
            </motion.a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:border-[#ff4a22] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 bg-[#ff4a22] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e03e1a] transition-colors"
              >
                Send Message <ArrowUpRight size={18} />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};