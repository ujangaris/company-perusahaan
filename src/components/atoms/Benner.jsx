import React from "react";
import { Link } from "react-router-dom";
import imageHero2 from "../../../src/assets/hero-image2.png";

export const Benner = ({ title, sub_title, ...rest }) => {
  return (
    <>
      <section className="about flex flex-wrap relative ">
        <img
          src={imageHero2}
          alt="Hero"
          className="w-full  xl:h-[504px] mt-[88px] md:mt-28 h-auto  bg-cover bg-center bg-no-repeat "
        />
        <div className="mx-auto -mt-24 md:-mt-40 lg:-mt-64 xl:-mt-72">
          <h1 className="text-xl md:text-5xl  font-bold text-white text-center">
            {title}
          </h1>
          <ul className="flex items-center  justify-center mx-auto mt-1 md:mt-2 lg:mt-4">
            <li className="mx-2">
              <Link
                to="/"
                className="block text-sm md:text-xl hover:text-green-500 hover:font-bold font-semibold text-white"
              >
                Home
              </Link>
            </li>
            <li className="mx-2 ">
              <span className="bg-white  rounded-full h-1 w-1 md:h-2 md:w-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="#D9D9D9"
                    fill-opacity="0.44"
                  />
                  <circle cx="11" cy="11" r="8" fill="#D9D9D9" />
                </svg>
              </span>
            </li>
            <li>
              <Link
                {...rest}
                className="text-sm hover:text-white hover:font-bold md:text-xl font-semibold text-green-600"
              >
                {sub_title}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
