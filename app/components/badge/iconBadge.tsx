import React from "react";
import Image from "next/image";
import file from "@/images/icon/file.svg";
import speechBubble from "@/images/icon/speechBubble.svg";

interface BadgeProps {
  type: "서류" | "면접";
  text: string;
}

/**
 *
 * @param type "서류" | "면접"
 * @returns
 */
const IconBadge = ({ type, text }: BadgeProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div
        className="flex bg-aelectedoption_default rounded
        py-[3px] md:py-1 md:px-[10px] gap-[6px] w-[66px] md:w-[70px] justify-center"
      >
        <Image src={type === "면접" ? speechBubble : file} alt={type} />
        <p className="text-primary text-body3_m">{type}</p>
      </div>
      <h3 className=" text-subtext2 text-body2_m">{text}</h3>
    </div>
  );
};

export default IconBadge;
