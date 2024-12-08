import React from "react";

interface BadgeProps {
  text: string;
  textColor: "white" | "blue";
}

const Badge = ({ text, textColor }: BadgeProps) => {
  return (
    <>
      {textColor === "white" ? (
        <div
          className="bg-primary rounded text-white text-body3_m
        py-[3px] px-[10px] md:py-1 md:px-[10px]"
        >
          {text}
        </div>
      ) : (
        <div
          className="bg-selectedoption_hover rounded text-primary text-body3_m
        py-[3px] px-[10px] md:py-1 md:px-[10px]"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Badge;
