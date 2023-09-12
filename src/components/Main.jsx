export default function Main({ children }) {
    return (
        <main
            className="grid"
            style={{
                gridTemplateRows: "repeat(5,minmax(min-content, max-content))",
            }}
        >
            {children}
        </main>
    );
}
