"use client";

import Image from "next/image";
import logo from "@/images/logo/logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-primary h-[183px] flex items-center justify-between">
      <div className="max-w-7xl mx-auto">
        <Image src={logo} alt="Logo" width={205} height={52} />
      </div>
    </header>
  );
};

export default Header;
