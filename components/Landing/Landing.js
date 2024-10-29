import React from "react";
import Image from "next/image";

import Form from "./Form";

import Photo from "@/public/images/pic2.png";
import CloudPhoto from "@/public/images/cloud.svg";
import WifiPhoto from "@/public/images/wifiicon.svg";
import titleLinePhoto from "@/public/images/title line.png";

function Landing() {
  return (
    <div className="w-full bg-[#f3f3f3] shadow-md shadow-orange-300">
      <div className="md:!w-[50%] w-full md:!p-10 p-5 flex flex-col gap-4">
        <div>
          <p>دریافت سرویس</p>
          <Image
            width={200}
            height={200}
            alt="titleLinePhoto"
            src={titleLinePhoto}
            className="w-20 h-5 object-contain flex justify-center items-center"
          />
        </div>
        <p className="leading-8 text-justify">
          برای بهره‌مندی از این شرایط و دریافت سرویس‌های مختلف اینترنت پرسرعت
          شاتل فرم زیر را تکمیل کنید تا همکاران ما در سریع‌ترین هنگام با شما
          تماس بگیرند.
        </p>
      </div>
      <div className="bg-[url('/images/background-feedback-home-1%201.jpg')]  flex flex-col md:!flex-row gap-2 justify-between md:!px-10 px-5 items-center w-full bg-cover bg-no-repeat bg-top md:!h-[60vh]">
        <Form />
        <div className="relative md:!w-[40%] w-full flex justify-center items-center h-full">
          <Image
            width={200}
            height={200}
            alt="CloudPhoto"
            src={CloudPhoto}
            className="w-20 h-20 md:!top-4 top-2 md:!left-5 left-2 absolute object-contain flex justify-center items-center"
          />

          <Image
            width={200}
            height={200}
            alt="WifiPhoto"
            src={WifiPhoto}
            className="w-20 h-20 md:!top-10 top-2 md:!right-32 right-2 absolute object-contain flex justify-center items-center"
          />

          <Image
            width={400}
            height={400}
            alt="Photo"
            src={Photo}
            className="!w-full !h-full object-contain flex justify-center items-center md:!pt-0 pt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
