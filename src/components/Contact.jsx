import Title from "./reusable/Title";
import FormContact from "./contact/FormContact";
export default function Contact() {
    return (
        <section className="bg-[#68bcd4] py-8">
            <main className="md:w-8/12 w-11/12 mx-auto grid align-middle justify-center">
                <Title className="font-[700] text-center text-[#e9fffb] xl:mb-16 lg:mb-7 mb-5">
                    MIMA MIMO - Làm sao để phát triển tài chính cá nhân?
                </Title>
                <FormContact />
            </main>
        </section>
    );
}
