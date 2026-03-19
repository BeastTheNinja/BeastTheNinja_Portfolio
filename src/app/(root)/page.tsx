import Image from "next/image";
import { Section } from "./components/section";
import { ButtonLink } from "./components/buttonlink";
import { ProjectCard } from "./components/projectcard";
import { projects } from "./data/site-data";

const Home = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[1fr_220px]">
          <div>
            <p className="text-sm font-medium text-zinc-500">Hej, jeg er Sebastian Larsen</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
              Studerende Frontend Developer
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-700">
              Jeg bygger moderne og brugervenlige weboplevelser med React, Vite, og er lige begyndt at arbejde med Next.js og TypeScript.
            </p>
            <div className="mt-6 flex gap-3">
              <ButtonLink href="/projects">Se projekter</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Kontakt mig</ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <Image src="/Sebastian.jpg" alt="Sebastian Larsen profilbillede" width={220} height={260} className="h-auto w-full object-cover" />
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