// Container
type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const Container = ({ children, className = "" }: ContainerProps) => {
    return <div className={`mx-auto w-full max-w-5xl px-6 ${className}`}>{children}</div>;
};