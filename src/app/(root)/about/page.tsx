import Image from "next/image";
import { PageIntro } from "../components/pageintro";
import { Section } from "../components/section";
import { ButtonLink } from "../components/buttonlink";

const profile = {
    name: "Sebastian Larsen",
    role: "Studerende Frontend Developer",
    location: "Aalborg, Danmark",
    bio: [
        "Jeg hedder Sebastian Larsen og er studerende frontend-udvikler med base i Aalborg.",
        "Jeg bygger moderne weboplevelser med React, Vite, og er begyndt at lære Next.js og TypeScript med fokus på performance og brugervenlighed.",
        "Lige nu søger jeg muligheder for at udvikle mig i et team, hvor jeg kan bidrage til rigtige produkter.",
    ],
    skills: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma", "MySQL", "SCSS",],
};

const AboutPage = () => {
    return (
        <>
            <PageIntro
                title="Om mig"
                description={`${profile.name} • ${profile.role} • ${profile.location} • Søger praktik/jobmuligheder`}
                eyebrow="About"
            />

            <Section title="Min profil">
                <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                        <Image
                            src="/Sebastian.jpg"
                            alt={`${profile.name} profilbillede`}
                            width={220}
                            height={260}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-4">
                        {profile.bio.map((text) => (
                            <p key={text} className="text-zinc-700">
                                {text}
                            </p>
                        ))}

                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <ButtonLink href="/contact">Kontakt mig</ButtonLink>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default AboutPage;