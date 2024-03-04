import React from "react";
import { Hero } from "./Hero";
import { Destination2 } from "./Destination2";
import { Company2 } from "./Company2";
import { About } from "./About";
import { We_do } from "./We_do";
import { Info } from "./Info";

export const Home = () => {
  return (
    <>
      <Hero />
      {/* akhir Hero section */}
      {/* Destination section */}
      <Destination2 />
      {/* akhir Destination section */}
      {/* Company section */}
      <Company2 />
      {/* Akhir Company section */}
      {/* About section */}
      <About />
      {/* akhir About section */}

      {/*  We do section */}
      <We_do />
      {/* akhir We do section */}
      {/* Info section */}
      <Info />
      {/* akhir Info section */}
    </>
  );
};
