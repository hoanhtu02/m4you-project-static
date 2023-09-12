export default function Button({ children, className }) {
    className += " px-10 bg-yellow-300 rounded-full text-2xl py-3 hover:bg-yellow-400";
    return <button className={className}>{children}</button>;
}
