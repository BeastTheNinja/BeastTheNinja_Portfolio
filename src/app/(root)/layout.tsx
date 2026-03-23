import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { contactLinks } from "./data/site-data";
import { SpeedInsights } from "@vercel/speed-insights/next";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen overflow-x-hidden flex flex-col bg-slate-900 text-slate-100">
            <Header
                title="BeastTheNinja Portfolio"
                description="Sebastian Larsen"
                navItems={navItems}
            />
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">{children}</main>
            <Footer name="BeastTheNinja" links={contactLinks} />
            <SpeedInsights />
        </div>
    );
};

export default Layout;