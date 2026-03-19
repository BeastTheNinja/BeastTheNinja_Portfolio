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
        <nav aria-label="Main navigation" className="w-full overflow-x-auto md:w-auto md:overflow-visible">
            <ul className="mx-auto flex w-max min-w-full flex-nowrap items-center justify-start gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 p-1 shadow-sm shadow-black/20 md:w-auto md:min-w-0 md:justify-center md:rounded-full">
                {items.map((item) => (
                    <li key={item.href} className="shrink-0">
                        <NavLink href={item.href} label={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};