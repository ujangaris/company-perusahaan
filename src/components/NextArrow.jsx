import React from "react";
import { BsChevronRight } from "react-icons/bs";
export const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 -top-[80px" onClick={onClick}>
      <div className="bg-slate-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight />
      </div>
    </div>
  );
};
