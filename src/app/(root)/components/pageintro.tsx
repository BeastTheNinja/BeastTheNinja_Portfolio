type PageIntroProps = {
    title: string;
    description?: string;
    eyebrow?: string;
    actions?: React.ReactNode;
};

export const PageIntro = ({ title, description, eyebrow, actions }: PageIntroProps) => {
    return (
        <div className="mb-6 rounded-2xl border border-slate-700 bg-slate-800/70 p-4 shadow-sm shadow-black/30 sm:mb-8 sm:p-6">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">{eyebrow}</p> : null}
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h1>
            {description ? <p className="mt-2 max-w-2xl text-slate-200">{description}</p> : null}
            {actions ? <div className="mt-5 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
    );
};

