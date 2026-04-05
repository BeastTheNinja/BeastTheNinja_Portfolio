import Image from "next/image";
import { Section } from "./components/section";
import { ButtonLink } from "./components/buttonlink";
import { ProjectCard } from "./components/projectcard";
import { projects } from "./data/site-data";

const Home = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <Section>
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[1fr_220px]">
          <div>
            <p className="text-sm font-medium text-slate-300">Hej, jeg er Sebastian Larsen</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Studerende Frontend Developer
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200">
              Jeg bygger moderne og brugervenlige weboplevelser med React, Vite, og er lige begyndt at arbejde med Next.js og TypeScript.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/projekter">Se projekter</ButtonLink>
              <ButtonLink href="/kontakt" variant="secondary">Kontakt mig</ButtonLink>
            </div>
          </div>

          <div className="mx-auto w-full max-w-55 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/70 shadow-sm shadow-black/30 md:mx-0">
            <Image src="/mig3.jpg" alt="Sebastian Larsen profilbillede" width={220} height={260} className="h-auto w-full object-cover" loading="eager" />
          </div>
        </div>
      </Section>

      <Section title="Featured projects" subtitle="Et udvalg af mine seneste projekter.">
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;