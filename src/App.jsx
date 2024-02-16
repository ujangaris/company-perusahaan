import { Home } from "./components/Home/Home";
import { Client } from "./components/Client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./components/pages/About/AboutPage";
import { ContactPage } from "./components/pages/Contact/ContactPage";
import { Whatsup } from "./components/atoms/Whatsup";
function App() {
  return (
    <>
      {/* Navbar Section */}
      <BrowserRouter>
        <Header />
        {/* Akhir Navbar Section */}
        <Whatsup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Client section */}
        <Client />
        {/* akhir Client section */}
        {/* Footer section */}
        <Footer />
        {/* akhir Footer section */}
      </BrowserRouter>
      {/* <div className="mt-80"></div> */}
    </>
  );
}

export default App;
