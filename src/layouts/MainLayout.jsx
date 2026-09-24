import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Services } from '../components/Services';
import { FAQ } from '../components/FAQ';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        {children ? (
          children
        ) : (
          <>
            <Hero />
            <Services />
            <FeaturedProjects />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};