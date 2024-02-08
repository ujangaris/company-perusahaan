import React from "react";
import logoAw from "../../src/assets/logo-aw.png";
import logoKeita from "../../src/assets/logo-keita.png";
import logoIbis from "../../src/assets/logo-ibis.png";

export const Client = () => {
  return (
    <>
      <div className="client bg-[#D9D9D9] -z-30">
        <div className="w-full h-[900px] max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto text-center  ">
            <h4 className="font-bold text-3xl md:text-5xl text-[#927F7F]  pt-20">
              Our Clients
            </h4>
            <p className="pt-5  md:text-base text-xs text-[#717171] px-10 mb">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10 mb-32 px-20 md:px-0">
            <img src={logoAw} alt="aw" className="" />
            <img src={logoKeita} alt="keyta" className="" />
            <img src={logoIbis} alt="ibis" className="" />
          </div>
        </div>
      </div>
    </>
  );
};
