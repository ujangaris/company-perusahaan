import "./App.css";

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

      <div className="mt-80"></div>
    </>
  );
}

export default App;
