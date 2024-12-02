"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import keyboardArrowDown from "@/images/icon/keyboardArrowDown.svg";
import SingleSelectOptions from "./singleSelectOptions";
import MultiSelectOptions from "./multiSelectOptions";

interface PulldownProps {
  optionData: { id: number; label: string }[];
  type: "singleSelect" | "multiSelect";
}

const PullDown = ({ optionData, type }: PulldownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    type === "singleSelect" ? [] : []
  );

  const isSelected = selectedOptions.length > 0;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => {
      const nextState = !prev;
      if (!nextState) buttonRef.current?.blur();
      return nextState;
    });
  };

  const handleMenuClick = (label: string) => {
    if (type === "singleSelect") {
      setSelectedOptions([label]);
      toggleDropdown();
    } else {
      setSelectedOptions((prevSelectedOptions) => {
        if (label === "전체") {
          // 전체 선택 o -> 전체 : 비움
          if (prevSelectedOptions.includes("전체")) {
            return [];
          }
          // 전체선택 x -> 전체 : 전체만 선택
          return ["전체"];
        } else {
          // 전체 선택 o -> 이 외 선택
          if (prevSelectedOptions.includes("전체")) {
            return [label];
          }
          // 전체 선택 x -> 이 외 선택
          return prevSelectedOptions.includes(label)
            ? prevSelectedOptions.filter((option) => option !== label)
            : [...prevSelectedOptions, label];
        }
      });
    }
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

  const selectedOptionText = selectedOptions[0]
    ? type === "singleSelect" ||
      (type === "multiSelect" && selectedOptions.length === 1)
      ? selectedOptions[0]
      : `${selectedOptions[0]} 외 ${selectedOptions.length - 1}`
    : optionData[0].label;

  const getDynamicStyle = () => {
    const length = selectedOptionText.replace(/\s/g, "").length;
    if (length <= 3) return "text-[15px]";
    else return "text-[14px]";
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
          pl-[12px] pr-[8px] py-[6px]
          cursor-pointer rounded-[30px] border gap-[6px]
          md:pl-[20px] md:pr-[14px] md:py-[8px]
          ${
            isSelected
              ? `bg-selectedoption_default border-selectedoptionborder hover:bg-selectedoption_hover focus:bg-selectedoption_pressed`
              : `bg-white border-menuborder hover:bg-hover focus:bg-pressed`
          }
        `}
      >
        <span
          className={`text-[13px] text-left md:text-[14px] ${
            isSelected ? "text-primary" : "text-text1"
          } md:${getDynamicStyle()}`}
        >
          {selectedOptionText}
        </span>

        <Image
          src={keyboardArrowDown}
          alt="keyboardArrowDown"
          className="w-[24px] h-[24px] md:w-[16px] md:h-[16px]"
        />
      </button>

      {isDropdownOpen &&
        (type === "singleSelect" ? (
          <SingleSelectOptions
            size={"small"}
            selectedOption={selectedOptions[0]}
            optionData={optionData.slice(1)}
            handleMenuClick={handleMenuClick}
          />
        ) : (
          <MultiSelectOptions
            selectedOptions={selectedOptions}
            optionData={optionData.slice(1)}
            size="small"
            handleMenuClick={handleMenuClick}
          />
        ))}
    </div>
  );
};

export default PullDown;
