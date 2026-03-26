type SocialLink = {
    label: string;
    href: string;
};

type SocialLinksProps = {
    links: SocialLink[];
    className?: string;
};

export const SocialLinks = ({ links, className = "" }: SocialLinksProps) => {
    const isSafeHref = (value: string) =>
        value.startsWith("/") ||
        /^https?:\/\//i.test(value) ||
        /^mailto:/i.test(value) ||
        /^tel:/i.test(value);

    return (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={isSafeHref(link.href) ? link.href : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (åbner i ny fane)`}
                    className="text-sm text-slate-300 transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                >
                    {link.label}
                    <span className="sr-only"> (åbner i ny fane)</span>
                </a>
            ))}
        </div>
    );
};