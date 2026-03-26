import { Section } from "../components/section";
import { ProjectCard } from "../components/projectcard";
import { PageIntro } from "../components/pageintro";
import { projects } from "../data/site-data";

const ProjectsPage = () => {
    return (
        <>

            <PageIntro
                title="Projekter"
                description="Et udvalg af ting jeg har bygget."
            />

            <Section>
                <div className="grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} {...project} />
                    ))}
                </div>
            </Section>
        </>
    );
};

export default ProjectsPage;