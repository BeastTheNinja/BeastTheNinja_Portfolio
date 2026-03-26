import { Badge } from "./badge";
import { ButtonLink } from "./buttonlink";

type ProjectCardProps = {
    name: string;
    summary: string;
    stack: string[];
    demoUrl?: string;
    repoUrl?: string;
    featured?: boolean;
};

export const ProjectCard = ({
    name,
    summary,
    stack,
    demoUrl,
    repoUrl,
    featured = false,
}: ProjectCardProps) => {
    return (
        <article
            className={[
                "rounded-2xl border border-slate-700 bg-slate-800/70 p-4 shadow-sm shadow-black/30 sm:p-5",
                featured ? "ring-1 ring-indigo-400/50" : "",
            ].join(" ")}
        >
            <h3 className="text-lg font-semibold tracking-tight text-slate-100">{name}</h3>
            <p className="mt-2 text-sm text-slate-200">{summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                    <Badge key={item} label={item} />
                ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {demoUrl ? (
                    <ButtonLink
                        href={demoUrl}
                        external
                        ariaLabel={`Se live demo af ${name} (åbner i ny fane)`}
                    >
                        Live
                    </ButtonLink>
                ) : null}
                {repoUrl ? (
                    <ButtonLink
                        href={repoUrl}
                        variant="secondary"
                        external
                        ariaLabel={`Se kildekode for ${name} (åbner i ny fane)`}
                    >
                        Code
                    </ButtonLink>
                ) : null}
            </div>
        </article>
    );
};