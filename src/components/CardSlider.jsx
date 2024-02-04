import React from "react";

export const CardSlider = ({ img }) => {
  return (
    <>
      <div className="w-full bg-red-500 shadow-xl  ">
        <div className="">
          <img
            className="h-[250px] w-full object-cover overflow-x:hidden"
            src={img}
            alt="card"
          />
          <div className="flex flex-col gap-x-4 p-[20px]">
            <div className="">Team Member Name</div>
            <div className="">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam deserunt excepturi nemo.
              </p>
            </div>
            <div className="">
              <a href="" className="text-[#4200d0">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
