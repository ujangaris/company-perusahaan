import React from "react";

import imageNews1 from "../../src/assets/image-news1.png";
import imageNews2 from "../../src/assets/image-news2.png";
import imageEvent from "../../src/assets/image-event.png";
import { FiArrowUpRight } from "react-icons/fi";
export const Info = () => {
  return (
    <>
      <div className="info">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-bold text-3xl md:text-5xl text-[#927F7F]  pt-20">
            Info
          </h4>
          <p className="pt-2  md:text-base text-xs text-[#717171] px-10 ">
            News & Event
          </p>
        </div>
        <div className=" flex flex-wrap mb-52 max-w-6xl mx-auto px-10 xl:px-4">
          <div className="w-full  px-2  md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src={imageNews1} alt="news" className="w-full" />
              <div className="py-8 px-6">
                <h6 className="text-[#927F7F] font-medium mb-4">News</h6>
                <h3 className="mb-4">
                  <a
                    href="#"
                    className="block text-xl text-black font-bold hover:text-[#29BF08] truncate"
                  >
                    2024: Lorem ipsume latesno Adiota
                  </a>
                </h3>
                <p className="text-base font-medium text-slate-500 mb-3 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.{" "}
                </p>
                <h2>
                  <a
                    href="#"
                    className="flex text-2xl font-semibold text-teal-400 hover:text-[#29BF08]"
                  >
                    <span>Read More</span>
                    <FiArrowUpRight className="text-4xl" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full  px-2  md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src={imageEvent} alt="news" className="w-full" />
              <div className="py-8 px-6">
                <h6 className="text-[#927F7F] font-medium mb-4">Event</h6>
                <h3 className="mb-4">
                  <a
                    href="#"
                    className="block text-xl text-black font-bold hover:text-[#29BF08] truncate"
                  >
                    2024: Lorem ipsume latesno Adiota
                  </a>
                </h3>
                <p className="text-base font-medium text-slate-500 mb-3 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.{" "}
                </p>
                <h2>
                  <a
                    href="#"
                    className="flex text-2xl font-semibold text-teal-400 hover:text-[#29BF08]"
                  >
                    <span>Read More</span>
                    <FiArrowUpRight className="text-4xl" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full  px-2  md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src={imageNews2} alt="news" className="w-full" />
              <div className="py-8 px-6">
                <h6 className="text-[#927F7F] font-medium mb-4">News</h6>
                <h3 className="mb-4">
                  <a
                    href="#"
                    className="block text-xl text-black font-bold hover:text-[#29BF08] truncate"
                  >
                    2024: Lorem ipsume latesno Adiota
                  </a>
                </h3>
                <p className="text-base font-medium text-slate-500 mb-3 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.{" "}
                </p>
                <h2>
                  <a
                    href="#"
                    className="flex text-2xl font-semibold text-teal-400 hover:text-[#29BF08]"
                  >
                    <span>Read More</span>
                    <FiArrowUpRight className="text-4xl" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
