"use client";

import Image from "next/image";
import closeIcon from "@/images/icon/close.svg";

interface RecentSearchTermDropdownProps {
  recentSearches: string[];
  onRecentSearchClick: (searchTerm: string) => void;
  onRemoveSearchItem: (index: number) => void;
}

const RecentSearchTermDropdown = ({
  recentSearches,
  onRecentSearchClick,
  onRemoveSearchItem,
}: RecentSearchTermDropdownProps) => {
  return (
    <div className="absolute left-0 right-0 mt-2 bg-background rounded-xl shadow-default">
      {recentSearches.map((search, index) => (
        <div
          key={index}
          className={`flex justify-between items-center px-[22px] py-[14px] hover:bg-hover text-base cursor-pointer focus:bg-pressed 
                ${index === 0 ? "rounded-t-xl" : ""} 
                ${index === recentSearches.length - 1 ? "rounded-b-xl" : ""}`}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onRecentSearchClick(search)}
        >
          <span>{search}</span>
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveSearchItem(index);
            }}
          >
            <Image src={closeIcon} alt="close" width={24} height={24} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecentSearchTermDropdown;
