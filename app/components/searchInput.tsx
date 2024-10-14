"use client";

import Image from "next/image";
import { useState } from "react";
import searchIcon from "@/images/icon/search.svg";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="relative w-full max-w-[564px]">
      <Image
        src={searchIcon}
        alt="search"
        width={24}
        height={24}
        className="absolute left-4 top-4"
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="어떤 동아리를 찾으시나요?"
        className="w-full pl-[46px] pr-[22px] py-[13px] rounded-xl border outline-none bg-searchbar text-text1 text-base focus:border-searchbarborder"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchInput;
