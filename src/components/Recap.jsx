import Title from "./reusable/Title";

export default function Recap() {
    return (
        <section className="bg-[#68bcd4] py-8">
            <main className="sm:w-8/12 w-11/12 mx-auto grid align-middle justify-center">
                <Title
                    className={
                        "uppercase text-white text-center leading-[1.4] sm:py-20 py-15 md:text-[30px] lg:text-[40px] text-[20px]"
                    }
                >
                    <p>ứng dụng m4you trên di động</p> sẽ đếm sớm để phục vụ bạn
                </Title>
            </main>
        </section>
    );
}
