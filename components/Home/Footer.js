import React from "react";
import Link from "next/link";

import { ChatBubble, Mail, Phone } from "@mui/icons-material";

function Footer() {
  return (
    <div className="h-[300px] flex md:!justify-around justify-between items-center w-full md:!p-10 p-5">
      <div className="flex flex-col gap-4 text-sm">
        <Link href="#Sugestions">پیشنهاد جشنواره</Link>
        <Link href="#About">درباره پیشنهاد</Link>
        <Link href="#Description">توضیحات بیشتر</Link>
        <Link href="#ContactUs">ارتباط با ما</Link>
      </div>
      <div className="flex flex-col gap-5 text-sm" dir="ltr">
        <Link href="tel:91000000" className="flex items-center gap-2">
          <div className="md:!p-2 p-1 bg-orange-600 rounded-full flex justify-center items-center">
            <Phone fontSize="small" className="!text-white" />
          </div>
          <span>91000000</span>
        </Link>
        <Link href="mailto:info@shatel.ir" className="flex items-center gap-2">
          <div className="md:!p-2 p-1 bg-orange-600 rounded-full flex justify-center items-center">
            <Mail fontSize="small" className="!text-white" />
          </div>
          <span>info@shatel.ir</span>
        </Link>
        <Link href="#Chat" className="flex items-center gap-2">
          <div className="md:!p-2 p-1 bg-orange-600 rounded-full flex justify-center items-center">
            <ChatBubble fontSize="small" className="!text-white" />
          </div>
          <span>گفت و گوی آنلاین</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
