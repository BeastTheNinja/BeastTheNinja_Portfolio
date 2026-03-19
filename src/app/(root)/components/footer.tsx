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
        <footer className="border-t border-slate-700/80 bg-slate-900/70">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-slate-400">© {year} {name}</p>
                <SocialLinks links={links} />
            </div>
        </footer>
    );
};