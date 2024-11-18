"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/logo.svg";
import SearchInput from "../input/searchInput";
import SearchTermContext from "@/context/searchTermContext";
import Tooltip from "../tooltip";
import User from "../user";
import HeaderTab from "../tab/headerTab";
import SmallButton from "../button/smallButton";

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
    <header className="w-full flex justify-center bg-background pt-11">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg px-5 space-y-8">
        <div className="flex justify-between items-center w-full">
          <Image
            src={logo}
            alt="Logo"
            width={205}
            height={52}
            onClick={handleHomeClick}
            className="cursor-pointer"
          />
          <div className="flex space-x-4">
            <User />
            <Tooltip message="동아리 관리 버튼을 설명하는 헬프 텍스트 입니다. 000 (최대 55자)">
              <SmallButton title={"동아리 관리"} onClick={() => {}} />
            </Tooltip>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <HeaderTab />
          <SearchInput
            onSearch={handleSearch}
            className="mb-[13px]"
            showRecentSearches={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
