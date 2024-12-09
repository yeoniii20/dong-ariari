import React from "react";

interface BadgeProps {
  status: "enable" | "disable";
}

const Badge = ({ status }: BadgeProps) => {
  const statusVal = status === "enable";
  return (
    <div className="flex text-center">
      <div
        className={`rounded text-mobile_body3_m md:text-body3_m
        py-[3px] w-[62px] md:py-1 md:w-[66px] ${
          statusVal
            ? `text-primary bg-selectedoption_hover`
            : `text-subtext2 bg-token_bg`
        }`}
      >
        {statusVal ? "모집중" : "모집마감"}
      </div>
    </div>
  );
};

export default Badge;
