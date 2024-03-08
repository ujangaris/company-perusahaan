import React from "react";
import { Link } from "react-router-dom";

export const We_do = () => {
  return (
    <>
      {/* We do section */}
      <section className="we-do w-screen px-4 bg-black   mx-auto h-[670px] md:h-[470px] xl:h-[580px] mt-20 ">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 mx-auto lg:px-20 gap-x-4">
          <div className="left-we-do mt-10 md:mt-20 lg:px-5">
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-10">
              Kegiatan kami
            </h1>
            <p className="text-sm lg:text-base font-medium text-white mb-10">
              Kami memberikan pendidikan dan pelatihan dari segi bahasa dan
              kemampuan yang menunjang kualitas sumber daya manusia sesuai
              kebutuhan klien. Dengan adanya fasilitas penunjang berupa asrama
              dan sistem pembelajaran yang modern, kami menjamin kepuasan dari
              pengguna jasa perusahaan kami.
            </p>
            <Link
              to="/about"
              className="text-white font-semibold text-xs lg:text-base border-2 border-white bg-black w-full  rounded-full px-4 py-2 "
            >
              Portfolio
            </Link>
          </div>

          <div
            className="right-we-do grid grid-cols-3  mt-20   xl:w-[510px] gap-y-2 gap-x-2 md:gap-x-3 md:p-5 lg:p-5 xl:p-0
          lg:gap-x-8 xl:gap-x-3 mx-auto"
          >
            <div className="box-one h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px]  "></div>
            <div className="box-two h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px] bg-teal-700"></div>
            <div className="box-three h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px] bg-teal-700"></div>
            <div className="box-one h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px] bg-teal-700 "></div>
            <div className="box-two h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px] bg-teal-700"></div>
            <div className="box-three h-[90px] w-[90px] md:h-[120px] md:w-[105px] lg:h-[140px] lg:w-[125px] xl:h-[175px] xl:w-[165px] bg-teal-700"></div>
          </div>
        </div>
      </section>
      {/* akhir We do section */}
    </>
  );
};
