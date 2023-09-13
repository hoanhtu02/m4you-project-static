import Title from "./reusable/Title";
import FormContact from "./contact/FormContact";
export default function Contact() {
    return (
        <section className="bg-[#68bcd4] py-8">
            <main className="w-8/12 mx-auto grid align-middle justify-center">
                <Title className=" font-[700] text-[#e9fffb] mb-16">
                    MIMA MIMO - Làm sao để phát triển tài chính cá nhân?
                </Title>
                <FormContact />
            </main>
        </section>
    );
}
