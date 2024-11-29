"use client";

import React from "react";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";
import RecruitmentCard from "@/components/card/recruitmentCard";
import AcceptanceReviewDropdown from "@/components/dropdown/acceptanceReviewDropdown";

const ClubActivities = () => {
  return (
    <div className="bg-sub_bg w-full justify-center">
      <h1 className="mobile_h1_contents_title md:text-h1_contents_title text-text1">
        동아리 모집 안내
      </h1>
      <textarea className="w-full h-[247px] py-5 px-4 rounded-2xl" />
      <h1 className="mobile_h1_contents_title md:text-h1_contents_title text-text1 mt-[68px]">
        동아리 합격 후기
      </h1>
      <AcceptanceReviewDropdown
        title={"모집합니다."}
        date="2024.12.31"
        onClick={() => {}}
      />
      <div className="flex justify-center">
        <PlusBtn title={"더보기"} onClick={() => {}} />
      </div>
      <h1 className="mobile_h1_contents_title md:text-h1_contents_title text-text1 mt-[68px]">
        이전 모집 공고
      </h1>
      <RecruitmentCard
        title={"모집합니다."}
        date="2024.12.31"
        onClick={() => {}}
      />
      <div className="flex justify-center">
        <PlusBtn title={"더보기"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default ClubActivities;
