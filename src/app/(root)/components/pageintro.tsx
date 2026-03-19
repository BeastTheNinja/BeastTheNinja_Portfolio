type PageIntroProps = {
    title: string;
    description?: string;
    eyebrow?: string;
    actions?: React.ReactNode;
};

export const PageIntro = ({ title, description, eyebrow, actions }: PageIntroProps) => {
    return (
        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{eyebrow}</p> : null}
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">{title}</h1>
            {description ? <p className="mt-2 max-w-2xl text-zinc-600">{description}</p> : null}
            {actions ? <div className="mt-5 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
    );
};

