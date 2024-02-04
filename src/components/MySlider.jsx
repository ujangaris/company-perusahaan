import React from "react";
import { CardSlider } from "./CardSlider";
import Slider from "react-slick";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
export const MySlider = () => {
  const data = [
    { img: "../../src/assets/jepang.png" },
    { img: "../../src/assets/paris.png" },
    { img: "../../src/assets/indonesia.png" },
    { img: "../../src/assets/jepang.png" },
    { img: "../../src/assets/paris.png" },
    { img: "../../src/assets/indonesia.png" },
  ];

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative px-14">
      <Slider {...setting}>
        {data.map((el, index) => (
          <CardSlider key={index} img={el.img} />
        ))}
      </Slider>
    </div>
  );
};
