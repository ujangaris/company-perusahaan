import React from "react";
import bgKiri from "../../../assets/bg-atas-kiri.png";
import profile from "../../../assets/profile-director-message.png";
import logo from "../../../assets/logo-perusahaan.png";
import bgKanan from "../../../assets/bg-bawah-kanan.png";
export const DirectorsMessage = () => {
  return (
    <>
      <div className="directors-message px-5 md:px-10 lg:px-40 -mt-16 md:mt-0">
        <div className="card max-w-6xl bg-white  mx-auto mt-[100px] rounded-lg shadow-lg relative container">
          <div className="head grid grid-cols-2 mx-auto mr-5 ml-5">
            <div className="head-kiri -ml-3 mt-2 md:mt-2">
              <img src={bgKiri} alt="bg-kiri" className="" />
            </div>
            <div className="head-kanan mt-5">
              <img src={logo} alt="logo" className="md:mt-5 lg:ml-10" />
            </div>
          </div>
          <div className="grid grid-rows-1">
            <div className="head-tengah -mt-20 md:-mt-44 lg:-mt-60 mx-auto text-center ">
              <h1 className="font-bold  md:text-xl lg:text-4xl ">
                Directors Message
              </h1>
              <img
                src={profile}
                alt="profile"
                className="mx-auto mt-2 h-[100px] md:h-[150px] lg:h-[200px]"
              />
            </div>
            <div className="px-5 md:px-10 md:max-w-[700px] lg:max-w-[858px] mx-auto mt-10">
              <p className="text-sm md:text-base ">
                &nbsp;&nbsp;&nbsp;&nbsp;Indonesia is under the threat of a high
                unemployment rate caused by the imbalance between workers and
                domestic vacancies. In order to solve this problem, one of the
                optimal solutions is by sending workers overseas. This method
                hopefully would be able to reduce unemployment rate and improve
                people’s living standards. Our company trusts that attaining
                jobs through proper and official steps will be the correct
                choice for every individual.
              </p>
              <p className="mt-5 text-sm md:text-base ">
                &nbsp;&nbsp;&nbsp;&nbsp;Bina Dinamita Rama is a company which is
                well equipped with modern learning and communication systems. On
                top of that, our company is also supported by highly motivated
                and qualified staff. Our sincere and dedicated service with a
                high standard of professionalism will always be our foundation
                to build trust and earn a good reputation both in our country
                and abroad.
              </p>
              <p className="mt-5 text-sm md:text-base ">
                &nbsp;&nbsp;&nbsp;&nbsp;Our aim is to fulfill the needs and
                requirements of laborers in the developing and developed
                countries. We are committed to maintain our outstanding and
                thorough recruitment system as a means to guarantee the
                competencies and quality of both workers and clients.
              </p>
              <p className="mt-5 text-sm md:text-base ">
                &nbsp;&nbsp;&nbsp;&nbsp; Our company is professionally dedicated
                to the advancement and development of human resources. We highly
                regard this principle to drive the company to fulfill the needs
                and requirements from the industrial or formal sectors as well
                as the private sector abroad.
              </p>
              <p className="mt-5 text-sm md:text-base ">
                &nbsp;&nbsp;&nbsp;&nbsp;We are mostly welcome to all respective
                organizations and clients to form any shape of partnership with
                Bina Dinamita Rama. We believe that any form of collaboration
                could provide more qualified and committed Indonesian employees.
                We assure you that our company is your reliable partner in the
                global workforce.
              </p>
              <p className="mt-10 text-sm md:text-base ">Thank you.  </p>
              <p className="mt-3 text-sm md:text-base ">Zainur Rahmad</p>
              <p className="text-sm md:text-base mb-20">Director</p>
            </div>
            <img
              src={bgKanan}
              alt="bg-kanan"
              className="absolute bottom-0 mb-2  right-0 mr-2 md:mr-2 -mt-[58px] md:-mt-28 lg:-mt-16 xl:-mt-7 w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
