type SectionProps = {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

export const Section = ({ title, subtitle, children, className = "" }: SectionProps) => {
    return (
        <section className={`py-6 sm:py-8 ${className}`}>
            <div className="mb-5 sm:mb-6">
                {title && <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>}
                {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
            </div>
            {children}
        </section>
    );
};