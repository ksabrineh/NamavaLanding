"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { DragHandle } from "@mui/icons-material";
import Logo from "@/public/images/Logo shatel.png";

function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-0">
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-7 w-7 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="w-14 h-14 flex justify-center items-center mt-20">
              <Image
                width={200}
                height={200}
                src={Logo}
                alt="logo"
                className="object-contain !w-full !h-full"
              />
            </div>
            <div className="flex flex-col gap-10 text-sm w-full px-10 py-10">
              <Link href="#Suggestions" className="flex gap-2 items-center">
                <DragHandle fontSize="small" color="info" className="mt-1" />
                <div>پیشنهادات</div>
              </Link>
              <Link href="#Shopping" className="flex gap-2 items-center">
                <DragHandle fontSize="small" color="info" className="mt-1" />
                <div>خرید</div>
              </Link>
              <Link href="#Description" className="flex gap-2 items-center">
                <DragHandle fontSize="small" color="info" className="mt-1" />
                <div>توضیحات</div>
              </Link>
              <Link href="#ContactUs" className="flex gap-2 items-center">
                <DragHandle fontSize="small" color="info" className="mt-1" />
                <div>تماس</div>
              </Link>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 70%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #fafafa;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    `}</style>
    </div>
  );
}

export default HamburgerMenu;
