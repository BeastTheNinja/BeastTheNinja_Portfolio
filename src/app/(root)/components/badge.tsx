type BadgeProps = {
    label: string;
};

export const Badge = ({ label }: BadgeProps) => {
    return (
        <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
            {label}
        </span>
    );
};