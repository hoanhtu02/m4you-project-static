export default function Title({ children, className = "" }) {
    className += " text-4xl font-bold";
    return <h1 className={className}>{children}</h1>;
}
