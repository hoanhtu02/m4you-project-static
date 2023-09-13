import NormalText from "./reusable/NormalText";
import TextSpecial from "./reusable/TextSpecial";
import Title from "./reusable/Title";
export default function Story() {
    return (
        <section className="bg-[#f2f5fc] py-8 ">
            <main className="w-10/12 mx-auto">
                <Title className={"uppercase text-[#e2cd5f] mb-7"}>
                    Câu chuyện ra đời của m4you
                </Title>
                <NormalText>
                    <p className="mb-5">
                        Mỗi người chúng ta đều có mong muốn phát triển cuộc sống tài chính cá nhân.
                        Mỗi người sẽ có những lựa chọn, cách làm khác nhau, có người tập trung phát
                        triển con đường nghề nghiệp, đi lên những cấp bậc mới để có thu nhập tốt
                        hơn, có người đầu tư chứng khoán để tạo ra thêm nguồn thu nhập theo năm
                        tháng, có người mua bất động sản để tạo ra dòng tiền cho thuê hàng tháng,
                        hoặc bán giá cao ở một thời điểm trong tương lai để mang lại nguồn thu nhập
                        chênh lệch, có người sẽ hợp tác mua bán để tìm thêm thu nhập hoặc có người
                        xây dựng một doanh nghiệp kinh doanh.
                    </p>

                    <p className="mb-5">
                        Bằng cách này hay cách khác, mỗi người trong chúng ta đều có mong muốn phát
                        triển cuộc sống tài chính cá nhân để mang lại cuộc sống tốt hơn cho bản
                        thân, cho gia đình, cho cha mẹ, những người thân yêu và xa hơn là góp phần
                        mang lại giá trị cho cộng đồng, xã hội. Tuy nhiên, trong cuộc sống, chúng ta
                        thường thiếu đi người thầy, thiếu những góc nhìn, thiếu những kiến thức giúp
                        chúng ta đưa ra nhiều đánh giá để có những lựa chọn tốt phù hợp hơn với bối
                        cảnh của riêng mình.
                    </p>
                    <p className="mb-5">
                        Đôi khi, qua một cuộc trò chuyện, từ một bài đăng trên mạng xã hội về một sự
                        trải nghiệm, một sự chia sẻ hay một câu chuyện truyền cảm hứng, chúng ta tìm
                        thấy những góc nhìn mới. Những người cùng có sự quan tâm, đồng cảm sẽ có sự
                        kết nối với nhau. Khi chúng ta kết nối với nhau và cùng chia sẻ những câu
                        chuyện, những trải nghiệm sống, chúng ta có thêm những góc nhìn mới, những
                        kiến thức mới và cách làm mới để giải quyết một vấn đề hoặc để đạt được mục
                        tiêu về tài chính cá nhân.
                    </p>
                    <p className="mb-5">
                        Từ sự kết nối và chia sẻ, chúng ta đúc kết những thông tin, kiến thức thành
                        những bài học và áp dụng vào cuộc sống tài chính cá nhân. Chúng ta tìm kiếm
                        những bài học liên quan, chúng ta tìm những công cụ hỗ trợ, chúng ta làm và
                        chúng ta trải nghiệm. Những trãi nghiệm quý giá ấy mang lại ý nghĩa lớn cho
                        cuộc sống của chúng ta. Chúng ta mang những ý nghĩa ấy chia sẻ lại cho người
                        thân, cho bạn bè và cộng đồng để được trải nghiệm sâu sắc hơn và lan toả giá
                        trị cho cộng đồng, xã hội.
                    </p>

                    <p className="mb-5">
                        Là bậc làm cha mẹ, đặc biệt có con trẻ từ 5 tuổi trở lên, chúng ta luôn mong
                        muốn dạy cho con những tư duy về tài chính để con có nền tảng trong tương
                        lai. Chúng ta học kiến thức, vận dụng vào cuộc sống tài chính cá nhân, cảm
                        nhận sâu sắc và dùng chính trải nghiệm ấy để dạy lại cho con qua những bài
                        học đơn giản nhất.
                    </p>

                    <p className="mb-5">
                        Chúng ta nghe, chúng ta thấy, chúng ta học, chúng ta làm, chúng ta trải
                        nghiệm và chúng ta chia sẻ, đó chính là Giá Trị Cốt Lõi M4You mong muốn xây
                        dựng giúp Kết nối và chia sẻ, mang lại tư duy và công cụ hỗ trợ tài chính cá
                        nhân cho cộng đồng.
                    </p>

                    <TextSpecial className={" text-lg font-bold"}>
                        Nghĩ lớn - Làm nhỏ - Từ nhỏ - Đến lớn - Tư duy - Tiền bạc
                    </TextSpecial>
                </NormalText>
            </main>
        </section>
    );
}
