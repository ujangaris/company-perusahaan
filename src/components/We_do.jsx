import React from "react";

export const We_do = () => {
  return (
    <>
      {/* We do section */}
      <section className="we-do w-screen px-4 bg-black   mx-auto h-[610px] md:h-[400px] xl:h-[580px] mt-20 lg:mb-52">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="left-we-do mt-10 md:mt-20 px-10 lg:px-20 ">
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-10">
              What we do?
            </h1>
            <p className="text-sm lg:text-base font-medium text-white mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="text-white font-semibold text-xs lg:text-base border-2 border-white bg-black w-full lg:w-3/5 rounded-full px-1 py-2 ">
              Posrtfolio
            </button>
          </div>

          <div className="right-we-do grid grid-cols-3 w-[280px] md:w-[304px] h-[200] md:h-[212px] xl:w-[608px] xl:h-[424px] mt-20 gap-y-2 gap-x-2 mx-auto">
            <div className="box-one h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px]  "></div>
            <div className="box-two h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px] bg-teal-700"></div>
            <div className="box-three h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px] bg-teal-700"></div>
            <div className="box-one h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px] bg-teal-700 "></div>
            <div className="box-two h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px] bg-teal-700"></div>
            <div className="box-three h-[90px] w-90px] md:h-[100px] md:w-100px] xl:h-[210px] xl:w-[200px] bg-teal-700"></div>
          </div>
        </div>
      </section>
      {/* akhir We do section */}
    </>
  );
};
