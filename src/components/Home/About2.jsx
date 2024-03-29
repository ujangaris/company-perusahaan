import React from "react";
import imageAbout1 from "../../../src/assets/image-about-1.png";
import imageAbout2 from "../../../src/assets/image-about-2.png";
import imageAbout3 from "../../../src/assets/image-about-3.png";
export const About2 = () => {
  return (
    <>
      <div className="about lg:mb-52 ">
        <div className="w-full max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-10 md:mb-20 ">
            <h4 className="font-bold text-3xl md:text-5xl text-[#927F7F]  pt-20">
              Tentang Kami
            </h4>
            <p className="pt-5  md:text-base text-xs text-[#717171] px-10 mb">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 px-10 md:px-20  gap-x-10 pb-10 gap-y-4">
          <div className="left order-2">
            <img src={imageAbout1} alt="" />
          </div>
          <div className="right max-w-sm md:order-2 ">
            <h1 className="text-xl font-semibold text-black mb-2">
              PT. BINA <span className="text-red-500">DINAMITA</span> RAMA
            </h1>
            <p className="text-base font-medium text-slate-500">
              &nbsp;&nbsp;&nbsp;Perusahaan kami didirikan dengan tekad untuk
              melatih dan menghasilkan sumber daya manusia yang berkualitas. Hal
              ini bertujuan untuk memenuhi kebutuhan tenaga kerja di kancah
              internasional sesuai dengan kualifikasi yang ada. Selain
              menyalurkan tenaga kerja secara global, perusahaan kami juga fokus
              dalam membantu perbaikan kehidupan masyarakat melalui pelayanan
              pemberian tenaga kerja.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 px-10 lg:px-32 gap-y-4 gap-x-5">
          <div className="image-left">
            <img src={imageAbout2} alt="" />
          </div>
          <div className="image-right">
            <img src={imageAbout3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
