import React from "react";
import logoAW from "../../../src/assets/icon-aw.png";
import logoIbis from "../../../src/assets/icon-hotel-ibis.png";
import logoKeyta from "../../../src/assets/icon-keyta.png";
import video from "../../../src/assets/vodeo.png";
import YouTube from "react-youtube";
import { useState } from "react";
export const Company = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const youtubeVideoId = "ahIijMCcGl4";
  const handlePlayVideo = () => {
    setIsVideoVisible(true);
  };
  const opts = {
    // height: "868", // Ubah tinggi sesuai kebutuhan Anda
    // width: "1289",
    height: "56.25%", // 9:16 aspect ratio, Anda dapat menyesuaikan persentase ini
    width: "100%", // Lebar 100% agar responsif
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      {/* Company section */}
      {/* video section */}
      <div className="relative flex justify-center">
        <div className="video   absolute z-10  -mt-32 lg:-mt-96 mx-7">
          {isVideoVisible ? (
            <YouTube
              videoId={youtubeVideoId}
              opts={opts}
              className="border-4 border-slate-500 shadow-lg rounded-lg   "
            />
          ) : (
            <div onClick={handlePlayVideo} className="cursor-pointer">
              <img
                src={video} // Ganti dengan path gambar thumbnail lokal yang sesuai
                alt="Video Thumbnail"
                className="w-full border-4 border-slate-500 shadow-lg rounded-3xl"
              />
              <div className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Tambahkan ikon play atau teks play di sini */}
                <button>
                  <svg
                    className="hover:bg-green-500 hover:rounded-full rounded-lg bg-red-700 py-2 px-1 md:size-20"
                    width="45"
                    height="47"
                    viewBox="0 0 45 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.644925 46.6832L8.76564 0.628287L44.59 30.6885L0.644925 46.6832Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {/* <img
            src={video}
            alt=""
            className="border-4 border-slate-500 shadow-lg rounded-lg"
          /> */}
        </div>
      </div>
      {/* akhir video section */}{" "}
      <div className=" destination h-[900px] md:[500px] lg:h-[800px] xl:h-[1200px] bg-black">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 mx-7 lg:mx-20 xl:mx-32 gap-14 lg:gap-10">
            <div className="mt-36 md:mt-[450px] lg:mt-80 xl:mt-[600px]">
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
            <div className="grid grid-cols-3  gap-2 lg:gap-0 mt-2 md:mt-[450px] lg:mt-80 xl:mt-[600px] px-3">
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
