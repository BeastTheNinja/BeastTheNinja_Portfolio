type SocialLink = {
    label: string;
    href: string;
};

type SocialLinksProps = {
    links: SocialLink[];
    className?: string;
};

export const SocialLinks = ({ links, className = "" }: SocialLinksProps) => {
    return (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};