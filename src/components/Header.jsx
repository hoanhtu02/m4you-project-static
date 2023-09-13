import HeaderLogo from "./header/HeaderLogo";
export default function Header() {
    return (
        <header className="flex justify-start">
            <main className="md:w-10/12 w-11/12 mx-auto sm:mb-4">
                <HeaderLogo />
            </main>
        </header>
    );
}
