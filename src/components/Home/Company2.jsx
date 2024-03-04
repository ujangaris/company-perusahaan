import React from "react";
import logoAW from "../../../src/assets/icon-aw.png";
import logoIbis from "../../../src/assets/icon-hotel-ibis.png";
import logoKeyta from "../../../src/assets/icon-keyta.png";

export const Company2 = () => {
  return (
    <>
      {/* Company section */}

      <div className=" destination h-[1000px] md:h-[650px] lg:h-[800px] bg-black">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 mx-7 lg:mx-20 xl:mx-32 gap-14 lg:gap-10">
            <div className="mt-[200px] md:mt-[190px] lg:mt-60 ">
              <h1 className="text-xl lg:text-4xl  font-semibold text-white mb-5 md:mb-2 ">
                Companies That <br />
                Use Bina Dinamita Rama
              </h1>
              <p className="text-sm lg:text-base  xl:mt-10 font-semibold text-white">
                selects graduates from accredited Tourist Colleges in Indonesia
                who have worked in 4 - 5 stars Hotels and Fine Dinning
                Restourants dealing with foreign guest
              </p>
            </div>
            <div className="grid grid-cols-3  gap-2 lg:gap-0 mt-2 md:mt-[190px] lg:mt-60  px-3">
              <div className="">
                <img src={logoIbis} alt="logo-ibis" className="lg:ml-11" />
              </div>
              <div className="">
                <img src={logoAW} alt="logo-aw" className="-ml-4 lg:ml-0" />
              </div>
              <div className="">
                <img src={logoKeyta} alt="logo-keyta" />
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-28 mx-7 md:mx-7 lg:mx-40  gap-y-10">
            <div className="years ">
              <h1 className="text-5xl font-semibold text-[#29BF08] flex justify-center mb-5">
                20 Years +
              </h1>
              <p className="text-xl text-white flex justify-center ">
                Experience
              </p>
            </div>
            <div className="users">
              <h1 className="text-5xl font-semibold text-[#29BF08] flex justify-center mb-5">
                20K+
              </h1>
              <p className="text-xl text-white flex justify-center ">
                User Active
              </p>
            </div>
            <div className="customer">
              <h1 className="text-5xl font-semibold text-[#29BF08] flex justify-center mb-5">
                10K+
              </h1>
              <p className="text-xl text-white flex justify-center ">
                Happy Customers
              </p>
            </div>
          </div>
          {/* akhir Experience */}
        </div>
      </div>
      {/* Akhir Company section */}
    </>
  );
};
