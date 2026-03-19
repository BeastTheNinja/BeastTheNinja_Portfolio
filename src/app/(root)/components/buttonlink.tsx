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
            ? "bg-zinc-900 text-white hover:bg-zinc-700"
            : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100";

    return (
        <Link href={href} className={`${base} ${style}`}>
            {children}
        </Link>
    );
};