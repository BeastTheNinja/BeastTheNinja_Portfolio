"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    label: string;
};

export const NavLink = ({ href, label }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={[
                "inline-flex rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
            ].join(" ")}
        >
            {label}
        </Link>
    );
};