"use client";

interface PulldownOptionProps {
  optionData: { id: number; label: string }[];
  handleMenuClick: (label: string) => void;
}

const PulldownOption = ({
  optionData,
  handleMenuClick,
}: PulldownOptionProps) => (
  <div className="z-50 absolute top-full  w-[116px] mt-2 bg-background rounded-lg border border-menuborder shadow-default">
    {optionData.map((item, index) => (
      <div
        key={item.id}
        className={`relative flex justify-center items-center text-base text-subtext1 cursor-pointer hover:bg-hover focus:bg-pressed
            ${index === 0 ? "rounded-t-lg" : ""}
            ${index === optionData.length - 1 ? "rounded-b-lg" : ""}
            ${index !== 0 ? "border-t border-menuborder mx-[5px]" : ""}`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => handleMenuClick(item.label)}
      >
        <span className="relative py-[10px] text-center w-full">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

export default PulldownOption;
