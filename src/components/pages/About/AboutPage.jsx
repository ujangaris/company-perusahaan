import React from "react";
import { Benner } from "../../atoms/Benner";
import { Link } from "react-router-dom";
import imageTeam from "../../../../src/assets/image-team-about-page.png";
export const AboutPage = () => {
  return (
    <>
      <Benner title="About Us" sub_title="About Us" to="/about" />
      <div className="our-company flex flex-wrap h-[1204px] w-full bg-[#78D763] mx-auto ">
        <div className=" lg:max-w-6xl lg:flex justify-between px-7 lg:px-20  mx-auto lg:gap-x-28 mt-20">
          <div className="left mb-7 ">
            <h1 className="text-4xl md:text-6xl font-bold text-white lg:mb-9">
              About Our <br />
              Company
            </h1>
            <Link type="button" className="flex items-center">
              <p className="text-[15px] lg:text-[20px] font-bold text-white">
                Join our team{" "}
              </p>
              <span className="text-xs">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7497 24.5H10.208"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M30.625 32.6666L38.7917 24.5L30.625 16.3333"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="right lg:max-w-md">
            <p className="text-base font-medium text-white mb-7">
              &nbsp;&nbsp;&nbsp; Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
            <p className="text-base font-medium text-white">
              &nbsp;&nbsp;&nbsp; Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronicty pesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
          </div>
        </div>
        <div className=" px-7 lg:px-20 lg:max-w-6xl justify-center mx-auto -mt-40">
          <img
            src={imageTeam}
            alt="image-team"
            className="w-[3000px] h-[250px] md:h-[450px]"
          />
        </div>
      </div>
    </>
  );
};
