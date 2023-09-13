import Title from "../reusable/Title";
import NormalText from "../reusable/NormalText";
export default function Overview() {
    return (
        <div className="xl:mx-[100px]">
            <Title className=" text-[#7db7a9]">
                <div>Tư duy và công cụ</div> hỗ trợ tài chính cá nhân
            </Title>
            <NormalText className={"mt-6"}>
                Bạn đã từng làm nhiều cách khác nhau để phát triển tài chính cá nhân.
                <p className={"font-bold mt-4"}>Nhưng có thể:</p>
                <ul className="list-disc pl-[40px] ">
                    <li>Bạn thiếu người thầy, người dẫn dắt, thiếu những góc nhìn và kiến thức.</li>
                    <li>
                        Chưa có những công cụ hỗ trợ tập trung để giúp bạn hình dung rõ ràng, lập kế
                        hoạch và đi đến mục tiêu kế hoạch tài chính cá nhân.
                    </li>
                </ul>
                <p className={"font-bold mt-4"}>M4YOU mang đến cho bạn:</p>
                <ul className="list-disc pl-[40px] ">
                    <li>
                        Những tư duy, bài học được đúc kết từ trải nghiệm thực tế sẽ:
                        <ul className="list-disc pl-[40px] ">
                            <li>Giúp bạn có thêm góc nhìn và kiến thức mới.</li>
                            <li>
                                Giúp đưa ra nhiều đánh giá để có những lựa chọn phù hợp với bối cảnh
                                của riêng mình.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Những công cụ được kết nối với nhau sẽ:
                        <ul className="list-disc pl-[40px] ">
                            <li>
                                Giúp bạn hình dung được bức tranh tài chính của mình đang ở đâu?
                            </li>
                            <li>
                                Giúp bạn lập kế hoạch sau khi trả lời câu hỏi Tôi muốn gì? Tôi phải
                                bắt đầu từ đâu? và làm như thế nào?
                            </li>
                            <li>
                                Giúp bạn dạy con trẻ những tư duy về tài chính để con có nền tảng
                                trong tương lai.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className={"font-bold mt-4"}>Và hơn thế:</p>
                <ul className="list-disc pl-[40px] ">
                    <li>
                        Chúng ta học, chúng ta trải nghiệm, chúng ta cải thiện bản thân và chúng ta
                        dạy con, chúng ta chia sẻ lại những giá trị quý báu ấy cho cộng đồng.
                    </li>
                </ul>
            </NormalText>
        </div>
    );
}
