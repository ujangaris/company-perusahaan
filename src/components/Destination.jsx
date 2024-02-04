import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  { img: "../src/assets/jepang.png", name: "Jepang" },
  { img: "../src/assets/paris.png", name: "Paris" },
  { img: "../src/assets/indonesia.png", name: "Indonesia" },
  { img: "../src/assets/jepang.png", name: "Jepang" },
  { img: "../src/assets/paris.png", name: "Paris" },
  { img: "../src/assets/indonesia.png", name: "Indonesia" },
  { img: "../src/assets/jepang.png", name: "Jepang" },
  { img: "../src/assets/paris.png", name: "Paris" },
  { img: "../src/assets/indonesia.png", name: "Indonesia" },
];
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
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
export const Destination = () => {
  return (
    <>
      <div className="destination h-[900px] lg:h-[1200px]">
        <div className="container mx-auto">
          <div className="w-full">
            <div className="max-w-xl mx-auto text-center mb-10 ">
              <h4 className="font-bold text-5xl text-[#927F7F]  pt-20">
                Destination
              </h4>
              <p className="pt-5 text-[#717171]">
                Countries collaborating with us.
              </p>
            </div>
          </div>
          <div className="w-3/4 m-auto">
            <div className="mt-20">
              <Slider {...settings}>
                {data.map((d) => (
                  <div
                    key={d.name}
                    className="w-full flex flex-wrap justify-center"
                  >
                    <div className="mb-12 p-4">
                      <div className="group relative rounded-md overflow-hidde flex justify-center">
                        <img
                          src={d.img}
                          alt="jepang"
                          className=" w-[300px] h-[320px] xl:w-[300px] xl:h-[320px] border-4 group-hover:border-rose-500 border-white rounded-3xl shadow-2xl"
                        />
                        <button className="text-sm  md:text-base font-bold py-2 px-3 md:py-2 md:px-6 group-hover:bg-rose-500 bg-[#29BF08] rounded-full text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 md:-translate-y-1/2 xl:mt-28 lg:mt-20 md:mt-20 ">
                          {d.name}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
