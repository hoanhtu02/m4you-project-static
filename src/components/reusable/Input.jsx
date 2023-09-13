export default function Input({ type, name, placeholder, className }) {
    className += "  px-8 py-4 rounded-xl  outline-none";
    return <input className={className} type={type} name={name} placeholder={placeholder} />;
}
