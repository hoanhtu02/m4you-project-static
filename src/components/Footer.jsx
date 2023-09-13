import NormalText from "./reusable/NormalText";
import TextSpecial from "./reusable/TextSpecial";

export default function Footer() {
    return (
        <footer className="flex items-center md:w-10/12 w-11/12 mx-auto">
            <NormalText className="flex  gap-10">
                <p className="flex gap-2">
                    Email:{" "}
                    <a href="mailto:didaudo@gmail.com">
                        <TextSpecial>didaudo@gmail.com</TextSpecial>
                    </a>
                </p>
                <p className="flex gap-2">
                    Fanpage:{" "}
                    <a href="#">
                        <TextSpecial>didaudo@gmail.com</TextSpecial>
                    </a>
                </p>
            </NormalText>
        </footer>
    );
}
