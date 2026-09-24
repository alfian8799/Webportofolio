import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

export const About = () => {
  const skills = [
    { category: "Frontend", items: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Laravel", "Express.js", "PHP", "Node.js"] },
    { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] },
  ];

  const timeline = [
    { year: "2024 - 2026", role: "Full-Stack Developer", org: "Freelance & Projects" },
    { year: "2023 - 2025", role: "Technical Lead", org: "Divisi Pengembangan Dirgantara PENS" },
    { year: "2022 - 2026", role: "Applied Bachelor Student", org: "Politeknik Elektronika Negeri Surabaya" },
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">/// About Me ///</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight dark:text-[#faf9f6]">
            Who I Am<span className="text-[#ff4a22]">.</span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <FadeIn>
            <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Applied Bachelor of Computer Science graduate with 2+ years of experience in building integrated web platforms using Laravel, React.js, and Express.js.
            </p>
            <p className="text-lg font-light italic text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Passionate about creating scalable, user-friendly applications with clean architecture. Experienced in leading technical teams and managing the full development lifecycle.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-4/5 overflow-hidden bg-[#faf9f6] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 group">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop"
                alt="Alfian Zainul Arif Portrait"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mb-20">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="border-t border-black/10 dark:border-white/10 pt-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#ff4a22] mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-zinc-600 dark:text-zinc-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 8 }}
                className="border-l-2 border-[#ff4a22] pl-6 py-2"
              >
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-1">{item.year}</p>
                <h3 className="text-xl font-semibold dark:text-white">{item.role}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.org}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};