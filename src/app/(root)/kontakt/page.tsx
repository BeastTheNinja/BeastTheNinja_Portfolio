import { PageIntro } from "../components/pageintro";
import { ButtonLink } from "../components/buttonlink";
import { contactEmail, contactLinks, contactPhone } from "../data/site-data";
import { SocialLinks } from "../components/sociallinks";
import { Section } from "../components/section";

const ContactPage = () => {
    return (
        <>
            <PageIntro
                title="Kontakt"
                description="Du kan skrive til mig eller finde mig på GitHub/LinkedIn."
                eyebrow="Contact"
                actions={
                    <>
                        <ButtonLink href={contactEmail}>Send mail</ButtonLink>
                        <ButtonLink href={contactPhone}>Ring</ButtonLink>
                    </>
                }
            />
            <Section>
                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4 shadow-sm shadow-black/30 sm:p-5">
                    <p className="mb-3 text-sm text-slate-200">Find mig også her:</p>
                    <SocialLinks links={contactLinks} />
                </div>
            </Section>
        </>
    );
};

export default ContactPage;