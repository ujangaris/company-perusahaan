import React from "react";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";

export const ResponsiveTest = () => {
  return (
    <>
      <div className="mt-64 p-2 grid grid-cols-3 gap-2 m-10 md:grid-cols-3">
        {/* <h2 className="text-xl h-15 font-bold text-slate-700">
          Welcome to WPU{" "}
        </h2>
        <div className="text-lg font-bold text-slate-500">@ujangarisandi</div> */}

        <div className="h-15 bg-blue-500 rounded-full flex items-center justify-center">
          <button className="w-auto">
            <BsArrow90DegLeft className="text-white text-3xl" />
          </button>
        </div>

        <div className="h-15 bg-blue-500 aspect-square rounded-lg"></div>
        <div className="h-15 bg-blue-500 aspect-square rounded-lg"></div>
        <div className="h-15 bg-blue-500 aspect-square rounded-lg"></div>

        <div className="h-15 bg-blue-500 rounded-full flex items-center justify-center">
          <button className="w-auto">
            <BsArrow90DegRight className="text-white text-3xl" />
          </button>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-2 mt-[300px] item-center">
        <div className="">
          <BsArrow90DegLeft className="bg-red-500 rouded-full" />
        </div>
        <div className="bg-red-500 px-15 py-15">merah</div>
        <div className="bg-green-500 px-15 py-15">hijau</div>
        <div className="bg-indigo-500 px-15 py-15">biru</div>
        <div className="">
          <BsArrow90DegRight className="bg-red-500" />
        </div>
      </div> */}
    </>
  );
};
