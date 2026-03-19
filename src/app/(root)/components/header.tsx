import { NavBar, type NavItem } from "./nav";

interface HeaderProps {
    title: string;
    description?: string;
    navItems: NavItem[];
}

export const Header = ({ title, description, navItems }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h1>
                    {description ? (
                        <p className="mt-0.5 text-xs text-zinc-600">{description}</p>
                    ) : null}
                </div>
                <NavBar items={navItems} />
            </div>
        </header>
    );
};