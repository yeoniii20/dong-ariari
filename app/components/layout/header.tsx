"use client";

import React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/logo.svg";
import SearchInput from "../input/searchInput";
import SearchTermContext from "@/context/searchTermContext";
import Tooltip from "../tooltip";
import User from "../user/user";
import HeaderTab from "../tab/headerTab";
import SmallButton from "../button/smallButton";
import MoblieUser from "../user/mobileUser";

const Header = () => {
  const router = useRouter();
  const { setSearchTerm } = useContext(SearchTermContext);

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    console.log("검색어 :", searchTerm);
  };

  return (
    <header className="w-full flex justify-center bg-background pt-[14px] md:pt-7">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg px-4 md:px-5 space-y-8">
        <div className="flex justify-between items-center w-full">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={38}
            onClick={handleHomeClick}
            className="hidden md:cursor-pointer md:block"
          />

          <div className="hidden md:block">
            <div className="flex space-x-5">
              <User />
              <Tooltip message="동아리 관리 버튼을 설명하는 헬프 텍스트 입니다. 000 (최대 55자)">
                <SmallButton title={"동아리 관리"} onClick={() => {}} />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between items-center w-full lg:flex-row">
          <HeaderTab />
          <div className="flex w-full items-center space-x-4">
            <SearchInput onSearch={handleSearch} showRecentSearches={true} />
            <div className="flex space-x-4">
              <div className="rounded-full w-7 h-7 bg-[#CBCBCB]" />
              <div className="rounded-full w-7 h-7 bg-[#CBCBCB]" />
            </div>
            {/* <MoblieUser /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
