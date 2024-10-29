"use client";
import React from "react";

const Btn = ({
  label = "",
  classStyle = "",
  onClick,
  colored = false,
  disable = false,
}) => {
  return (
    <div
      onClick={disable ? ()=>{} : onClick}
      className={`w-32 h-10 ${disable && "opacity-50 cursor-not-allowed"}`}
    >
      <button
        type="button"
        disabled={disable}
        className={`${classStyle && classStyle} ${
          colored && "!bg-orange-600"
        } ${
          disable ? "opacity-50 cursor-not-allowed" : "active:!scale-50"
        } text-white shadow-lg transform  md:!text-sm text-xs transition-transform cursor-pointer
       bg-black rounded-full w-full h-full flex justify-center items-center p-2`}
      >
        {label && label}
      </button>
    </div>
  );
};

export default Btn;
