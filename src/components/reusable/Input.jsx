export default function Input({ type, name, placeholder, className }) {
    className +=
        "  lg:px-6 lg:py-2 xl:px-8 xl:py-4 md:px-[1rem] md:py-2 lg:text-[16px] md:text-[12px] text-[13px] px-2 py-1 rounded-md xl:rounded-xl md:rounded-md  outline-none";
    return <input className={className} type={type} name={name} placeholder={placeholder} />;
}
