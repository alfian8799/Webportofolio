/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'id', toggleLang: () => {} });

export const translations = {
  nav: {
    en: { home: 'Home', project: 'Projects', about: 'About', contact: 'Contact', letsTalk: "Let's Talk" },
    id: { home: 'Beranda', project: 'Proyek', about: 'Tentang', contact: 'Kontak', letsTalk: 'Hubungi Saya' },
  },
  hero: {
    en: {
      tag: 'Web Developer',
      title: "Hello, I'm Alfian Zainul Arif.",
      subtitle: 'Software Engineer & Web Developer',
      desc: 'Bachelor of Applied Computer Science graduate with 2+ years of hands-on experience building web platforms, landing pages, and games using HTML, CSS, JavaScript, React.js, Express.js, and Unity Engine.',
    },
    id: {
      tag: 'Pengembang Web',
      title: 'Halo, Saya Alfian Zainul Arif.',
      subtitle: 'Insinyur Perangkat Lunak & Pengembang Web',
      desc: 'Menggabungkan estetika desain dan logika pemrograman untuk menghadirkan solusi digital menyeluruh—mulai dari wireframe UI/UX, fungsionalitas web, hingga pengembangan gim..',
    },
  },
  services: {
    en: {
      tag: '/// Expertise ///',
      title: 'What I Do?.',
      subtitle: 'I build reliable software solutions, scalable web platforms, and coordinate technical engineering workflows.',
    },
    id: {
      tag: '/// Keahlian ///',
      title: 'Apa yang Saya Kerjakan?.',
      subtitle: 'Saya membangun solusi perangkat lunak yang andal, platform web yang dapat diskalakan, serta mengoordinasikan alur kerja teknis rekayasa.',
    },
  },
  featuredProjects: {
    en: {
      tag: '/// Projects ///',
      title: 'Featured Projects & Works.',
      subtitle: 'A curated selection of primary web applications and technical solutions built with modern standards.',
      viewDetails: 'View Details.',
      viewAll: 'View All Projects.',
    },
    id: {
      tag: '/// Proyek Unggulan ///',
      title: 'Karya yang Telah Saya Buat',
      subtitle: 'Pilihan aplikasi web utama dan solusi teknis yang dibangun dengan standar modern.',
      viewDetails: 'Lihat Detail.',
      viewAll: 'Lihat Semua Proyek.',
    },
  },
  certifications: {
    en: {
      recognized: '/// Certifications ///',
      honors: 'Professional Honors & Certifications.',
      collection: 'A collection of industry-recognized credentials validating my technical expertise and continuous learning.',
    },
    id: {
      recognized: '/// Sertifikasi ///',
      honors: 'Penghargaan & Sertifikasi Profesional.',
      collection: 'Kumpulan kredensial yang diakui industri untuk memvalidasi keahlian teknis dan pembelajaran berkelanjutan saya.',
    },
  },
  allProjects: {
    en: {
      tag: '/// More Projects ///',
      title: 'More Projects.',
      subtitle: 'Explore additional web applications, games, and software projects.',
      projectsWord: 'projects',
      liveDemo: 'Live Demo',
      code: 'Code',
      categories: {
        All: 'All',
        'Web App': 'Web App',
        'Front-End': 'Front-End',
        Backend: 'Backend',
      },
    },
    id: {
      tag: '/// Proyek Lainnya ///',
      title: 'Proyek Lainnya.',
      subtitle: 'Jelajahi proyek web, game, dan perangkat lunak lainnya.',
      projectsWord: 'proyek',
      liveDemo: 'Demo Langsung',
      code: 'Kode',
      categories: {
        All: 'Semua',
        'Web App': 'Web App',
        'Front-End': 'Front-End',
        Backend: 'Backend',
      },
    },
  },
  faq: {
    en: {
      tag: '/// FAQ ///',
      title: 'Questions We Often Get.',
      q1: 'What technologies and tools do you master?',
      a1: 'I am proficient in Full-Stack Web Development using JavaScript (React.js, Vite), PHP (Laravel, Filament), backend (Express.js), and databases (MySQL, MongoDB). I also master Git, VS Code, Postman, and Figma.',
      q2: 'How is your experience working in a team?',
      a2: 'Over two years in the Aeronautical Development Division of PENS, I coordinated workflows for 10+ team members, led technical operations for UKM Day with 80+ participants, and managed the prototype development lifecycle.',
      q3: 'Can you handle Full-Stack projects independently?',
      a3: 'Yes. I have experience building projects from scratch end-to-end, including VinzCV (React, Express, MongoDB), VianKasir POS (Laravel, MySQL), and Vinz Movie (React, Vite, REST API).',
    },
    id: {
      tag: '/// Tanya Jawab ///',
      title: 'Pertanyaan yang Sering Diajukan.',
      q1: 'Teknologi dan tools apa yang dikuasai?',
      a1: 'Saya mahir dalam Full-Stack Web Development menggunakan JavaScript (React.js, Vite), PHP (Laravel, Filament), backend (Express.js), dan database (MySQL, MongoDB). Untuk workflow juga menguasai Git, VS Code, Postman, dan Figma.',
      q2: 'Bagaimana pengalaman kerja sama tim?',
      a2: 'Selama dua tahun di Divisi Pengembangan Dirgantara PENS, saya mengkoordinasi alur kerja 10+ anggota tim, memimpin operasi teknis UKM Day untuk 80+ peserta, serta mengelola lifecycle pengembangan prototipe.',
      q3: 'Apakah bisa mengerjakan proyek Full-Stack secara mandiri?',
      a3: 'Ya. Saya memiliki pengalaman membangun proyek dari nol secara end-to-end, mulai dari VinzCV (React, Express, MongoDB), VianKasir POS (Laravel, MySQL), hingga Vinz Movie (React, Vite, REST API).',
    },
  },
  aboutPage: {
    en: {
      tag: '/// About Me ///',
      title: 'Who I Am.',
      aboutMe: 'About Me',
      careerObjective: 'Career Objective',
      intro1: 'Applied Bachelor of Computer Science graduate with 2+ years of experience in building integrated web platforms using React.js, and Express.js.',
      intro2: 'Passionate about creating scalable, user-friendly applications with clean architecture. Experienced in leading technical teams and managing the full development lifecycle.',
      experienceTitle: 'Experience',
    },
    id: {
      tag: '/// Tentang Saya ///',
      title: 'Siapa Saya.',
      aboutMe: 'Tentang Saya',
      careerObjective: 'Tujuan Karier',
      intro1: 'Lulusan Sarjana Terapan Ilmu Komputer dengan pengalaman 2+ tahun dalam membangun platform web terintegrasi menggunakan React.js, dan Express.js.',
      intro2: 'Berpassion menciptakan aplikasi yang scalable, user-friendly, dengan arsitektur bersih. Berpengalaman memimpin tim teknis dan mengelola siklus pengembangan penuh.',
      experienceTitle: 'Pengalaman',
    },
  },
  contactPage: {
    en: {
      tag: '/// Contact ///',
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's collaborate to build reliable web applications and software solutions. Feel free to reach out directly.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
      nameField: 'Name',
      namePlaceholder: 'Your name',
      emailField: 'Email',
      emailPlaceholder: 'your@email.com',
      messageField: 'Message',
      messagePlaceholder: 'Your message...',
      sendButton: 'Send Message',
    },
    id: {
      tag: '/// Kontak ///',
      title: 'Mari Bekerja Sama',
      subtitle: 'Punya ide proyek? Mari berkolaborasi untuk membangun aplikasi web dan solusi perangkat lunak yang andal. Jangan ragu untuk menghubungi langsung.',
      emailLabel: 'Email',
      phoneLabel: 'Telepon',
      linkedinLabel: 'LinkedIn',
      nameField: 'Nama',
      namePlaceholder: 'Nama Anda',
      emailField: 'Email',
      emailPlaceholder: 'email@anda.com',
      messageField: 'Pesan',
      messagePlaceholder: 'Pesan Anda...',
      sendButton: 'Kirim Pesan',
    },
  },
  footer: {
    en: {
      tag: '/// Contact ///',
      heading: 'Ready to start?.',
      desc: "Let's collaborate to build reliable web applications and software solutions. Feel free to reach out directly.",
      button: "Let's Talk",
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: 'Copyright © 2026 Alfian Zainul Arif. All rights reserved.',
      based: 'Based in Indonesia',
      links: {
        home: 'Home',
        about: 'About me',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
    id: {
      tag: '/// Kontak ///',
      heading: 'Siap Memulai?.',
      desc: 'Mari bekerja sama untuk membangun aplikasi web dan solusi perangkat lunak yang andal. Jangan ragu untuk menghubungi langsung.',
      button: 'Hubungi Saya',
      quickLinks: 'Tautan Cepat',
      connect: 'Terhubung',
      copyright: 'Hak Cipta © 2026 Alfian Zainul Arif. Seluruh hak cipta dilindungi.',
      based: 'Berbasis di Indonesia',
      links: {
        home: 'Beranda',
        about: 'Tentang Saya',
        projects: 'Proyek',
        contact: 'Kontak',
      },
    },
  },
  projectDetail: {
    en: {
      back: 'Back to Projects',
      notFound: 'Project Not Found',
      tools: 'Tools & Stack',
      responsibilities: 'Key Responsibilities',
      overviewTag: 'Overview',
      overviewHeading: 'Project Overview',
      resultsTag: 'Results',
      resultsHeading: 'Final Outcome',
      galleryTag: 'Showcase Gallery',
      imagesWord: 'Images',
    },
    id: {
      back: 'Kembali ke Proyek',
      notFound: 'Proyek Tidak Ditemukan',
      tools: 'Alat & Teknologi',
      responsibilities: 'Tanggung Jawab Utama',
      overviewTag: 'Ringkasan',
      overviewHeading: 'Ringkasan Proyek',
      resultsTag: 'Hasil',
      resultsHeading: 'Hasil Akhir',
      galleryTag: 'Galeri Showcase',
      imagesWord: 'Gambar',
    },
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