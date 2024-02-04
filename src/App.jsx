import "./App.css";
import { Company } from "./components/Company";

import { Destination } from "./components/Destination";
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
      {/* Destination section */}
      <Destination />
      {/* akhir Destination section */}
      {/* Company section */}
      <Company />
      {/* Akhir Company section */}
      <div className="mt-80"></div>
    </>
  );
}

export default App;
