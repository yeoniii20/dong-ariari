"use client";

import Image from "next/image";
import checkIcon from "@/images/icon/radio_button_checked.svg";
import uncheckIcon from "@/images/icon/radio_button_unchecked.svg";

interface MultiSelectOptionsProps {
  selectedOptions: string[];
  optionData: { id: number; label: string }[];
  handleMenuClick: (label: string) => void;
}

const MultiSelectOptions = ({
  selectedOptions,
  optionData,
  handleMenuClick,
}: MultiSelectOptionsProps) => {
  return (
    <div
      className={`z-50 absolute top-full mt-2 bg-background rounded-lg border border-menuborder shadow-default flex flex-col w-[116px]`}
    >
      {optionData.map((item, index) => {
        // border-radius

        return (
          <div
            key={item.id}
            className={`relative flex justify-center items-center text-base text-subtext1 cursor-pointer active:bg-pressed px-[10px] py-[12px]
            ${index === 0 ? "rounded-t-lg" : ""}
            ${index === optionData.length - 1 ? "rounded-b-lg" : ""}
          

            ${index !== 0 ? "border-t border-menuborder " : ""}
            ${"text-subtext1  mx-[4px] hover:bg-hover hover:mx-[0px] hover:px-[14px] hover:text-subtext1"}
          `}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleMenuClick(item.label)}
          >
            <Image
              src={
                selectedOptions.includes(item.label) ? checkIcon : uncheckIcon
              }
              alt="checkbox"
              className="mr-[10px]"
            />
            <span className="w-full text-left text-[15px]">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectOptions;
