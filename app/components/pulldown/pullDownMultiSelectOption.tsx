"use client";

import Image from "next/image";
import checkIcon from "@/images/icon/radio_button_checked.svg";
import uncheckIcon from "@/images/icon/radio_button_unchecked.svg";

interface PulldownOptionProps {
  selectedOptions: string[];
  optionData: { id: number; label: string }[];
  handleMenuClick: (label: string) => void;
}

const PulldownOption = ({
  selectedOptions,
  optionData,
  handleMenuClick,
}: PulldownOptionProps) => {
  const isTwoColumn = optionData.length > 10;

  return (
    <div
      className={`z-50 absolute top-full mt-2 bg-background rounded-lg border border-menuborder shadow-default ${
        isTwoColumn ? "grid grid-cols-2 w-[234px]" : "flex flex-col w-[116px]"
      }`}
    >
      {optionData.map((item, index) => {
        // border-radius
        const isTopLeft = isTwoColumn && index === 0;
        const isTopRight = isTwoColumn && index === 1;
        const isBottomRight = isTwoColumn && index === 20 - 1;
        const isBottomLeft = isTwoColumn && index === optionData.length - 1;
        const isSingleColumnTop = !isTwoColumn && index === 0;
        const isSingleColumnBottom =
          !isTwoColumn && index === optionData.length - 1;

        return (
          <div
            key={item.id}
            className={`relative flex justify-center items-center text-base text-subtext1 cursor-pointer active:bg-pressed px-[10px] py-[12px]
            ${
              isTopLeft
                ? "rounded-tl-lg"
                : isTopRight
                ? "rounded-tr-lg"
                : isBottomLeft
                ? "rounded-bl-lg"
                : isBottomRight
                ? "rounded-br-lg"
                : ""
            }
              ${
                isSingleColumnTop
                  ? "rounded-t-lg"
                  : isSingleColumnBottom
                  ? "rounded-b-lg"
                  : ""
              }
            ${index !== 0 ? "border-t border-menuborder" : ""}
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
            <span className="text-left w-full">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PulldownOption;
