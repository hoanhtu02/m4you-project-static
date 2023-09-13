export default function Button({ children, className }) {
    className +=
        " px-[35px] bg-[#F6CA52] text-[#636255] rounded-full text-[20px] py-[14px] hover:text-[#000000] hover:bg-yellow-500";
    return <button className={className}>{children}</button>;
}
