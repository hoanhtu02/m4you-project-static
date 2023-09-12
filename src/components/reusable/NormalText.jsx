export default function NormalText({ children, className }) {
    className += " row-start-2 row-end-3 col-start-1 col-end-3 text-lg";
    return <p className={className}>{children}</p>;
}
