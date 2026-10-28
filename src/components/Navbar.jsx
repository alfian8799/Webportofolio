import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: lang === "en" ? "Home" : "Beranda", path: "/" },
    { name: lang === "en" ? "Project" : "Proyek", path: "/projects" },
    { name: lang === "en" ? "About" : "Tentang", path: "/about" },
    { name: lang === "en" ? "Contact" : "Kontak", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors">
        {/* w-full dan px-6 md:px-12 lg:px-16 agar melebar full ke tepi kiri-kanan */}
        <div className="w-full px-6 md:px-12 lg:px-16 h-24 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white"
          >
            Alfian.Z
          </Link>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center gap-10 text-base lg:text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-[#ff4a22] font-semibold"
                    : "hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Area Kanan: Toggle Tema + Tombol Let's Talk */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={toggleLang}
              className="p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer font-bold"
            >
              {lang.toUpperCase()}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex bg-[#ff4a22] hover:bg-[#e03e1a] text-white px-7 py-3 rounded-full text-base font-semibold transition-colors"
            >
              {lang === "en" ? "Let's Talk" : "Hubungi Saya"}
            </Link>

            <button
              className="md:hidden dark:text-white cursor-pointer p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fafafa] dark:bg-[#09090b] pt-32 px-8 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-8 text-4xl font-semibold dark:text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    location.pathname === link.path ? "text-[#ff4a22]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-6">
              <p className="text-sm font-mono text-zinc-500">
                Copyright © 2026 Alfian Zainul Arif
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};