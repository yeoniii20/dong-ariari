"use client";

import LargeBtn from "@/components/button/basicBtn/largeBtn";
import React, { useState, useEffect } from "react";

interface DayFloatingBarProps {
  deadline: Date;
}

const RecruitmentGuideFloatingBar = ({ deadline }: DayFloatingBarProps) => {
  const formattedDeadline = `${
    deadline.getMonth() + 1
  }월 ${deadline.getDate()}일 ${deadline.getHours()}:${deadline
    .getMinutes()
    .toString()
    .padStart(2, "0")} 모집 마감`;

  return (
    <div
      className="fixed bottom-0 left-0 w-full flex justify-center"
      style={{ zIndex: 1000 }}
    >
      <div
        className="w-full bg-white70 shadow-default rounded-56
        max-w-[1248px] mb-9 pl-[38px] pr-3 py-[10px]"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-subtext1 text-body3_m">
              모집 마감까지 남은 시간
            </p>
            <h3 className="text-h3 text-text1">{formattedDeadline}</h3>
          </div>
          <LargeBtn title={"모집공고 보기"} onClick={() => {}} round={true} />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentGuideFloatingBar;
