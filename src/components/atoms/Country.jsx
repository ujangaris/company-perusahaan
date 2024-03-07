import React, { useState } from "react";
import flagIndo from "../../assets/flag-indonesia.png";
import flagEng from "../../assets/flag-united-kingdom.png";

export const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("England"); // Set default flag ke England
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function updateCountry(countryName) {
    setSelectedCountry(countryName);
    setDropdownOpen(false); // Tutup dropdown setelah memilih
  }

  return (
    <>
      <div className="relative inline-block mt-2 ">
        <div>
          <span className="rounded-md mt-1">
            <button
              type="button"
              className="inline-flex justify-center items-center  text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:rounded-md active:bg-gray-50 active:text-gray-800"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedCountry && (
                <img
                  src={selectedCountry === "Indonesia" ? flagIndo : flagEng}
                  alt={
                    selectedCountry === "Indonesia"
                      ? "Indonesia Flag"
                      : "England Flag"
                  }
                  className="w-8 h-6 -mr-1 "
                />
              )}
              <svg
                className=" h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>

        {dropdownOpen && (
          <div
            className="origin-top absolute  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button
                className="w-full flex justify-center items-center px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                onClick={() => updateCountry("Indonesia")}
              >
                <img
                  src={flagIndo}
                  alt="Indonesia Flag"
                  className="-ml-2 w-8 h-6 mr-2"
                />
                Indonesia
              </button>
              <button
                className="w-full flex justify-center items-center px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                onClick={() => updateCountry("England")}
              >
                <img
                  src={flagEng}
                  alt="England Flag"
                  className="-ml-2 w-8 h-6 mr-2"
                />
                England
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
