import React from "react";

export const Hero = () => {
  return (
    <>
      {/*  Hero section */}

      <section className="relative bg-[url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvb2QlMjB0ZWFtJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat mt-16">
        <div className="absolute inset-0 bg-black/75 xl:bg-transparent xl:from-black/95 xl:to-black/25 ltr:xl:bg-gradient-to-r rtl:xl:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex lg:h-screen justify-center items-center lg:px-8">
          <div className="max-w-8xl  text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="lg:text-5xl xl:text-8xl md:text-6xl text-4xl text-[#29BF08] font-extrabold ">
              PT Bina{" "}
              <span className="font-extrabold text-white">Dinamita</span> Rama
            </h1>

            <p className="mt-10 md:mt-4 font-bold text-base md:text-2xl mx-auto max-w-lg sm:text-xl/relaxed text-white  mb-10">
              <span className="block mt-5">Perusahaan Penempatan Pekerja</span>
              Migran Indonesia
            </p>

            <div className="mt-14 md:mt-14 flex flex-wrap md:gap-x-10 gap-x-4 gap-y-4 justify-center items-center text-center">
              <a
                href="#"
                className="block   w-fit rounded-full bg-[#29BF08] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Apply Now
              </a>
              <div className="flex items-center group ">
                <a
                  href="#"
                  className="block   bg-white rounded-full w-fit mx-2 size-10 sm:w-auto"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2.5C16.5388 2.5 13.1554 3.52636 10.2775 5.44928C7.39967 7.37221 5.15665 10.1053 3.83212 13.303C2.50758 16.5007 2.16102 20.0194 2.83627 23.4141C3.51151 26.8087 5.17822 29.9269 7.62564 32.3744C10.0731 34.8218 13.1913 36.4885 16.5859 37.1637C19.9806 37.839 23.4993 37.4924 26.697 36.1679C29.8947 34.8434 32.6278 32.6003 34.5507 29.7225C36.4737 26.8446 37.5 23.4612 37.5 20C37.5 15.3587 35.6563 10.9075 32.3744 7.62563C29.0925 4.34374 24.6413 2.5 20 2.5ZM29.3088 21.1188L14.3088 28.6188C14.1181 28.714 13.9063 28.7589 13.6935 28.7493C13.4806 28.7397 13.2737 28.6758 13.0925 28.5637C12.9112 28.4516 12.7617 28.295 12.658 28.1088C12.5543 27.9227 12.4999 27.7131 12.5 27.5V12.5C12.5001 12.287 12.5547 12.0776 12.6584 11.8916C12.7622 11.7056 12.9118 11.5492 13.093 11.4373C13.2742 11.3253 13.481 11.2615 13.6938 11.2519C13.9065 11.2424 14.1182 11.2873 14.3088 11.3825L29.3088 18.8825C29.5161 18.9864 29.6905 19.146 29.8123 19.3433C29.9341 19.5407 29.9987 19.7681 29.9987 20C29.9987 20.2319 29.9341 20.4593 29.8123 20.6567C29.6905 20.854 29.5161 21.0136 29.3088 21.1175"
                      fill="#29BF08"
                    />
                  </svg>
                </a>
                <p className="text-white font-semibold group-hover:text-green-500 ">
                  Watch Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* akhir Hero section */}
    </>
  );
};
