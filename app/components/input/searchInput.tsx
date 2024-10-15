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

const SearchInput = ({
  onSearch,
  className,
  showRecentSearches,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "최근 검색어 1",
    "최근 검색어 2",
    "최근 검색어 3",
  ]);
  const [isFocused, setIsFocused] = useState(false);

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
      className={`relative w-full max-w-[564px] ${className} focus-within:border-searchbarborder border border-transparent rounded-xl`}
    >
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
        className="w-full pl-[46px] pr-[22px] py-[13px] rounded-xl bg-searchbar text-text1 text-base focus:outline-none"
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
