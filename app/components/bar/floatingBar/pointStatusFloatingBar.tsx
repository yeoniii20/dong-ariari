"use client";

import React from "react";
import Image from "next/image";
import dollar from "@/images/icon/dollar.svg";

interface DayFloatingBarProps {}

const PointStatusFloatingBar = ({}: DayFloatingBarProps) => {
  return (
    <div
      className="hidden fixed bottom-0 left-0 w-full md:flex justify-center"
      style={{ zIndex: 1000 }}
    >
      <div
        className="w-full bg-background rounded-56 border border-primary
        max-w-[1248px] mb-9 px-10 py-5"
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src={dollar} alt={"dollar"} width={40} height={40} />
            <h3 className="text-h3 text-primary ml-[21px]">나의 포인트 현황</h3>
            <p className="text-body2_m text-primary ml-[60px]">
              후기 열람시 5포인트가 차감됩니다.
            </p>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <div className="text-28">20</div>
            <p className="text-h4_r">p</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointStatusFloatingBar;
