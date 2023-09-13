export default function NormalText({ children, className }) {
    className += " row-start-2 row-end-3 col-start-1 col-end-3 lg:text-[16px] xl:text-[20px] text-[15px] ";
    return <p className={className}>{children}</p>;
}
