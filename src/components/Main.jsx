export default function Main({ children }) {
    return (
        <main className="grid sm:p-0 grid-cols-1 grid-rows-[repeat(5,minmax(min-content,max-content))]">
            {children}
        </main>
    );
}
