import HeaderLogo from "./header/HeaderLogo";
export default function Header() {
    return (
        <header className="flex justify-start">
            <main className="w-10/12 mx-auto">
                <HeaderLogo />
            </main>
        </header>
    );
}
