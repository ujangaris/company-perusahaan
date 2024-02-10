import { Home } from "./components/Home/Home";
import { Client } from "./components/Client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Header />
      {/* Akhir Navbar Section */}
      {/*  Hero section */}
      <Home />
      {/* Client section */}
      <Client />
      {/* akhir Client section */}
      {/* Footer section */}
      <Footer />
      {/* akhir Footer section */}
      {/* <div className="mt-80"></div> */}
    </>
  );
}

export default App;
