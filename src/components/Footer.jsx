import NormalText from "./reusable/NormalText";
import TextSpecial from "./reusable/TextSpecial";

export default function Footer() {
    return (
        <footer>
            <NormalText className={"mt-4 ml-6 flex gap-12"}>
                <div>
                    Email:{" "}
                    <TextSpecial>
                        <a href="#">didaudo@gmail.com</a>
                    </TextSpecial>
                </div>
                <div>
                    Fanpage:{" "}
                    <TextSpecial>
                        <a href="#">didaudo@gmail.com</a>
                    </TextSpecial>
                </div>
            </NormalText>
        </footer>
    );
}
