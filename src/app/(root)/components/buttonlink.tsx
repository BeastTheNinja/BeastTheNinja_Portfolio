// ButtonLink
import Link from "next/link";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export const ButtonLink = ({ href, children, variant = "primary" }: ButtonLinkProps) => {
    const base = "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors";
    const style =
        variant === "primary"
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10";

    return (
        <Link href={href} className={`${base} ${style}`}>
            {children}
        </Link>
    );
};