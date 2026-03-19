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
                "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                featured ? "ring-1 ring-zinc-300" : "",
            ].join(" ")}
        >
            <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
            <p className="mt-2 text-sm text-zinc-600">{summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                    <Badge key={item} label={item} />
                ))}
            </div>

            <div className="mt-5 flex gap-2">
                {demoUrl ? <ButtonLink href={demoUrl}>Live</ButtonLink> : null}
                {repoUrl ? (
                    <ButtonLink href={repoUrl} variant="secondary">
                        Code
                    </ButtonLink>
                ) : null}
            </div>
        </article>
    );
};