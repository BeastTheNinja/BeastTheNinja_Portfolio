import { NavLink } from "./navLink";

export type NavItem = {
    href: string;
    label: string;
};

type NavBarProps = {
    items: NavItem[];
};

export const NavBar = ({ items }: NavBarProps) => {
    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 p-1 shadow-sm shadow-black/20">
                {items.map((item) => (
                    <li key={item.href}>
                        <NavLink href={item.href} label={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};