import React, { useState } from "react";

interface SubTapProps {
  options: { label: string; number?: number }[];
}

const SubTap = ({ options }: SubTapProps) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleToggle = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div
      className={`h-[40px] p-[2px] flex justify-between items-center gap-[6px] bg-searchbar rounded-[28px] md:h-[44px] md:rounded-[28px] md:gap-[10px]`}
    >
      {options.map((option, index) =>
        selectedOption == index ? (
          <div
            key={index}
            className={`h-[36px] px-[16px] flex items-center justify-center gap-[4px] text-center font-semibold text-primary text-sm  bg-white shadow-default rounded-[28px] cursor-pointer transition-all duration-500 md:h-[40px] md:rounded-[28px] md:px-[20px] md:text-base`}
          >
            {option.label}
            {option.number && (
              <div className=" w-[20px] h-[20px] flex items-center justify-center bg-selectedoption_default rounded-full text-xs  md:w-[24px] md:h-[24px]">
                {option.number}
              </div>
            )}
          </div>
        ) : (
          <div
            key={index}
            className={`px-[16px] flex items-center justify-center gap-[4px] text-center text-unselected text-sm cursor-pointer md:px-[20px] md:text-base `}
            onClick={() => handleToggle(index)}
          >
            {option.label}
            {option.number && (
              <div className="w-[20px] h-[20px] flex items-center justify-center bg-token_bg rounded-full text-xs text-center md:w-[24px] md:h-[24px]">
                {option.number}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SubTap;
