export default function Button({ children, className }) {
    className +=
        " xl:px-[35px] bg-[#F6CA52] text-[#636255] rounded-full lg:text-[16px] xl:text-[20px] lg:py-[10px] lg:px-[30px] xl:py-[14px] hover:text-[#000000] hover:bg-yellow-500 md:py-[6px] md:px-[26px] sm:text-[14px] sm:py-[6px] sm:px-[24px] py-[6px] px-[20px] text-[12px]";
    return <button className={className}>{children}</button>;
}
