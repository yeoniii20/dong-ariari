"use client";

import { useEffect, useRef, useState } from "react";
import PulldownOption from "@/components/pulldown/pullDownOption";

import Image from "next/image";
import keyboardArrowDown from "@/images/icon/keyboardArrowDown.png";

interface PulldownProps {
  optionData: { id: number; label: string }[];
}

const PullDown = ({ optionData }: PulldownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [affiliationType, setAffiliationType] = useState(optionData[0].label);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuClick = (label: string) => {
    setAffiliationType(label);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center">
      <button
        onClick={toggleDropdown}
        className={`relative flex items-center justify-between 
          w-[119px] h-[44px]  pl-[19px] pr-[14px] bg-white 
          text-subtext2 cursor-pointer rounded-[30px] border 
          border-menuborder hover:bg-hover 
          ${isDropdownOpen ? "focus:bg-pressed" : "focus:bg-transparent"} `}
      >
        <span className="text-base text-text1">{affiliationType}</span>
        <Image src={keyboardArrowDown} alt="keyboardArrowDown" />
      </button>

      {isDropdownOpen && (
        <PulldownOption
          optionData={optionData}
          handleMenuClick={handleMenuClick}
        />
      )}
    </div>
  );
};

export default PullDown;
