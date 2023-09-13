import ImageBox from "./review/ImageBox";
import Overview from "./review/Overview";
export default function Review() {
    return (
        <section className="bg-[#f2f5fa] py-8">
            <main className="xl:w-10/12 lg:w-8/12 md:w-8/12 w-11/12 mx-auto grid justify-center 2xl:grid-cols-[600px_1fr] xl:grid-cols-[400px_1fr] lg:grid-cols-[1fr]">
                <ImageBox />
                <Overview />
            </main>
        </section>
    );
}
