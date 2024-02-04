import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      {/* Navbar Section */}

      <Header />
      {/* Akhir Navbar Section */}
      {/*  Hero section */}
      <Hero />
      {/* akhir Hero section */}
      <div className="bg-[#29BF08] opacity-30 bg-center h-screen"></div>
      {/* akhir carosel section */}
    </>
  );
}

export default App;
