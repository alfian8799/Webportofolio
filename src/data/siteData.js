export const siteData = {
  // Hero Section
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
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop',
  },

  // About Section
  about: {
    en: {
      intro1: 'Applied Bachelor of Computer Science graduate with 2+ years of experience in building integrated web platforms using Laravel, React.js, and Express.js.',
      intro2: 'Passionate about creating scalable, user-friendly applications with clean architecture. Experienced in leading technical teams and managing the full development lifecycle.',
    },
    id: {
      intro1: 'Lulusan Sarjana Terapan Ilmu Komputer dengan pengalaman 2+ tahun dalam membangun platform web terintegrasi menggunakan Laravel, React.js, dan Express.js.',
      intro2: 'Berpassion menciptakan aplikasi yang scalable, user-friendly, dengan arsitektur bersih. Berpengalaman memimpin tim teknis dan mengelola siklus pengembangan penuh.',
    },
    skills: [
      { category: 'Frontend', items: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', items: ['Laravel', 'Express.js', 'PHP', 'Node.js'] },
      { category: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
      { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Figma'] },
    ],
    timeline: [
      { year: '2024 - 2026', role: 'Full-Stack Developer', org: 'Freelance & Projects' },
      { year: '2023 - 2025', role: 'Technical Lead', org: 'Divisi Pengembangan Dirgantara PENS' },
      { year: '2022 - 2026', role: 'Applied Bachelor Student', org: 'Politeknik Elektronika Negeri Surabaya' },
    ],
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop',
  },

  // Services Section
  services: [
    {
      num: '001',
      title: { en: 'Full-Stack Development', id: 'Pengembangan Full-Stack' },
      subs: { en: ['React.js & Vite', 'Laravel & Express.js', 'RESTful APIs'], id: ['React.js & Vite', 'Laravel & Express.js', 'RESTful APIs'] },
      desc: { en: 'Designing and building end-to-end web applications with high performance, modular structure, and relational/non-relational database integration.', id: 'Merancang dan membangun aplikasi web ujung ke ujung dengan performa tinggi, struktur modular, dan integrasi database relasional maupun non-relasional.' },
    },
    {
      num: '002',
      title: { en: 'Backend & Database', id: 'Backend & Database' },
      subs: { en: ['MySQL & MongoDB', 'Authentication', 'API Architecture'], id: ['MySQL & MongoDB', 'Autentikasi', 'Arsitektur API'] },
      desc: { en: 'Managing data schemas, optimizing queries, and ensuring backend reliability to support secure and scalable system operations.', id: 'Mengelola skema data, mengoptimalkan query, dan memastikan keandalan backend untuk mendukung operasional sistem yang aman dan scalable.' },
    },
    {
      num: '003',
      title: { en: 'Testing & Troubleshooting', id: 'Testing & Troubleshooting' },
      subs: { en: ['Postman', 'Debugging', 'System Reliability'], id: ['Postman', 'Debugging', 'Keandalan Sistem'] },
      desc: { en: 'Diagnosing software and network technical issues, ensuring system testing flows are free from bug or failure risks.', id: 'Mendiagnosis kendala teknis perangkat lunak dan jaringan, memastikan alur pengujian sistem bebas dari risiko bug atau failure.' },
    },
    {
      num: '004',
      title: { en: 'Technical Leadership', id: 'Kepemimpinan Teknis' },
      subs: { en: ['Team Coordination', 'R&D Operations', 'Event Management'], id: ['Koordinasi Tim', 'Operasi R&D', 'Manajemen Event'] },
      desc: { en: 'Experience leading technical team coordination, managing prototype lifecycle, and facilitating technical programs for dozens of participants.', id: 'Pengalaman memimpin koordinasi tim divisi teknis, mengelola lifecycle prototipe, serta memfasilitasi program teknis untuk puluhan peserta.' },
    },
  ],

  // Contact Section
  contact: {
    en: {
      title: "Let's Work Together.",
      subtitle: 'Have a project in mind? Let\'s collaborate to build reliable web applications and software solutions. Feel free to reach out directly.',
      email: 'alfianzarif311@gmail.com',
      phone: '089677618211',
      linkedin: 'https://www.linkedin.com/in/alfianzarif/',
      linkedinLabel: 'Alfian Zainul Arif',
    },
    id: {
      title: 'Mari Bekerja Sama.',
      subtitle: 'Punya proyek di pikiran? Mari bekerja sama untuk membangun aplikasi web dan solusi perangkat lunak yang andal. Jangan ragu untuk menghubungi langsung.',
      email: 'alfianzarif311@gmail.com',
      phone: '089677618211',
      linkedin: 'https://www.linkedin.com/in/alfianzarif/',
      linkedinLabel: 'Alfian Zainul Arif',
    },
  },

  // FAQ Section
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

  // Footer
  footer: {
    en: {
      copyright: 'Copyright © 2026 Alfian Zainul Arif. All rights reserved.',
      based: 'Based in Indonesia',
      quickLinks: [
        { label: 'Home', path: '/' },
        { label: 'About me', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
      ],
      connect: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfianzarif/', external: true },
        { label: 'Framer Portfolio', href: 'https://alfianwebporto.framer.website/', external: true },
        { label: '089677618211', href: 'tel:089677618211' },
        { label: 'alfianzarif311@gmail.com', href: 'mailto:alfianzarif311@gmail.com' },
      ],
    },
    id: {
      copyright: 'Hak Cipta © 2026 Alfian Zainul Arif. Seluruh hak cipta dilindungi.',
      based: 'Berbasis di Indonesia',
      quickLinks: [
        { label: 'Beranda', path: '/' },
        { label: 'Tentang', path: '/about' },
        { label: 'Proyek', path: '/projects' },
        { label: 'Kontak', path: '/contact' },
      ],
      connect: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfianzarif/', external: true },
        { label: 'Framer Portfolio', href: 'https://alfianwebporto.framer.website/', external: true },
        { label: '089677618211', href: 'tel:089677618211' },
        { label: 'alfianzarif311@gmail.com', href: 'mailto:alfianzarif311@gmail.com' },
      ],
    },
    brandName: 'Alfian.Z',
  },

  // Navigation
  nav: {
    en: { home: 'Home', project: 'Project', about: 'About', contact: 'Contact', letsTalk: "Let's Talk" },
    id: { home: 'Beranda', project: 'Proyek', about: 'Tentang', contact: 'Kontak', letsTalk: 'Hubungi Saya' },
  },
};