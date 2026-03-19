import { Section } from "./components/section";
import { ButtonLink } from "./components/buttonlink";
import { ProjectCard } from "./components/projectcard";
import { projects } from "./data/site-data";

const Home = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <Section
        title="Frontend Developer"
        subtitle="Jeg bygger moderne weboplevelser med Next.js og TypeScript."
      >
        <p className="max-w-2xl text-zinc-700">
          Velkommen til min portfolio. Her finder du projekter, lidt om mig og kontaktinfo.
        </p>

        <div className="mt-6 flex gap-3">
          <ButtonLink href="/projects">Se projekter</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Kontakt mig
          </ButtonLink>
        </div>
      </Section>
      <Section
        title="Featured projects"
        subtitle="Et udvalg af mine seneste og mest interessante projekter."
      >
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