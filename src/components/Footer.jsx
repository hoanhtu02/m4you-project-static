import NormalText from "./reusable/NormalText";
import TextSpecial from "./reusable/TextSpecial";

export default function Footer() {
    return (
        <footer className="flex items-center md:w-10/12 w-11/12 mx-auto">
            <NormalText className="flex  sm:gap-10 text-[12px] gap-4 sm:mx-0">
                <p className="flex sm:gap-2 gap-1">
                    Email:{" "}
                    <a href="mailto:didaudo@gmail.com">
                        <TextSpecial>didaudo@gmail.com</TextSpecial>
                    </a>
                </p>
                <p className="flex sm:gap-2 gap-1">
                    Fanpage:{" "}
                    <a href="#">
                        <TextSpecial>didaudo@gmail.com</TextSpecial>
                    </a>
                </p>
            </NormalText>
        </footer>
    );
}
