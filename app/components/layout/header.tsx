"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/logo.svg";
import Button from "../button";
import SearchInput from "../searchInput";
import Tab from "../tab";

const Header = () => {
  const router = useRouter();

  const handleSearch = (searchTerm: string) => {
    console.log("검색어 :", searchTerm);
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <header className="w-full bg-white px-8 shadow-md">
      <div className="flex items-center justify-between h-[80px]">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={205}
            height={52}
            onClick={handleHomeClick}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-500 cursor-pointer">
            로그인 후 이용하기
          </span>
          <Button title={"동아리 관리"} onClick={() => {}} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full pt-4">
        <Tab />
        <SearchInput onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
