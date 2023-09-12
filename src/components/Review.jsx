import ImageBox from "./review/ImageBox";
import Overview from "./review/Overview";
export default function Review() {
    return (
        <section className="bg-[#f2f5fa] py-8">
            <main className="w-10/12 mx-auto grid align-middle justify-center" style={{gridTemplateColumns: "600px 1fr"}}>
                <ImageBox />
                <Overview />
            </main>
        </section>
    );
}
