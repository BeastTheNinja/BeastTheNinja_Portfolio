import { PageIntro } from "../components/pageintro";
import { Section } from "../components/section";

const AboutPage = () => {
    return (
        <>
            <PageIntro title="Om mig" description="Kort om min baggrund, fokus og hvordan jeg bygger." eyebrow="About" />
            <Section title="Min profil">
                <p className="text-zinc-700">...</p>
            </Section>
        </>
    );
};

export default AboutPage;