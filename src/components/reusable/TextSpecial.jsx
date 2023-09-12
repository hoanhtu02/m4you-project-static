export default function TextSpecial({ children, className }) {
    className += " text-yellow-400";
    return <span className={className}>{children}</span>;
}
