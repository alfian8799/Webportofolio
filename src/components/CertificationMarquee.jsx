import { motion } from "framer-motion";
import { certificatesData } from "../data/certificatesData";
import { FadeIn } from "./FadeIn";
import { useLanguage, t } from "../context/LanguageContext";

export const CertificationMarquee = () => {
  const { lang } = useLanguage();

  // Lipat gandakan data untuk memuluskan animasi scrolling tak berujung (infinite loop)
  const tripledCerts = [
    ...certificatesData,
    ...certificatesData,
    ...certificatesData,
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#ff4a22]">
              {t('certifications', 'recognized', lang)}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {t("certifications", "honors", lang)
              .split("")
              .map((char, i) =>
                char === "." || char === "?" ? (
                  <span key={i} className="text-[#ff4a22]">
                    {char}
                  </span>
                ) : (
                  char
                ),
              )}
            </h2>
          </div>
          {/* <p className="max-w-md font-light text-zinc-400 mt-6 md:mt-0 text-lg leading-relaxed">
            {t('certifications', 'collection', lang)}
          </p> */}
        </FadeIn>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden py-4">
        {/* Edge Fade overlay untuk efek luntur di pinggiran layar */}
        <div className="absolute left-0 inset-y-0 w-32 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} // Kecepatan diatur lebih santai (30 detik) karena ukuran kartu lebih lebar
          className="flex gap-6 shrink-0 items-stretch px-3"
        >
          {tripledCerts.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentialUrl !== "#" ? cert.credentialUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col w-85 md:w-105 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-[#ff4a22]/40 rounded-2xl p-4 shrink-0 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            >
              {/* Box Gambar Sertifikat Terlihat Utuh */}
              <div className="w-full aspect-16/10 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 mb-5 relative group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src={cert.image}
                  alt={`${cert.title} by ${cert.issuer}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/images/fallback-placeholder.jpg"; // Pasang gambar fallback bila terjadi kendala pemuatan
                  }}
                />
                {/* Efek Hover Glass / Highlight Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Detail Konten Info */}
              <div className="flex flex-col grow text-left">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#ff4a22] transition-colors leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between text-xs md:text-sm border-t border-zinc-800/60">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-300">{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="font-mono text-zinc-500">{cert.date}</span>
                  </div>
                  
                  {/* Tanda panah hover */}
                  <span className="text-[#ff4a22] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};