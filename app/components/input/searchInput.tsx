"use client";

import Image from "next/image";
import { useState } from "react";
import searchIcon from "@/images/icon/search.svg";
import RecentSearchTermDropdown from "../dropdown/recentSearchTermDropdown";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  className?: string;
  showRecentSearches?: boolean;
}

/**
 *
 * @param onSearch 검색 핸들러
 * @param className 추가 style 코드
 * @param showRecentSearches 최근 검색어 표출 여부
 * @returns
 */
const SearchInput = ({
  onSearch,
  className,
  showRecentSearches,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "최근 검색어 1",
    "최근 검색어 2",
    "최근 검색어 3",
  ]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
      setRecentSearches([inputValue, ...recentSearches.slice(0, 4)]);
      setInputValue("");
      setIsFocused(false);
    }
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setInputValue(searchTerm);
    onSearch(searchTerm);
    setIsFocused(false);
  };

  const handleRemoveSearchItem = (index: number) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`relative w-full focus-within:border-searchbarborder border border-transparent rounded-xl md:mb-[26px] lg:max-w-[564px] lg:mb-[13px]`}
    >
      <Image
        src={searchIcon}
        alt="search"
        width={20}
        height={20}
        className="absolute left-2.5 top-3 md:left-4 md:top-4 md:w-6 md:h-6"
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="어떤 동아리를 찾으시나요?"
        className="w-full pl-10 py-[11px] md:pl-[46px] md:pr-[22px] md:py-[13px] rounded-xl bg-searchbar text-text1 text-13 md:text-base focus:outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {showRecentSearches && isFocused && recentSearches.length > 0 && (
        <RecentSearchTermDropdown
          recentSearches={recentSearches}
          onRecentSearchClick={handleRecentSearchClick}
          onRemoveSearchItem={handleRemoveSearchItem}
        />
      )}
    </div>
  );
};

export default SearchInput;
