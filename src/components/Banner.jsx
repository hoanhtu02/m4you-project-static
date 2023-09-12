import Title from "./reusable/Title";
import Button from "./reusable/Button";
import TextSpecial from "./reusable/TextSpecial";
import NormalText from "./reusable/NormalText";
export default function Banner() {
    return (
        <section className="w-7/12 mx-auto grid grid-cols-2 grid-rows-2 pt-10 mb-6">
            <Title className={"col-start-1 col-end-2 row-start-1 row-end-2 pr-10  text-[#7db7a9]"}>
                <p className="uppercase">mima mimo:</p>
                <p className="mt-3">Làm sao để phát triển tài chính cá nhân?</p>
            </Title>
            <div
                className={
                    "col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end mr-5 align-middle"
                }
            >
                <p>
                    <Button className={"mt-[50px]"}>Miễn phí 2 năm</Button>
                </p>
            </div>
            <NormalText className={"mt-8 "}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <TextSpecial>Exercitationem </TextSpecial>similique dicta cum eaque consequuntur,
                expedita laborum .{" "}
                <TextSpecial>Et laboriosam nesciunt illo perspiciatis adipisci</TextSpecial>, enim
                itaque, ea temporibus aliquid magni neque voluptates.
            </NormalText>
        </section>
    );
}
