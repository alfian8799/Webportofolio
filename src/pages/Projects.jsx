import { AllProjects } from "../components/AllProjects";
import { UXProjects } from "../components/UXProjects";

export const Projects = () => {
  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-white">
      <UXProjects />
      <AllProjects />
    </section>
  );
};