import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Gifts from "./components/Pages/Gifts/Gifts";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="*" element={<div>Ya lost buddy?</div>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
