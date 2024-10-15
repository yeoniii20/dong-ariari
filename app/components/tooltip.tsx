import React from "react";
import Image from "next/image";
import tooltip from "@/images/icon/triangle.svg";

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

const Tooltip = ({ message, children }: TooltipProps) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="z-50 tooltip-content absolute py-6 px-[27px] mt-4 top-full right-5 p-3 bg-background text-subtext1 rounded-xl text-base w-[392px] hidden group-hover:block shadow-default">
        {message}
        <Image
          src={tooltip}
          alt={"tooltip"}
          width={24}
          height={24}
          className="tooltip-arrow absolute bottom-[85px] right-10"
        />
      </div>
    </div>
  );
};

export default Tooltip;
