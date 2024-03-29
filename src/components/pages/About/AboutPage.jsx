import React from "react";
import { Benner } from "../../atoms/Benner";
import { Link } from "react-router-dom";
import imageTeam from "../../../../src/assets/image-team-about-page.png";
import imageTeam1 from "../../../../src/assets/image-Zainur-Rahmad.png";
import imageTeam2 from "../../../../src/assets/image-team-2.png";
import imageTeam3 from "../../../../src/assets/image-team-3.png";
import imageTeam4 from "../../../../src/assets/image-team-4.png";
import { DirectorsMessage } from "./DirectorsMessage";
export const AboutPage = () => {
  return (
    <>
      <Benner title="Tentang Kami" sub_title="Tentang Kami" to="/about" />
      <div className="our-company container flex flex-wrap  w-full bg-[#78D763] mx-auto ">
        <div className="px-7 lg:max-w-7xl lg:flex justify-items-stretch mx-auto lg:gap-x-40 mt-20">
          <div className="left mb-7 ">
            <h1 className="text-4xl md:text-6xl font-bold text-white lg:mb-9">
              Tentang <br />
              Kami
            </h1>
            <Link type="button" className="flex items-center">
              <p className="text-[15px] lg:text-[20px] font-bold text-white">
                Bergabung
              </p>
              <span className="text-xs">
                <svg
                  className="mt-2"
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
              &nbsp;&nbsp;&nbsp; Perusahaan kami didirikan dengan tekad untuk
              melatih dan menghasilkan sumber daya manusia yang berkualitas. Hal
              ini bertujuan untuk memenuhi kebutuhan tenaga kerja di kancah
              internasional sesuai dengan kualifikasi yang ada. Selain
              menyalurkan tenaga kerja secara global, perusahaan kami juga fokus
              dalam membantu perbaikan kehidupan masyarakat melalui pelayanan
              pemberian tenaga kerja.
            </p>
            <p className="text-base font-medium text-white">
              &nbsp;&nbsp;&nbsp; Kami selalu berkomitmen untuk mempertahankan
              kualitas rekrutmen sumber daya manusia yang berdasarkan nilai
              profesionalisme. Dedikasi yang kami berikan melalui peningkatan
              dan pengembangan sumber daya adalah untuk memberikan sumber daya
              manusia yang terlatih dan kompeten. Diharapkan dengan semangat dan
              usaha yang baik, kami dapat memberikan pelayanan yang terbaik dan
              memuaskan untuk klien kami.
            </p>
          </div>
        </div>
        <div className=" px-7 lg:px-20 lg:max-w-6xl justify-center mx-auto">
          <img
            src={imageTeam}
            alt="image-team"
            className="w-[1235px] h-[250px] md:h-[450px] mx-auto mt-10 mb-10"
          />
        </div>
      </div>
      {/* directors message */}
      <DirectorsMessage />
      {/* akhir directors message */}
      <div className="service px-7  max-w-5xl mx-auto">
        <h1 className=" text-2xl md:text-3xl font-bold text-[#29BF08] mt-36 md:mt-10 ">
          Kami membuka kesempatan <br /> untuk berkolaborasi dengan berbagai
          bidang
        </h1>
        <div className=" flex flex-wrap w-full mx-auto  lg:mt-10 md:mt-5 md:justify-between">
          <div className="scope-left lg:max-w-md ">
            <p className="text-sm font-bold text-[#8C8B92] mt-3 lg:mt-10">
              &nbsp;&nbsp;&nbsp;Perusahaan kami selalu berusaha untuk memberikan
              pelayanan terbaik melalui adanya kerjasama berkelanjutan dengan
              lembaga pelatihan yang tersebar di seluruh Indonesia. Disamping
              itu, Indonesia memiliki sumber daya yang sangat beragam sehingga
              pekerja kami memiliki kesempatan dan kemampuan untuk mempelajari
              dan mendalami berbagai bidang. Kedua hal ini berkontribusi secara
              signifikan untuk memenuhi permintaan atas kebutuhan tenaga kerja
              di level internasional.
            </p>
            {/* <p className="text-sm font-bold text-[#8C8B92] mt-10">
              &nbsp;&nbsp; Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p> */}

            <ul className="mt-10">
              <li className="text-sm font-bold text-[#8C8B92]">
                ● Konstruksi{" "}
              </li>
              <li className="text-sm font-bold text-[#8C8B92]">
                ● Industri manufaktur{" "}
              </li>
              <li className="text-sm font-bold text-[#8C8B92]">
                ● Industri perhutanan dan perkebunan{" "}
              </li>
              <li className="text-sm font-bold text-[#8C8B92]">
                ● Industri perikanan{" "}
              </li>
              <li className="text-sm font-bold text-[#8C8B92]">
                ● Industri konsumsi{" "}
              </li>
              <li className="text-sm font-bold text-[#8C8B92]">● Pelayanan</li>
              <li className="text-sm font-bold text-[#8C8B92]">● Perawat </li>
              <li className="text-sm font-bold text-[#8C8B92]">● Teknik </li>
              <li className="text-sm font-bold text-[#8C8B92]">● Dsb</li>
            </ul>
          </div>
          <div className="scope-right mb-10">
            <div className="grid grid-cols-2 card mx-auto justify-center items-center bg-white rounded-lg shadow-lg md:w-[700px] lg:w-[400px]  w-[300px] h-[300px] mt-10 md:mt-10">
              <div className="industries text-center md:flex  md:items-center    mx-auto">
                <span>
                  <svg
                    class="sm:w-16 sm h-16 lg:w-16 lg:h-16"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M71.3333 47.067C71.3333 45.0586 67.7778 43.0503 60.6667 43.0503H57.1111C54.2821 43.0503 51.569 42.4155 49.5686 41.2855C47.5682 40.1556 46.4444 38.6231 46.4444 37.0251V31M71.3333 69.1592H82V51.0838H71.3333V60.1215M71.3333 69.1592V60.1215M71.3333 69.1592H18V61.1257L30.4444 55.1005L44.6667 60.1215L58.8889 55.1005L71.3333 60.1215M82 47.067C82 35.0168 67.7778 35.0168 67.7778 35.0168C67.7778 35.0168 82 36.0209 82 31"
                      stroke="#9747FF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0 30C0 13.4315 13.4315 0 30 0H70C86.5685 0 100 13.4315 100 30V70C100 86.5685 86.5685 100 70 100H30C13.4315 100 0 86.5685 0 70V30Z"
                      fill="#9747FF"
                      fill-opacity="0.29"
                    />
                  </svg>
                </span>
                <h4 className="text-[#9747FF] text-bold mt-2 ml-5">
                  Industries
                </h4>
              </div>
              <div className="agriculture text-center md:flex md:items-center mx-auto">
                <span>
                  <svg
                    class="sm:w-16 sm h-16 lg:w-16 lg:h-16"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 30C0 13.4315 13.4315 0 30 0H70C86.5685 0 100 13.4315 100 30V70C100 86.5685 86.5685 100 70 100H30C13.4315 100 0 86.5685 0 70V30Z"
                      fill="#29BF08"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M59.9997 23.3333C59.9997 21.4917 55.0197 20 49.9997 20C44.9797 20 39.9997 21.4917 39.9997 23.3333L38.5797 28.0683C39.168 28.1583 39.8163 28.2533 40.5013 28.3483C43.4947 28.765 47.1513 29.1667 49.9997 29.1667C52.8497 29.1667 56.5047 28.7633 59.498 28.35C60.183 28.2533 60.8313 28.1583 61.4197 28.0683L59.9997 23.3333ZM62.6447 31.2517C61.8647 31.375 60.9497 31.5133 59.9547 31.6517C56.933 32.0683 53.088 32.5 49.9997 32.5C46.9097 32.5 43.0663 32.07 40.0447 31.65C39.1468 31.5256 38.2501 31.3928 37.3547 31.2517C31.8913 32.4633 28.333 34.4367 28.333 36.6667C28.333 40.35 38.033 43.3333 49.9997 43.3333C61.9663 43.3333 71.6663 40.35 71.6663 36.6667C71.6663 34.4367 68.108 32.4633 62.6447 31.2517Z"
                      fill="#29BF08"
                    />
                    <path
                      d="M36.6699 41.9233C36.7375 45.4142 38.1717 48.7392 40.6644 51.1841C43.157 53.6289 46.5092 54.9985 50.0008 54.9985C53.4923 54.9985 56.8445 53.6289 59.3371 51.1841C61.8298 48.7392 63.264 45.4142 63.3316 41.9233C62.2162 42.189 61.0909 42.4114 59.9583 42.59C59.7308 45.0739 58.5833 47.3831 56.7409 49.0645C54.8985 50.7459 52.4942 51.6781 49.9999 51.6781C47.5056 51.6781 45.1014 50.7459 43.259 49.0645C41.4166 47.3831 40.269 45.0739 40.0416 42.59C38.9095 42.4114 37.7848 42.189 36.6699 41.9233Z"
                      fill="#29BF08"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.6615 68.3334C37.4681 70.3966 35.5793 71.9676 33.3331 72.765V78.3334C33.3331 78.9167 33.2331 79.4784 33.0498 80H79.9998V70C79.9998 60.9717 60.0131 58.3334 49.9998 58.3334C46.6552 58.3507 43.3151 58.5812 39.9998 59.0234V68.3334H38.6615ZM49.9998 70C47.7585 69.9975 45.5238 69.7573 43.3331 69.2834V62C45.7781 61.77 48.0798 61.6667 49.9998 61.6667C52.7765 61.6667 56.3481 61.8817 59.9998 62.3867V68.3334C59.9781 68.3417 55.8165 70 49.9998 70ZM67.8381 63.9867C66.9181 63.7234 65.9681 63.4867 64.9998 63.2717V68.3334H68.3331C68.7752 68.3334 69.1991 68.509 69.5116 68.8215C69.8242 69.1341 69.9998 69.558 69.9998 70V76.6667H76.6665V70C76.6665 69.1567 76.2531 68.18 74.7248 67.0384C73.1581 65.8684 70.7865 64.83 67.8381 63.9867Z"
                      fill="#29BF08"
                    />
                    <path
                      d="M23.3333 51.6667C23.3333 51.2246 23.1577 50.8007 22.8452 50.4882C22.5326 50.1756 22.1087 50 21.6667 50C21.2246 50 20.8007 50.1756 20.4882 50.4882C20.1756 50.8007 20 51.2246 20 51.6667V63.3333C20 65.1014 20.7024 66.7971 21.9526 68.0474C23.2029 69.2976 24.8986 70 26.6667 70V78.3333C26.6667 78.7754 26.8423 79.1993 27.1548 79.5118C27.4674 79.8244 27.8913 80 28.3333 80C28.7754 80 29.1993 79.8244 29.5118 79.5118C29.8244 79.1993 30 78.7754 30 78.3333V70C31.7681 70 33.4638 69.2976 34.714 68.0474C35.9643 66.7971 36.6667 65.1014 36.6667 63.3333V51.6667C36.6667 51.2246 36.4911 50.8007 36.1785 50.4882C35.866 50.1756 35.442 50 35 50C34.558 50 34.1341 50.1756 33.8215 50.4882C33.5089 50.8007 33.3333 51.2246 33.3333 51.6667V63.3333C33.3333 64.2174 32.9821 65.0652 32.357 65.6904C31.7319 66.3155 30.8841 66.6667 30 66.6667V51.6667C30 51.2246 29.8244 50.8007 29.5118 50.4882C29.1993 50.1756 28.7754 50 28.3333 50C27.8913 50 27.4674 50.1756 27.1548 50.4882C26.8423 50.8007 26.6667 51.2246 26.6667 51.6667V66.6667C25.7826 66.6667 24.9348 66.3155 24.3096 65.6904C23.6845 65.0652 23.3333 64.2174 23.3333 63.3333V51.6667Z"
                      fill="#29BF08"
                    />
                  </svg>
                </span>
                <h4 className="text-[#29BF08] text-bold mt-2 ml-5">
                  Agriculture
                </h4>
              </div>
              <div className="fishery text-center mx-auto md:flex md:items-center">
                <span>
                  <svg
                    class="sm:w-16 sm h-16 lg:w-16 lg:h-16"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.2809 13.4375C38.2965 15.6172 37.734 18.1344 37.734 20.8438C37.734 29.4219 43.3746 36.0938 49.9996 36.0938C56.6246 36.0938 62.2652 29.4219 62.2652 20.8438C62.2652 18.1344 61.7027 15.6172 60.7184 13.4375H39.2809ZM42.4996 27.5H57.4996C52.4996 32.5 47.4996 32.5 42.4996 27.5ZM56.4371 37.1875C54.484 38.2969 52.3121 38.9062 49.9996 38.9062C47.7184 38.9062 45.5621 38.3125 43.6402 37.2344C40.1402 38.0312 36.3746 39.3281 33.109 40.9688C32.1559 41.4375 31.2496 41.9375 30.4059 42.4688L35.1871 41.5625C40.1871 40.6094 44.6871 40.0156 48.859 40.0625C50.2496 40.0781 51.609 40.1562 52.9215 40.3281C57.5152 40.9063 61.734 42.5312 65.7027 45.5156C69.2027 46.1406 72.5934 47.0938 75.734 48.3594C75.3434 47.4375 74.6402 46.4688 73.6402 45.4844C72.0152 43.875 69.6402 42.2812 66.9371 40.9219C63.6715 39.2812 59.9215 37.9688 56.4371 37.1875ZM30.109 42.6406C28.6402 43.5625 27.359 44.5312 26.359 45.5C24.7465 47.0938 23.934 48.625 23.9137 49.9531C24.1809 51.6094 24.4199 53.1562 24.6402 54.6406C29.0465 50.75 34.609 48.0469 40.6715 46.4375C39.2652 45.7812 37.4684 45.0781 35.0152 44.2656L30.109 42.6406ZM48.8277 42.875C46.359 42.8437 43.7027 43.0781 40.8434 43.4844C42.3902 44.1719 43.609 44.8438 44.6402 45.5469C46.3746 45.2188 48.1246 44.9844 49.8902 44.8281C51.2027 44.7031 52.5152 44.625 53.8277 44.6094C55.4527 44.5781 57.0621 44.5938 58.6715 44.6875C56.734 43.9062 54.7184 43.3906 52.5777 43.125C51.3746 42.9688 50.1246 42.8906 48.8277 42.875ZM55.5309 47.4062C54.984 47.4062 54.4371 47.4062 53.8902 47.4219C52.6402 47.4375 51.3902 47.5156 50.1402 47.625C40.1871 48.5156 30.7496 52.0937 24.7621 58.4062L24.2449 58.9531L23.5059 58.8281C20.6184 58.3281 16.7824 59.75 12.8496 60.8281C13.0512 61 13.2449 61.1563 13.4527 61.3594C15.0965 62.8594 16.9621 64.9062 18.6605 67.0312C20.359 69.1406 21.8809 71.3125 22.823 73.1562C23.098 73.6875 23.3215 74.1875 23.4871 74.6875C24.5496 73.9531 25.3184 72.9844 25.984 71.8125L26.0309 71.7188C25.9059 69.7812 26.0465 67.8438 26.4527 65.9688C26.7652 64.4531 27.859 63.3438 29.0777 62.6875C30.3121 62.0469 31.7184 61.75 33.1246 61.6875C33.4684 61.6562 33.8121 61.6562 34.1715 61.6719C35.2184 61.6875 36.234 61.8438 37.1559 62.0938C38.3902 62.4375 39.4996 62.9062 40.234 63.9531C41.109 65.1875 41.7652 66.6406 42.109 68.1406C46.4371 69.0156 51.4371 69.7188 56.5934 70.125C56.9215 70.1562 57.2496 70.1719 57.5777 70.2031C57.7027 67.9687 58.484 65.75 59.7652 63.9531C60.4996 62.9062 61.609 62.4375 62.8434 62.0938C63.7652 61.8438 64.7809 61.6875 65.8277 61.6719C66.1402 61.6562 66.4527 61.6562 66.7496 61.6719V60.9844C66.7965 57.6719 67.2809 54.125 69.3902 51.8594L71.4527 53.7969C70.3277 54.9844 69.609 58.0469 69.5621 61.0312C69.5465 61.4062 69.5621 61.7656 69.5621 62.1406C70.0309 62.2812 70.484 62.4688 70.9215 62.6875C72.1402 63.3438 73.234 64.4531 73.5465 65.9688C73.859 67.4375 74.0152 68.9531 74.0152 70.4688C78.7496 70.2656 83.1871 69.7812 86.9527 68.9844C87.0465 62.5625 83.7496 55.5156 78.3277 52.6562C71.9215 49.2656 63.7652 47.4531 55.5309 47.4062ZM51.9996 53.3125H52.4684C54.1246 53.3594 55.8277 53.5781 57.5777 54.0156L56.8902 56.7344C51.2809 55.3281 46.1715 56.5312 41.2809 58.25C41.5777 58.6094 41.9996 58.9844 42.5777 59.3438C43.7809 60.1094 45.484 60.7812 47.3746 61.25C51.1715 62.1719 55.7184 62.1875 58.3121 61.1562L59.3434 63.7812C55.7965 65.1719 50.9527 65.0156 46.7184 63.9844C44.5934 63.4688 42.6402 62.7188 41.0777 61.7188C39.4996 60.7188 38.234 59.4062 37.9684 57.6406L37.7965 56.5156L38.8746 56.125C42.8434 54.6406 47.234 53.2812 51.9996 53.3125ZM76.5152 56.0156C76.8832 56.016 77.2475 56.0855 77.5873 56.22C77.9271 56.3545 78.2357 56.5515 78.4954 56.7996C78.7552 57.0478 78.961 57.3422 79.1012 57.6662C79.2413 57.9901 79.313 58.3372 79.3121 58.6875C79.313 59.0378 79.2413 59.3849 79.1012 59.7088C78.961 60.0328 78.7552 60.3272 78.4954 60.5754C78.2357 60.8235 77.9271 61.0205 77.5873 61.155C77.2475 61.2895 76.8832 61.359 76.5152 61.3594C76.1472 61.359 75.7829 61.2895 75.4432 61.155C75.1034 61.0205 74.7948 60.8235 74.535 60.5754C74.2753 60.3272 74.0694 60.0328 73.9293 59.7088C73.7892 59.3849 73.7175 59.0378 73.7184 58.6875C73.7175 58.3372 73.7892 57.9901 73.9293 57.6662C74.0694 57.3422 74.2753 57.0478 74.535 56.7996C74.7948 56.5515 75.1034 56.3545 75.4432 56.22C75.7829 56.0855 76.1472 56.016 76.5152 56.0156ZM33.6715 64.4688C33.5465 64.4688 33.4059 64.4844 33.2652 64.4844C32.1715 64.5469 31.109 64.7969 30.3902 65.1719C29.6715 65.5625 29.3277 65.9688 29.2027 66.5625C28.484 69.9688 28.734 73.6562 30.0309 76.875C29.9059 76.5625 30.0621 76.8906 30.7652 77.0156C31.484 77.1406 32.5465 77.1563 33.6246 76.9844C35.8121 76.6719 38.0465 75.5938 38.7809 74.2969C40.109 71.9844 39.6715 68.0156 37.9527 65.5781C37.8746 65.4844 37.2965 65.0469 36.4059 64.8125C35.6246 64.5938 34.6402 64.4688 33.6715 64.4688ZM66.3277 64.4688C65.359 64.4688 64.3746 64.5938 63.5934 64.8125C62.7027 65.0469 62.1246 65.4844 62.0465 65.5781C60.3277 68.0156 59.8902 71.9844 61.2184 74.2969C61.9527 75.5938 64.1871 76.6719 66.3746 76.9844C67.4527 77.1563 68.5152 77.1406 69.234 77.0156C69.9371 76.8906 70.0934 76.5625 69.9684 76.875C71.2652 73.6562 71.5152 69.9688 70.7965 66.5625C70.6715 65.9688 70.3277 65.5625 69.609 65.1719C68.8902 64.7969 67.8277 64.5469 66.734 64.4844C66.5934 64.4844 66.4527 64.4688 66.3277 64.4688ZM42.4371 71.1094C42.4059 72.7188 42.0152 74.3125 41.2184 75.7031C39.7496 78.2656 36.7496 79.375 34.0465 79.7812C32.7027 79.9688 31.3902 79.9844 30.2652 79.7812C29.2965 79.6094 28.2809 79.3281 27.6871 78.4219C27.9996 80.7656 28.3277 83.2656 28.734 86.0938H43.5934V71.3281C43.2027 71.2656 42.8121 71.1875 42.4371 71.1094ZM46.4059 71.7812V86.0938H53.6871L53.6246 72.6719C51.1402 72.4375 48.7184 72.1406 46.4059 71.7812ZM56.4371 72.9219L56.4996 86.0938H71.2809C71.6871 83.1875 72.0309 80.6875 72.359 78.3438C71.7652 79.3125 70.734 79.6094 69.734 79.7812C68.609 79.9844 67.2965 79.9688 65.9527 79.7812C63.2496 79.375 60.2496 78.2656 58.7809 75.7031C58.2965 74.8594 57.9684 73.9531 57.7809 73.0156C57.3277 72.9844 56.8902 72.9531 56.4371 72.9219Z"
                      fill="#699BF7"
                    />
                    <path
                      d="M0 30C0 13.4315 13.4315 0 30 0H70C86.5685 0 100 13.4315 100 30V70C100 86.5685 86.5685 100 70 100H30C13.4315 100 0 86.5685 0 70V30Z"
                      fill="#699BF7"
                      fill-opacity="0.3"
                    />
                  </svg>
                </span>
                <h4 className="text-[#699BF7] text-bold mt-2 ml-5">Fishery</h4>
              </div>
              <div className="construction text-center mx-auto md:flex md:items-center">
                <span>
                  <svg
                    class="sm:w-16 sm h-16 lg:w-16 lg:h-16"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M60.8203 38.57C61.2425 38.4609 61.6906 38.5216 62.0686 38.7391C62.4465 38.9565 62.7242 39.3135 62.842 39.7333C63.3955 41.7146 63.483 43.797 63.0978 45.8177C62.7125 47.8385 61.8649 49.7426 60.6213 51.3813C59.3777 53.0199 57.7718 54.3486 55.9292 55.2633C54.0867 56.1781 52.0574 56.654 50.0003 56.654C47.9432 56.654 45.914 56.1781 44.0714 55.2633C42.2289 54.3486 40.623 53.0199 39.3794 51.3813C38.1357 49.7426 37.2882 47.8385 36.9029 45.8177C36.5176 43.797 36.6052 41.7146 37.1587 39.7333C37.2765 39.3135 37.5541 38.9565 37.9321 38.7391C38.31 38.5216 38.7581 38.4609 39.1803 38.57C45.3837 40.17 54.617 40.17 60.8203 38.57ZM40.067 42.19C39.9077 43.5896 40.0458 45.0071 40.4725 46.3496C40.8991 47.6921 41.6045 48.9293 42.5426 49.9802C43.4806 51.0311 44.6301 51.8719 45.9158 52.4477C47.2014 53.0234 48.5942 53.321 50.0028 53.321C51.4115 53.321 52.8042 53.0234 54.0899 52.4477C55.3755 51.8719 56.525 51.0311 57.4631 49.9802C58.4011 48.9293 59.1066 47.6921 59.5332 46.3496C59.9598 45.0071 60.098 43.5896 59.9387 42.19C53.9103 43.4066 46.0937 43.4066 40.067 42.19Z"
                      fill="#FFC700"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.6667 57.4833C31.6883 59.225 20 63.6717 20 70V80H80V70C80 63.6717 68.3117 59.225 58.3333 57.4833V65H41.6667V57.4833ZM31.6667 80V65H35V80H31.6667ZM66.6667 65V80H70V65H66.6667ZM51.6667 20.0967V27.4667C51.6667 27.9087 51.4911 28.3326 51.1785 28.6452C50.866 28.9577 50.442 29.1333 50 29.1333C49.558 29.1333 49.134 28.9577 48.8215 28.6452C48.5089 28.3326 48.3333 27.9087 48.3333 27.4667V20C46.6127 20.0909 44.9208 20.4801 43.3333 21.15V30.8C43.3333 31.242 43.1577 31.666 42.8452 31.9785C42.5326 32.2911 42.1087 32.4667 41.6667 32.4667C41.2246 32.4667 40.8007 32.2911 40.4882 31.9785C40.1756 31.666 40 31.242 40 30.8V23.225C37.7167 25.1883 36.4 27.735 35.9817 29.9667C35.9673 30.0443 35.954 30.1221 35.9417 30.2L35.9083 30.2333C35.76 31.2817 35.8417 32.145 36.055 32.7383C36.1916 33.1512 36.1615 33.6011 35.971 33.9921C35.7805 34.383 35.4448 34.684 35.0354 34.8308C34.6261 34.9776 34.1755 34.9586 33.78 34.7779C33.3845 34.5971 33.0752 34.2689 32.9183 33.8633C32.8901 33.7861 32.8634 33.7083 32.8383 33.63C23.16 46.2667 76.8933 46.26 67.145 33.6083C67.1198 33.6899 67.0931 33.771 67.065 33.8517C66.9113 34.2587 66.6046 34.5895 66.2103 34.7735C65.816 34.9574 65.3654 34.9798 64.9548 34.836C64.5441 34.6921 64.206 34.3934 64.0127 34.0037C63.8193 33.6139 63.7861 33.164 63.92 32.75C64.16 32.06 64.23 31.2 64.1 30.25C64.0901 30.2427 64.0801 30.2355 64.07 30.2283C63.71 27.975 62.34 25.4833 60 23.52V30.8C60 31.242 59.8244 31.666 59.5118 31.9785C59.1993 32.2911 58.7754 32.4667 58.3333 32.4667C57.8913 32.4667 57.4674 32.2911 57.1548 31.9785C56.8423 31.666 56.6667 31.242 56.6667 30.8V21.4367C56.0159 21.1443 55.346 20.8965 54.6617 20.695C53.6824 20.4096 52.6803 20.2105 51.6667 20.0967Z"
                      fill="#FFC700"
                    />
                    <path
                      d="M0 30C0 13.4315 13.4315 0 30 0H70C86.5685 0 100 13.4315 100 30V70C100 86.5685 86.5685 100 70 100H30C13.4315 100 0 86.5685 0 70V30Z"
                      fill="#FFC700"
                      fill-opacity="0.3"
                    />
                  </svg>
                </span>
                <h4 className="text-[#FFC700] text-bold mt-2 ml-5">
                  Construction
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-team max-w-5xl px-7 mx-auto m-20">
        <h1 className="text-5xl font-semibold text-[#927F7F]  mb-10">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center px-10 gap-x-4 gap-y-7">
          <div className="w-full  img-team-1 rounded-t-xl shadow-lg bg-white">
            <img
              src={imageTeam1}
              alt="Xainur Rahmad"
              className="rounded-t-lg w-full"
            />
            <h1 className="px-2 text-xl font-bold text-slate-400 mt-3">CEO</h1>
            <h1 className="px-2  text-xl font-bold text-black mt-3 mb-4">
              Zainur Rahmad
            </h1>
          </div>
          <div className="w-full  img-team-1 rounded-t-xl shadow-lg bg-white">
            <img
              src={imageTeam2}
              alt="Xainur Rahmad"
              className="rounded-t-lg w-full"
            />
            <h1 className="px-2 text-xl font-bold text-slate-400 mt-3">
              Teach Head
            </h1>
            <h1 className="px-2  text-xl font-bold text-black mt-3 mb-4">
              Bagus Iguna Putra
            </h1>
          </div>
          <div className="w-full  img-team-1 rounded-t-xl shadow-lg bg-white">
            <img
              src={imageTeam3}
              alt="Xainur Rahmad"
              className="rounded-t-lg w-full"
            />
            <h1 className="px-2 text-xl font-bold text-slate-400 mt-3">
              Tresury
            </h1>
            <h1 className="px-2  text-xl font-bold text-black mt-3 mb-4">
              Nadia Ayu
            </h1>
          </div>
          <div className="w-full  img-team-1 rounded-t-xl shadow-lg bg-white">
            <img
              src={imageTeam4}
              alt="Xainur Rahmad"
              className="rounded-t-lg w-full"
            />
            <h1 className="px-2 text-xl font-bold text-slate-400 mt-3">
              Finace
            </h1>
            <h1 className="px-2  text-xl font-bold text-black mt-3 mb-4">
              Anggita Triastuti
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 h-[200px] bg-red-500"></div> */}
    </>
  );
};
