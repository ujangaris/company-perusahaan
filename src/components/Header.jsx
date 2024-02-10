import { useEffect, useRef, useState } from "react";
// import backgroundImage from "../../src/assets/Hero-image.png";
import logo from "../../src/assets/logo-perusahaan.png";
import { Link } from "react-router-dom";

export const Header = () => {
  // Hamburger
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  // stiky
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  // menu
  const [navMenu, setNavMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
    setNavMenu(!navMenu);
  };

  // logic stiky
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-transparent absolute top-0 left-0 w-full flex items-center justify-between z-10 ${
          isNavbarFixed ? "navbar-fixed" : "bg-white"
        }`}
      >
        <div className="container lg:mx-auto max-w-7xl flex justify-center mr-32 md:mr-48 ">
          <div className="flex justify-between md:items-center p-6 gap-x-2 xl:gap-x-16">
            <div className="flex">
              <img src={logo} alt="" className="w-full  h-10 md:h-auto" />
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center justify-center gap-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-base font-medium text-slate-900 hover:text-green-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-base font-medium text-slate-500 hover:text-green-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-medium text-slate-500 hover:text-green-500"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-medium text-slate-500 hover:text-green-500"
                  >
                    Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-medium text-slate-500 hover:text-green-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center  justify-center gap-x-4  ">
              <div className="lg:block hidden">
                <button
                  href="#"
                  className="text-base text-slate-900 font-bold hover:bg-rose-400 hover:text-sm hover:text-white hover:px-6 hover:py-2 rounded-full"
                >
                  Login
                </button>
              </div>
              <div className="lg:block hidden">
                <a href="#" className=" ">
                  <svg
                    width="36"
                    height="26"
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4.059V8H5.628L0 4.059ZM4.664 26H13V20.163L4.664 26ZM23 20.164V26H31.335L23 20.164ZM0 18V21.941L5.63 18H0ZM31.337 0H23V5.837L31.337 0ZM36 21.942V18H30.369L36 21.942ZM36 8V4.059L30.371 8H36ZM13 0H4.664L13 5.837V0Z"
                      fill="#00247D"
                    />
                    <path
                      d="M25.1402 18L34.8522 24.801C35.3265 24.3124 35.6674 23.7101 35.8422 23.052L28.6272 18H25.1402ZM13.0002 18H10.8592L1.14823 24.8C1.66923 25.33 2.33723 25.709 3.08623 25.885L13.0002 18.943V18ZM23.0002 7.99999H25.1412L34.8522 1.19999C34.3223 0.662265 33.6506 0.286017 32.9152 0.11499L23.0002 7.05699V7.99999ZM10.8592 7.99999L1.14823 1.19999C0.67418 1.68896 0.333041 2.29103 0.157227 2.94899L7.37223 7.99999H10.8592Z"
                      fill="#CF1B2B"
                    />
                    <path
                      d="M36 16H21V26H23V20.164L31.335 26H32C32.5313 26.0001 33.0572 25.8941 33.5469 25.6882C34.0367 25.4823 34.4804 25.1807 34.852 24.801L25.14 18H28.627L35.842 23.052C35.935 22.715 36 22.366 36 22V21.942L30.369 18H36V16ZM0 16V18H5.63L0 21.941V22C0 23.091 0.439 24.078 1.148 24.8L10.859 18H13V18.943L3.086 25.884C3.38 25.954 3.684 26 4 26H4.664L13 20.163V26H15V16H0ZM36 4C36.0006 2.95198 35.5881 1.94595 34.852 1.2L25.141 8H23V7.057L32.915 0.115C32.6155 0.0415274 32.3084 0.00293805 32 3.78378e-07H31.337L23 5.837V3.78378e-07H21V10H36V8H30.371L36 4.059V4ZM13 3.78378e-07V5.837L4.664 3.78378e-07H4C3.46862 -0.000231172 2.94257 0.105813 2.45278 0.311895C1.96299 0.517977 1.51936 0.819934 1.148 1.2L10.859 8H7.372L0.157 2.949C0.0577802 3.29071 0.00497341 3.64421 0 4L0 4.059L5.628 8H0V10H15V3.78378e-07H13Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M21 10V0H15V10H0V16H15V26H21V16H36V10H21Z"
                      fill="#CF1B2B"
                    />
                  </svg>
                </a>
              </div>
              <div className="group lg:block hidden">
                <a
                  href="#"
                  className="md:inline-block md:w-auto sm:text-sm md:text-base lg:text-lg bg-green-500 rounded-full text-white py-2 px-8 mx-2 flex items-center justify-center group-hover:text-white group-hover:bg-violet-500"
                >
                  Submit CV
                </a>
              </div>

              <div className="flex items-center">
                <button
                  onClick={toggleHamburger}
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className={`block absolute right-4  lg:hidden ${
                    isHamburgerActive ? "hamburger-active" : ""
                  }`}
                >
                  <span className="hamburger-line transition duration-300 ease-in-out origin-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>
                <nav
                  id="#nav-menu"
                  className={`${
                    !navMenu ? "hidden" : ""
                  } absolute py-5  bg-white shadow-lg rounded-lg max-w-[250px] w-full mt-1 md:-mt-2 right-4 top-full lg:block lg:hidden lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
                >
                  <ul className=" lg:flex gap-x-4 justify-center">
                    <li className="group">
                      <Link
                        href="/"
                        className="md:text-xs  text-dark py-2  mx-8 lg:mx-0 flex group-hover:text-green-500"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        to="/about"
                        className="md:text-xs text-dark py-2 mx-8 lg:mx-0  flex group-hover:text-green-500"
                      >
                        About
                      </Link>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="md:text-xs  text-dark  py-2 mx-8 lg:mx-0 flex group-hover:text-green-500"
                      >
                        Jobs
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="md:text-xs text-dark  py-2 mx-8 lg:mx-0 flex group-hover:text-green-500"
                      >
                        Info
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="md:text-xs  text-dark   py-2 mx-8 lg:mx-0 flex group-hover:text-green-500"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="md:text-xs  lg:hidden text-dark py-2 mx-8 lg:mx-0 hover:border-4 hover:border-rose-500  flex group-hover:text-green-500"
                      >
                        Login
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-base lg:hidden text-dark py-2  mx-8 lg:mx-0 flex "
                      >
                        <svg
                          width="47"
                          height="34"
                          viewBox="0 0 47 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_160_1218)">
                            <path
                              d="M0 4.059V8H5.628L0 4.059ZM4.664 26H13V20.163L4.664 26ZM23 20.164V26H31.335L23 20.164ZM0 18V21.941L5.63 18H0ZM31.337 0H23V5.837L31.337 0ZM36 21.942V18H30.369L36 21.942ZM36 8V4.059L30.371 8H36ZM13 0H4.664L13 5.837V0Z"
                              fill="#00247D"
                            />
                            <path
                              d="M25.1402 18L34.8522 24.801C35.3265 24.3124 35.6674 23.7101 35.8422 23.052L28.6272 18H25.1402ZM13.0002 18H10.8592L1.14823 24.8C1.66923 25.33 2.33723 25.709 3.08623 25.885L13.0002 18.943V18ZM23.0002 7.99999H25.1412L34.8522 1.19999C34.3223 0.662265 33.6506 0.286017 32.9152 0.11499L23.0002 7.05699V7.99999ZM10.8592 7.99999L1.14823 1.19999C0.67418 1.68896 0.333041 2.29103 0.157227 2.94899L7.37223 7.99999H10.8592Z"
                              fill="#CF1B2B"
                            />
                            <path
                              d="M36 16H21V26H23V20.164L31.335 26H32C32.5313 26.0001 33.0572 25.8941 33.5469 25.6882C34.0367 25.4823 34.4804 25.1807 34.852 24.801L25.14 18H28.627L35.842 23.052C35.935 22.715 36 22.366 36 22V21.942L30.369 18H36V16ZM0 16V18H5.63L0 21.941V22C0 23.091 0.439 24.078 1.148 24.8L10.859 18H13V18.943L3.086 25.884C3.38 25.954 3.684 26 4 26H4.664L13 20.163V26H15V16H0ZM36 4C36.0006 2.95198 35.5881 1.94595 34.852 1.2L25.141 8H23V7.057L32.915 0.115C32.6155 0.0415274 32.3084 0.00293805 32 3.78378e-07H31.337L23 5.837V3.78378e-07H21V10H36V8H30.371L36 4.059V4ZM13 3.78378e-07V5.837L4.664 3.78378e-07H4C3.46862 -0.000231172 2.94257 0.105813 2.45278 0.311895C1.96299 0.517977 1.51936 0.819934 1.148 1.2L10.859 8H7.372L0.157 2.949C0.0577802 3.29071 0.00497341 3.64421 0 4L0 4.059L5.628 8H0V10H15V3.78378e-07H13Z"
                              fill="#EEEEEE"
                            />
                            <path
                              d="M21 10V0H15V10H0V16H15V26H21V16H36V10H21Z"
                              fill="#CF1B2B"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_160_1218"
                              x="0"
                              y="0"
                              width="47"
                              height="34"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dx="7" dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_160_1218"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_160_1218"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="#"
                        className="text-xs mt-2 lg:hidden bg-green-500 rounded-full text-center text-white py-2 mx-8 lg:mx-0 flex items-center justify-center group-hover:text-white group-hover:bg-violet-500"
                      >
                        Submit CV
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
