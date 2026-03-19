import { SocialLinks } from "./sociallinks";

type SocialLink = {
    label: string;
    href: string;
};

type FooterProps = {
    name: string;
    links: SocialLink[];
};

export const Footer = ({ name, links }: FooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200/70 bg-white/70">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-zinc-500">© {year} {name}</p>
                <SocialLinks links={links} />
            </div>
        </footer>
    );
};