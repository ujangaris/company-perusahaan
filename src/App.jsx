import { Home } from "./components/Home/Home";
import { Client } from "./components/Client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
function App() {
  return (
    <>
      {/* Navbar Section */}
      <BrowserRouter>
        <Header />
        {/* Akhir Navbar Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          
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
