"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/images/logo/logo.svg";
import instagram from "@/images/icon/instagram.svg";

const Footer = () => {
  const router = useRouter();

  const LINKS = [
    { text: "개인정보처리방침", href: "/privacyPolicy" },
    { text: "회원약관", href: "/terms" },
    { text: "고객센터", href: "/support" },
  ];

  return (
    <footer className="w-full flex justify-center bg-white pt-[68px] pb-[92px]">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg px-5 flex flex-col items-center">
        <div className="flex justify-between items-center w-full">
          <Image src={logo} alt="Logo" width={205} height={52} />
          <Image
            src={instagram}
            alt="instagram"
            width={44}
            height={44}
            onClick={() => router.push("https://instagram.com")}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center w-full mt-6">
          <div className="flex space-x-12 text-unselected text-15 font-medium">
            {LINKS.map((link, index) => (
              <p
                key={index}
                onClick={() => router.push(link.href)}
                className="cursor-pointer hover:underline"
              >
                {link.text}
              </p>
            ))}
          </div>
          <div className="flex flex-row space-x-[19px] text-subtext2 text-15 font-medium">
            <p>서비스 문의 메일</p>
            <p>ariari2024.official@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-6">
          <p className="text-subtext2 text-sm">
            © 2024 Ariari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
