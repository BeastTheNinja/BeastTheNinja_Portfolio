type SectionProps = {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

export const Section = ({ title, subtitle, children, className = "" }: SectionProps) => {
    return (
        <section className={`py-8 ${className}`}>
            <div className="mb-6">
                {title && <h2 className="text-3xl font-semibold tracking-tight text-slate-100">{title}</h2>}
                {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
            </div>
            {children}
        </section>
    );
};