import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import malaysia from "../../../src/assets/destinations/malaysia.png";
import singapore from "../../../src/assets/destinations/singapore.png";
import hongkong from "../../../src/assets/destinations/hongkong.png";
import taiwan from "../../../src/assets/destinations/taiwan.png";
import jepang from "../../../src/assets/destinations/jepang.png";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const Destination2 = () => {
  return (
    <>
      <div className="destination h-[340px] md:h-96 ">
        <div className="container mx-auto">
          <div className="w-full">
            <div className="max-w-xl mx-auto text-center mb-10 ">
              <h4 className="font-bold text-3xl md:text-5xl text-[#927F7F] pt-12 md:pt-20">
                Negara Tujuan
              </h4>
              <p className="pt-5 text-xs md:text-base text-[#717171]">
                Letak mitra yang bekerja sama dengan perusahaan kami dalam
                kegiatan penyaluran tenaga kerja .
              </p>
            </div>
          </div>
          <div className="w-3/4 m-auto">
            <div className="mt-">
              <Slider {...settings}>
                {/* {data.map((d) => ( */}
                <div className="w-full flex flex-wrap justify-center">
                  <div className="mb-12 ">
                    <div className="group relative rounded-md overflow-hidde flex justify-center">
                      <img
                        src={malaysia}
                        alt={malaysia}
                        className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-white border-[#29BF08] rounded-3xl shadow-2xl"
                      />
                      <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-white bg-[#29BF08] rounded-full text-white group-hover:text-[#29BF08]  absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                        Malaysia
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-center">
                  <div className="mb-12 ">
                    <div className="group relative rounded-md overflow-hidde flex justify-center">
                      <img
                        src={singapore}
                        alt={singapore}
                        className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-white border-[#F24E1E] rounded-3xl shadow-2xl"
                      />
                      <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-white  bg-[#F24E1E] rounded-full text-white group-hover:text-[#F24E1E] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                        Singapore
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-center">
                  <div className="mb-12 ">
                    <div className="group relative rounded-md overflow-hidde flex justify-center">
                      <img
                        src={hongkong}
                        alt={hongkong}
                        className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-white border-[#EC5757] rounded-3xl shadow-2xl"
                      />
                      <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-white bg-[#EC5757] rounded-full text-white group-hover:text-[#EC5757] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                        Hongkong
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-center">
                  <div className="mb-12 ">
                    <div className="group relative rounded-md overflow-hidde flex justify-center">
                      <img
                        src={taiwan}
                        alt={taiwan}
                        className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-white border-[#29BF08] rounded-3xl shadow-2xl"
                      />
                      <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-white bg-[#29BF08] rounded-full text-white group-hover:text-[#29BF08] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                        Taiwan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-center">
                  <div className="mb-12 ">
                    <div className="group relative rounded-md overflow-hidde flex justify-center">
                      <img
                        src={jepang}
                        alt={jepang}
                        className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-white border-[#F24E1E] rounded-3xl shadow-2xl"
                      />
                      <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-white bg-[#F24E1E] rounded-full text-white group-hover:text-[#F24E1E] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                        Jepang
                      </button>
                    </div>
                  </div>
                </div>
                {/* ))} */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
