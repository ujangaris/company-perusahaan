import { useState } from "react";

import "./App.css";

function App() {
  // Hamburger
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <>
      {/* Navbar Section */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex items-center">
              <a href="#home" className="font-bold text-lg  block py-6">
                <img
                  src="../src/assets/Logo 1.png"
                  alt="Logo"
                  className="size-7"
                />
              </a>
              <h1 className="text-6 font-bold">
                PT.BINA <span className="text-red-600"> DINAMITA</span> RAMA
              </h1>
            </div>
            <div className="px-4 flex items-center">
              <button
                onClick={toggleHamburger}
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 ${
                  isHamburgerActive ? "hamburger-active" : ""
                }`}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Akhir Navbar Section */}
    </>
  );
}

export default App;
