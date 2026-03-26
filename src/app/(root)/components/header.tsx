import { NavBar, type NavItem } from "./nav";

interface HeaderProps {
    title: string;
    description?: string;
    navItems: NavItem[];
}

export const Header = ({ title, description, navItems }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-slate-900/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4">
                <div>
                    <p className="text-base font-semibold tracking-tight text-slate-100">{title}</p>
                    {description ? <p className="mt-0.5 text-xs text-slate-300">{description}</p> : null}
                </div>
                <NavBar items={navItems} />
            </div>
        </header>
    );
};