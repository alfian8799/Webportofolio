import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const projectDetails = {
  vinzcv: {
    title: 'VinzCV',
    subtitle: 'Resume Builder Platform',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2564&auto=format&fit=crop',
    overview: {
      en: 'VinzCV is a modern resume builder web platform featuring real-time preview, PDF export, and an interactive dashboard. Built from scratch as a full-stack application using React.js for the frontend, Express.js for the backend, and MongoDB for data storage.',
      id: 'VinzCV adalah platform pembuat CV (resume builder) modern dengan fitur preview real-time, ekspor PDF, dan dashboard interaktif. Dibangun dari awal sebagai aplikasi full-stack menggunakan React.js untuk frontend, Express.js untuk backend, dan MongoDB untuk penyimpanan data.',
    },
    overviewDetail: {
      en: 'The platform allows users to create professional resumes with a live preview feature that instantly reflects every change. The dashboard provides an intuitive interface for managing career history, skills, and personal information. The project demonstrates expertise in full-stack development, from database design to API architecture and responsive UI implementation.',
      id: 'Platform ini memungkinkan pengguna membuat CV profesional dengan fitur live preview yang langsung mencerminkan setiap perubahan. Dashboard menyediakan antarmuka intuitif untuk mengelola riwayat karir, keahlian, dan informasi pribadi. Proyek ini mendemonstrasikan keahlian dalam pengembangan full-stack, dari desain database hingga arsitektur API dan implementasi UI responsif.',
    },
    midImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop',
    scopeOfWork: {
      en: ['Full-Stack Development', 'Real-time Preview Engine', 'PDF Export System', 'Authentication & Dashboard', 'Database Architecture'],
      id: ['Pengembangan Full-Stack', 'Mesin Preview Real-time', 'Sistem Ekspor PDF', 'Autentikasi & Dashboard', 'Arsitektur Database'],
    },
    outcome: {
      en: 'The final product is a fully functional resume builder that combines clean architecture with an intuitive user experience. The real-time preview system eliminates the guesswork in resume creation, while the PDF export ensures professional output quality. The modular codebase allows for easy extension with new templates and features.',
      id: 'Produk akhir adalah pembuat CV yang sepenuhnya fungsional dengan arsitektur bersih dan pengalaman pengguna yang intuitif. Sistem preview real-time menghilangkan keraguan dalam pembuatan CV, sementara ekspor PDF memastikan kualitas output profesional. Codebase modular memungkinkan perluasan mudah dengan template dan fitur baru.',
    },
    repo: 'https://github.com',
    demo: '#',
    tags: ['React', 'Express.js', 'MongoDB'],
  },
  vinzmovie: {
    title: 'Vinz Movie',
    subtitle: 'Movie Database App',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2564&auto=format&fit=crop',
    overview: {
      en: 'Vinz Movie is a responsive movie database web application with real-time REST API integration for searching movies and TV shows. Built with React.js and Vite, it delivers a fast and fluid browsing experience powered by the TMDB API.',
      id: 'Vinz Movie adalah aplikasi katalog film & serial TV responsif dengan integrasi REST API real-time untuk pencarian. Dibangun dengan React.js dan Vite, menghadirkan pengalaman browsing yang cepat dan lancar dengan TMDB API.',
    },
    overviewDetail: {
      en: 'The application features a clean, modern interface for discovering movies and TV shows. Users can search in real-time, view detailed information, browse by categories, and manage their personal watchlist. The responsive design ensures a seamless experience across all devices, from mobile phones to desktop monitors.',
      id: 'Aplikasi ini menampilkan antarmuka bersih dan modern untuk menemukan film dan serial TV. Pengguna dapat mencari secara real-time, melihat informasi detail, menjelajahi berdasarkan kategori, dan mengelola watchlist personal. Desain responsif memastikan pengalaman seamless di semua perangkat.',
    },
    midImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop',
    scopeOfWork: {
      en: ['Front-End Development', 'REST API Integration', 'Responsive UI Design', 'Search & Filter System', 'Dark Mode Implementation'],
      id: ['Pengembangan Front-End', 'Integrasi REST API', 'Desain UI Responsif', 'Sistem Pencarian & Filter', 'Implementasi Dark Mode'],
    },
    outcome: {
      en: 'Vinz Movie delivers a polished movie browsing experience with instant search results, smooth animations, and a dark mode that reduces eye strain during extended viewing sessions. The efficient API integration ensures fast load times while maintaining data accuracy.',
      id: 'Vinz Movie menghadirkan pengalaman browsing film yang sempurna dengan hasil pencarian instan, animasi halus, dan mode gelap yang mengurangi kelelahan mata. Integrasi API yang efisien memastikan waktu loading cepat sambil menjaga akurasi data.',
    },
    repo: 'https://github.com',
    demo: '#',
    tags: ['React', 'Vite', 'TMDB API'],
  },
  viankasir: {
    title: 'VianKasir POS',
    subtitle: 'Point of Sale System',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2564&auto=format&fit=crop',
    overview: {
      en: 'VianKasir POS is a modern point of sale and inventory management system with an analytics dashboard, stock management, and detailed sales reporting. Built with Laravel and Filament PHP for a robust, production-ready backend.',
      id: 'VianKasir POS adalah sistem point of sale dan manajemen inventaris modern dengan dashboard analitik, manajemen stok, dan laporan penjualan detail. Dibangun dengan Laravel dan Filament PHP untuk backend yang robust dan production-ready.',
    },
    overviewDetail: {
      en: 'The system provides a complete POS solution with real-time transaction processing, inventory tracking, and comprehensive analytics. The Filament-based admin panel offers an elegant interface for managing products, viewing sales trends, and generating business reports. MySQL ensures reliable data storage for all transaction records.',
      id: 'Sistem ini menyediakan solusi POS lengkap dengan pemrosesan transaksi real-time, pelacakan inventaris, dan analitik komprehensif. Panel admin berbasis Filament menawarkan antarmuka elegan untuk mengelola produk, melihat tren penjualan, dan menghasilkan laporan bisnis. MySQL memastikan penyimpanan data yang handal untuk semua catatan transaksi.',
    },
    midImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop',
    scopeOfWork: {
      en: ['Full-Stack Development', 'POS Transaction Engine', 'Inventory Management', 'Analytics Dashboard', 'Sales Reporting'],
      id: ['Pengembangan Full-Stack', 'Mesin Transaksi POS', 'Manajemen Inventaris', 'Dashboard Analitik', 'Laporan Penjualan'],
    },
    outcome: {
      en: 'VianKasir POS streamlines retail operations with an intuitive interface that minimizes training time. The analytics dashboard provides actionable insights into sales patterns, while the inventory system prevents stock issues. The modular Laravel architecture ensures scalability for growing businesses.',
      id: 'VianKasir POS menyederhanakan operasi ritel dengan antarmuka intuitif yang meminimalkan waktu pelatihan. Dashboard analitik memberikan insight yang dapat ditindaklanjuti tentang pola penjualan, sementara sistem inventaris mencegah masalah stok. Arsitektur Laravel modular memastikan skalabilitas untuk bisnis yang berkembang.',
    },
    repo: 'https://github.com',
    demo: '#',
    tags: ['Laravel', 'Filament', 'MySQL'],
  },
  gamedev: {
    title: 'Game Dev Quest Board',
    subtitle: 'Kanban Board for Game Dev',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop',
    overview: {
      en: 'An interactive Kanban board application designed to track game production pipelines with a gamified progress bar and drag-and-drop task management. Built with vanilla HTML5, CSS, and JavaScript.',
      id: 'Aplikasi Kanban board interaktif yang dirancang untuk memantau pipeline produksi game dengan progress bar bergamifikasi dan manajemen tugas drag-and-drop. Dibangun dengan HTML5, CSS, dan JavaScript vanilla.',
    },
    overviewDetail: {
      en: 'The Quest Board brings a unique twist to traditional project management by gamifying the development process. Tasks are represented as quests with progress tracking, and the visual Kanban layout makes it easy to see the status of every feature in the production pipeline.',
      id: 'Quest Board membawa sentuhan unik pada manajemen proyek tradisional dengan menggamifikasi proses pengembangan. Tugas direpresentasikan sebagai quest dengan pelacakan progres, dan tata letak Kanban visual memudahkan melihat status setiap fitur dalam pipeline produksi.',
    },
    midImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    scopeOfWork: {
      en: ['Interactive Kanban Board', 'Drag & Drop System', 'Gamified Progress Tracking', 'Responsive Design', 'Local Storage Persistence'],
      id: ['Kanban Board Interaktif', 'Sistem Drag & Drop', 'Pelacakan Progres Bergamifikasi', 'Desain Responsif', 'Persistensi Local Storage'],
    },
    outcome: {
      en: 'The Quest Board makes game development project tracking engaging and visual. The gamification elements motivate team members while the Kanban workflow provides clear visibility into production status.',
      id: 'Quest Board membuat pelacakan proyek pengembangan game menjadi menarik dan visual. Elemen gamifikasi memotivasi anggota tim sementara alur kerja Kanban memberikan visibilitas yang jelas ke status produksi.',
    },
    repo: 'https://github.com',
    demo: '#',
    tags: ['HTML5', 'CSS', 'JavaScript'],
  },
  portfolio: {
    title: 'Portfolio Platform',
    subtitle: 'Personal Portfolio Website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2564&auto=format&fit=crop',
    overview: {
      en: 'A modern personal portfolio website featuring smooth scroll animations, dark mode toggle, and responsive Swiss grid design. Built with React.js, Vite, Tailwind CSS, and Framer Motion.',
      id: 'Website portofolio personal modern dengan animasi scroll halus, toggle dark mode, dan desain Swiss grid responsif. Dibangun dengan React.js, Vite, Tailwind CSS, dan Framer Motion.',
    },
    overviewDetail: {
      en: 'This portfolio showcases a clean, editorial-inspired design philosophy with careful attention to typography, spacing, and motion. The dark/light theme system, smooth page transitions, and responsive layout create a professional browsing experience across all devices.',
      id: 'Portofolio ini menampilkan filosofi desain bersih terinspirasi editorial dengan perhatian seksama pada tipografi, spacing, dan animasi. Sistem tema gelap/terang, transisi halus, dan layout responsif menciptakan pengalaman browsing profesional di semua perangkat.',
    },
    midImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop',
    scopeOfWork: {
      en: ['Front-End Development', 'Animation System', 'Dark/Light Theme', 'Responsive Layout', 'Performance Optimization'],
      id: ['Pengembangan Front-End', 'Sistem Animasi', 'Tema Gelap/Terang', 'Layout Responsif', 'Optimasi Performa'],
    },
    outcome: {
      en: 'The portfolio delivers a distinctive visual identity that stands out through its editorial design approach and fluid animations. The optimized performance ensures fast load times while the responsive design maintains visual integrity on every screen size.',
      id: 'Portofolio menghadirkan identitas visual yang unik melalui pendekatan desain editorial dan animasi fluida. Performa yang dioptimalkan memastikan waktu loading cepat sementara desain responsif mempertahankan integritas visual di setiap ukuran layar.',
    },
    repo: 'https://github.com',
    demo: '#',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ['0%', '100%']);

  const project = projectDetails[slug];

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            {lang === 'en' ? 'Project Not Found' : 'Proyek Tidak Ditemukan'}
          </h1>
          <Link to="/projects" className="text-[#ff4a22] hover:underline">
            ← {lang === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>
        </div>
      </section>
    );
  }

  const otherProjects = Object.entries(projectDetails)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Back Link */}
        <FadeIn>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#ff4a22] transition-colors mb-12">
            ← {lang === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>
        </FadeIn>

        {/* Section 1: Title + Main Image */}
        <section className="mb-20">
          <FadeIn>
            <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#ff4a22] font-bold">
              /// {lang === 'en' ? 'Case Study' : 'Studi Kasus'} ///
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 dark:text-[#faf9f6]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl font-light italic text-zinc-500 dark:text-zinc-400 mb-8">
              {project.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="w-full aspect-video md:aspect-[16/7] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative border border-black/5 dark:border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 2: Project Overview */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              {lang === 'en' ? 'Project Overview' : 'Ringkasan Proyek'}
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed md:text-lg max-w-4xl">
              <p>{project.overview[lang]}</p>
              <p>{project.overviewDetail[lang]}</p>
            </div>
          </FadeIn>
        </section>

        {/* Section 3: Mid Image */}
        <section className="mb-24">
          <FadeIn>
            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#f4f4f4] dark:bg-zinc-900 rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-black/5 dark:border-white/10">
              <img
                src={project.midImage}
                alt={`${project.title} Mockup`}
                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
          </FadeIn>
        </section>

        {/* Section 4: Scope of Work & Final Outcome */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <FadeIn>
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  {lang === 'en' ? 'Scope of Work' : 'Ruang Lingkup Pekerjaan'}
                </h3>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 font-medium">
                  {project.scopeOfWork[lang].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4a22]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="md:col-span-7">
              <FadeIn delay={0.1}>
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  {lang === 'en' ? 'Final Outcome' : 'Hasil Akhir'}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.outcome[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/50 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 bg-[#ff4a22] hover:bg-[#e03e1a] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  >
                    {lang === 'en' ? 'Live Demo' : 'Demo Langsung'} <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 hover:border-[#ff4a22] hover:text-[#ff4a22] px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  >
                    {lang === 'en' ? 'View Code' : 'Lihat Kode'}
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Animated divider */}
        <div className="h-px bg-black/10 dark:bg-white/10 mb-20 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-[#ff4a22] to-transparent"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Section 5: Related Projects */}
        <section>
          <FadeIn className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
              {lang === 'en' ? 'Related Projects' : 'Proyek Terkait'}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {otherProjects.map(([key, p], idx) => (
              <FadeIn key={key} delay={idx * 0.1}>
                <Link to={`/projects/${key}`} className="group block cursor-pointer">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6 border border-black/5 dark:border-white/10">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-lg font-bold dark:text-white group-hover:text-[#ff4a22] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{p.subtitle}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default ProjectDetail;