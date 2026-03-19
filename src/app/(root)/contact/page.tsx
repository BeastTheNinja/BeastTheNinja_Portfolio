import { PageIntro } from "../components/pageintro";
import { ButtonLink } from "../components/buttonlink";
import { contactEmail, contactLinks, contactPhone } from "../data/site-data";
import { SocialLinks } from "../components/sociallinks";

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
           <SocialLinks links={contactLinks} />
        </>
    );
};

export default ContactPage;