import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer id="contact" className="bg-[#ff4a22] text-white pt-24 pb-0 px-6 rounded-t-[3rem] md:rounded-t-[4rem] mt-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-white/80">/// Contact ///</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">{lang === 'en' ? 'Ready to start?' : 'Siap Memulai?'}</h2>
            <p className="text-white/90 max-w-md text-lg mb-12 leading-relaxed">
              {lang === 'en' ? "Let's collaborate to build reliable web applications and software solutions. Feel free to reach out directly." : 'Mari bekerja sama untuk membangun aplikasi web dan solusi perangkat lunak yang andal. Jangan ragu untuk menghubungi langsung.'}
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:alfianzarif311@gmail.com" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-900 transition-colors"
            >
              {lang === 'en' ? "Let's Talk" : 'Hubungi Saya'} <ArrowUpRight size={18} />
            </motion.a>
          </div>
          <div className="lg:pl-20 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white/80 mb-6 font-medium">Quick Links</h4>
                <div className="space-y-4 flex flex-col text-white/95 text-sm">
                  <Link to="/" className="hover:text-black transition-colors">Home</Link>
                  <Link to="/about" className="hover:text-black transition-colors">About me</Link>
                  <Link to="/projects" className="hover:text-black transition-colors">Projects</Link>
                  <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="text-white/80 mb-6 font-medium">Connect</h4>
                <div className="space-y-4 flex flex-col text-white/95 text-sm">
                  <a href="https://www.linkedin.com/in/alfianzarif/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
                  <a href="https://alfianwebporto.framer.website/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Framer Portfolio</a>
                  <a href="tel:089677618211" className="hover:text-black transition-colors">089677618211</a>
                  <a href="mailto:alfianzarif311@gmail.com" className="hover:text-black transition-colors">alfianzarif311@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-sm text-white/80">
          <p>{lang === 'en' ? 'Copyright © 2026 Alfian Zainul Arif. All rights reserved.' : 'Hak Cipta © 2026 Alfian Zainul Arif. Seluruh hak cipta dilindungi.'}</p>
          <p className="mt-4 md:mt-0">{lang === 'en' ? 'Based in Indonesia' : 'Berbasis di Indonesia'}</p>
        </div>

        {/* Big Typography with adjusted spacing */}
        <div className="mt-8 md:mt-12 overflow-hidden select-none pointer-events-none flex justify-center items-end">
          <h1 className="text-[clamp(3.5rem,14vw,15rem)] font-black leading-[0.85] tracking-tighter text-white/20 text-center uppercase whitespace-nowrap -mb-1 md:-mb-1 translate-y-2">
            Alfian.Z
          </h1>
        </div>
      </div>
    </footer>
  );
};