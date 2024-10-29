"use client"
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Btn from "@/tools/Btn";
import Logo from "@/public/images/Logo shatel.png";

function Header() {
  const router = useRouter();
  return (
    <div className="h-16 bg-white shadow-xl border border-black w-full flex-wrap flex justify-around gap-2 items-center">
      <div className="flex gap-20 items-center md:!w-[50%]">
        <div className="w-14 h-14 flex justify-center items-center">
          <Image
            width={200}
            height={200}
            src={Logo}
            alt="logo"
            className="object-contain !w-full !h-full"
          />
        </div>
        <div className="md:!flex hidden gap-10 text-sm items-center">
          <Link href="#Suggestions">
            <div>پیشنهادات</div>
          </Link>
          <Link href="#Shopping">
            <div>خرید</div>
          </Link>
          <Link href="#Description">
            <div>توضیحات</div>
          </Link>
          <Link href="#ContactUs">
            <div>تماس</div>
          </Link>
        </div>
      </div>
      <div className="md:!w-[20%] flex gap-4 justify-around items-center">
        <Btn
          label="شاتل"
          colored={true}
          onClick={() => router.push("https://my.shatel.ir/")}
        ></Btn>
        <Btn label="نماوا" onClick={() => router.push("https://www.namava.ir/home")}></Btn>
      </div>
    </div>
  );
}

export default Header;
