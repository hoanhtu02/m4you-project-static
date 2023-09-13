import Button from "../reusable/Button";
import Input from "../reusable/Input";
import NormalText from "../reusable/NormalText";
import RadioButton from "../reusable/RadioButton";
export default function FormContact() {
    return (
        <form>
            <div className="grid grid-cols-3 md:gap-10 gap-4 xl:mb-12 lg:mb-6 md:mb-4 mb-4">
                <Input type="text" name="name" placeholder="Tên của bạn" />
                <Input type="text" name="email" placeholder="Email của bạn" />
                <Input type="text" name="phone" placeholder="Số điện thoại của bạn" />
            </div>
            <NormalText className={"font-bold md:text-xl xl:mb-8 lg:mb-2 md:mb-2 mb-3  "}>
                Bạn đang ở giai đoạn:{" "}
            </NormalText>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-4 xl:mb-8 lg:mb-2 md:mb-2 mb-3 text-white ">
                <RadioButton title={"Đi làm dưới 5 năm"} />
                <RadioButton title={"Đi làm trên 5 năm"} />
                <RadioButton title={"Có con nhỏ từ 5 tuổi"} />
            </div>
            <NormalText className={"font-bold lg:text-xl xl:mb-8 lg:mb-2 md:mb-2  mb-3"}>
                Chia sẻ nhu cầu, mong muốn của bạn cần được chúng tôi hỗ trợ
            </NormalText>
            <textarea
                name="shared"
                id="shared"
                className="rounded-xl w-full xl:mb-8 lg:mb-2 lg:p-4 outline-none px-[1rem] py-2  md:text-[12px] lg:text-[16px] md:mb-3  mb-3 text-[15px] "
                placeholder="Nhu cầu, mong muốn của bạn là gì?"
                rows="3"
            ></textarea>
            <div className="flex justify-end">
                <Button>Miễn phí 2 năm</Button>
            </div>
        </form>
    );
}
