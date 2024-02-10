import React from "react";
import { Hero } from "./Hero";
import { Destination } from "./Destination";
import { Company } from "./Company";
import { About } from "./About";
import { We_do } from "./We_do";
import { Info } from "./Info";

export const Home = () => {
  return (
    <>
      <Hero />
      {/* akhir Hero section */}
      {/* Destination section */}
      <Destination />
      {/* akhir Destination section */}
      {/* Company section */}
      <Company />
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
