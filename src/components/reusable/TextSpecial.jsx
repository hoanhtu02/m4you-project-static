export default function TextSpecial({ children, className }) {
    className += " text-[#ECB51F]";
    return <span className={className}>{children}</span>;
}
