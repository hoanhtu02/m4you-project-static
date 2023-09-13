import Button from "../reusable/Button";
import Input from "../reusable/Input";
import NormalText from "../reusable/NormalText";
export default function FormContact() {
    return (
        <form>
            <div className="grid grid-cols-3 gap-10 mb-12">
                <Input type="text" name="name" placeholder="Tên của bạn" />
                <Input type="text" name="email" placeholder="Email của bạn" />
                <Input type="text" name="phone" placeholder="Số điện thoại của bạn" />
            </div>
            <NormalText className={"font-bold text-xl mb-8"}>Bạn đang ở giai đoạn: </NormalText>
            <div className="grid grid-cols-3 gap-10 mb-8 text-white ">
                <label className="container-radio">
                    <input type="radio" name="phase" />
                    <span className="checkmark"></span>
                    <p>Đi làm dưới 5 năm</p>
                </label>
                <label className="container-radio">
                    <input type="radio" name="phase" />
                    <span className="checkmark"></span>
                    <p>Đi làm trên 5 năm</p>
                </label>
                <label className="container-radio">
                    <input type="radio" name="phase" />
                    <span className="checkmark"></span>
                    <p>Có con nhỏ từ 5 tuổi</p>
                </label>
            </div>
            <NormalText className={"font-bold text-xl mb-8"}>
                Chia sẻ nhu cầu, mong muốn của bạn cần được chúng tôi hỗ trợ
            </NormalText>
            <textarea
                name="shared"
                id="shared"
                className="rounded-xl w-full mb-8 p-4 outline-none"
                placeholder="Nhu cầu, mong muốn của bạn là gì?"
                rows="3"
            ></textarea>
            <div className="flex justify-end">
                <Button>Miễn phí 2 năm</Button>
            </div>
        </form>
    );
}
