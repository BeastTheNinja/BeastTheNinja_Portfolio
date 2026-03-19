type BadgeProps = {
    label: string;
};

export const Badge = ({ label }: BadgeProps) => {
    return (
        <span className="inline-flex rounded-full border border-slate-600 bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-100">
            {label}
        </span>
    );
};