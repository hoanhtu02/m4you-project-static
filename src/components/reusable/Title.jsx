export default function Title({ children, className = "" }) {
    className += " xl:text-[32px] lg:text-[28px] md:text-[20px] text-[17px] font-bold  tracking-wide";
    return <h1 className={className}>{children}</h1>;
}
