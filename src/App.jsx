// import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Recap from "./components/Recap";
import Footer from "./components/Footer";

import "./index.css";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Banner />
                <Review />
                <Contact />
                <Story />
                <Recap />
            </Main>
            <Footer />
        </>
    );
}

export default App;
