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
            <ul className="flex flex-wrap items-center gap-2 rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
                {items.map((item) => (
                    <li key={item.href}>
                        <NavLink href={item.href} label={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};