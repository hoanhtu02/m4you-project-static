export default function Title({ children, className = "" }) {
    className += " text-[32px] font-bold tracking-wide";
    return <h1 className={className}>{children}</h1>;
}
