"use client";

import { useEffect, useRef, useState } from "react";
import PulldownOption from "@/components/pulldown/pullDownOption";
import Image from "next/image";
import keyboardArrowDown from "@/images/icon/keyboardArrowDown.svg";

interface PulldownProps {
  optionData: { id: number; label: string }[];
}

const PullDown = ({ optionData }: PulldownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(optionData[0].label);

  const isSelected = selectedOption !== optionData[0].label;

  const toggleDropdown = () => {
    // 열려있는 상태에서 클릭시 버튼 focus 아웃
    setIsDropdownOpen((prev) => {
      const nextState = !prev;
      if (!nextState) buttonRef.current?.blur();
      return nextState;
    });
  };

  const handleMenuClick = (label: string) => {
    setSelectedOption(label);
    toggleDropdown();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
      buttonRef.current?.blur();
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
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`relative flex items-center justify-between 
          pl-[19px] pr-[14px] py-[8px]
          cursor-pointer rounded-[30px] border 
          ${
            isSelected
              ? `bg-selectedoption_default border-selectedoptionborder hover:bg-selectedoption_hover focus:bg-selectedoption_pressed`
              : `bg-white border-menuborder hover:bg-hover focus:bg-pressed`
          }
        `}
      >
        <span
          className={`text-base min-w-[56px] text-left ${
            isSelected ? "text-primary" : "text-text1"
          }`}
        >
          {selectedOption}
        </span>
        <Image src={keyboardArrowDown} alt="keyboardArrowDown" />
      </button>

      {isDropdownOpen && (
        <PulldownOption
          selectedOption={selectedOption}
          optionData={optionData.slice(1)}
          handleMenuClick={handleMenuClick}
        />
      )}
    </div>
  );
};

export default PullDown;
