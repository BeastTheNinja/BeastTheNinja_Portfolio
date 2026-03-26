// ButtonLink
import Link from "next/link";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    external?: boolean;
    ariaLabel?: string;
};

export const ButtonLink = ({
    href,
    children,
    variant = "primary",
    external = false,
    ariaLabel,
}: ButtonLinkProps) => {
    const base =
        "inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors sm:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
    const style =
        variant === "primary"
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10";

    const isSafeHref = (value: string) =>
        value.startsWith("/") ||
        value.startsWith("#") ||
        /^https?:\/\//i.test(value) ||
        /^mailto:/i.test(value) ||
        /^tel:/i.test(value);

    const safeHref = isSafeHref(href) ? href : "#";

    if (external) {
        return (
            <a href={safeHref} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`} aria-label={ariaLabel}>
                {children}
                <span className="sr-only"> (åbner i ny fane)</span>
            </a>
        );
    }

    return (
        <Link href={safeHref} className={`${base} ${style}`} aria-label={ariaLabel}>
            {children}
        </Link>
    );
};