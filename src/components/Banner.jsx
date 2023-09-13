import Title from "./reusable/Title";
import Button from "./reusable/Button";
import TextSpecial from "./reusable/TextSpecial";
import NormalText from "./reusable/NormalText";
export default function Banner() {
    return (
        <section className="w-6/12 mx-auto grid grid-cols-2 grid-rows-2 mb-6">
            <Title className={"col-start-1 col-end-2 row-start-1 row-end-2  text-[#7db7a9]"}>
                <p className="uppercase">mima mimo:</p>
                <p className="leading-9">
                    Làm sao để phát triển <pre /> tài chính cá nhân?
                </p>
            </Title>
            <div
                className={
                    "col-start-2 col-end-3 row-start-1 row-end-2 grid content-center justify-end"
                }
            >
                <Button className={"mx-auto"}>Miễn phí 2 năm</Button>
            </div>
            <NormalText className={"mt-8 font-[500]"}>
                Bạn muốn phát triển tài chính cá nhân, nhưng biết bắt đầu từ đâu và làm như thế nào?
                <TextSpecial> M4YOU</TextSpecial> mang đến cho bạn những{" "}
                <TextSpecial>tư duy và công cụ hỗ trợ tài chính cá nhân</TextSpecial>.
            </NormalText>
        </section>
    );
}
