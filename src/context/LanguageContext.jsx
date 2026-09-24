/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'id', toggleLang: () => {} });

export const translations = {
  nav: {
    en: { home: 'Home', project: 'Project', about: 'About', contact: 'Contact', letsTalk: "Let's Talk" },
    id: { home: 'Beranda', project: 'Proyek', about: 'Tentang', contact: 'Kontak', letsTalk: 'Hubungi Saya' },
  },
  hero: {
    en: {
      title: "Hello, I'm Alfian Zainul Arif.",
      subtitle: 'Software Engineer & Web Developer',
      desc: 'Full-Stack & Software Engineering',
    },
    id: {
      title: 'Halo, Saya Alfian Zainul Arif.',
      subtitle: 'Insinyur Perangkat Lunak & Pengembang Web',
      desc: 'Full-Stack & Teknik Perangkat Lunak',
    },
  },
  faq: {
    en: {
      title: 'Questions We Often Get',
      q1: 'What technologies and tools do you master?',
      a1: 'I am proficient in Full-Stack Web Development using JavaScript (React.js, Vite), PHP (Laravel, Filament), backend (Express.js), and databases (MySQL, MongoDB). I also master Git, VS Code, Postman, and Figma.',
      q2: 'How is your experience working in a team?',
      a2: 'Over two years in the Aeronautical Development Division of PENS, I coordinated workflows for 10+ team members, led technical operations for UKM Day with 80+ participants, and managed the prototype development lifecycle.',
      q3: 'Can you handle Full-Stack projects independently?',
      a3: 'Yes. I have experience building projects from scratch end-to-end, including VinzCV (React, Express, MongoDB), VianKasir POS (Laravel, MySQL), and Vinz Movie (React, Vite, REST API).',
    },
    id: {
      title: 'Pertanyaan yang Sering Diajukan',
      q1: 'Teknologi dan tools apa yang dikuasai?',
      a1: 'Saya mahir dalam Full-Stack Web Development menggunakan JavaScript (React.js, Vite), PHP (Laravel, Filament), backend (Express.js), dan database (MySQL, MongoDB). Untuk workflow juga menguasai Git, VS Code, Postman, dan Figma.',
      q2: 'Bagaimana pengalaman kerja sama tim?',
      a2: 'Selama dua tahun di Divisi Pengembangan Dirgantara PENS, saya mengkoordinasi alur kerja 10+ anggota tim, memimpin operasi teknis UKM Day untuk 80+ peserta, serta mengelola lifecycle pengembangan prototipe.',
      q3: 'Apakah bisa mengerjakan proyek Full-Stack secara mandiri?',
      a3: 'Ya. Saya memiliki pengalaman membangun proyek dari nol secara end-to-end, mulai dari VinzCV (React, Express, MongoDB), VianKasir POS (Laravel, MySQL), hingga Vinz Movie (React, Vite, REST API).',
    },
  },
  footer: {
    en: { copyright: 'Copyright © 2026 Alfian Zainul Arif. All rights reserved.', based: 'Based in Indonesia' },
    id: { copyright: 'Hak Cipta © 2026 Alfian Zainul Arif. Seluruh hak cipta dilindungi.', based: 'Berbasis di Indonesia' },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    return localStorage.getItem('lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'id' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function t(section, key, lang = 'id') {
  return translations[section]?.[lang]?.[key] ?? translations[section]?.id?.[key] ?? '';
}

export default LanguageContext;