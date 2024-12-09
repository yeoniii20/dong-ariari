"use client";

import React from "react";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";
import RecruitmentCard from "@/components/card/recruitmentCard";
import AcceptanceReviewDropdown from "@/components/dropdown/acceptanceReviewDropdown";

const ACCEPTANCE_REVIEWS = [
  {
    id: 0,
    title: "2024년 봄학기 동아리 모집",
    date: "2024.12.31",
  },
  {
    id: 1,
    title: "가을학기 동아리 모집 후기",
    date: "2024.10.15",
  },
  {
    id: 2,
    title: "여름방학 동아리 모집 후기",
    date: "2024.07.20",
  },
];

const RECRUITMENT_CARDS = [
  {
    id: 0,
    title: "2024년 봄학기 동아리 모집",
    date: "2024.12.31",
    status: "모집중",
  },
  {
    id: 1,
    title: "가을학기 동아리 모집 공고",
    date: "2024.10.15",
    status: "모집중",
  },
  {
    id: 2,
    title: "여름방학 동아리 모집 안내",
    date: "2024.07.20",
    status: "모집마감",
  },
];

const ClubActivities = () => {
  return (
    <div className="bg-sub_bg flex justify-center items-center w-full">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-lx px-4 md:px-5">
        <h1 className="text-mobile_h1_contents_title mb-5 pt-8 md:pt-[44px] md:text-h1_contents_title text-text1">
          동아리 모집 안내
        </h1>
        <textarea className="w-full h-[247px] py-5 px-4 rounded-2xl" />
        <h1 className="text-mobile_h1_contents_title md:text-h1_contents_title text-text1 mt-[68px]">
          동아리 합격 후기
        </h1>
        <div className="flex flex-col mt-5 gap-3 md:gap-[14px]">
          {ACCEPTANCE_REVIEWS.map((item) => {
            return (
              <AcceptanceReviewDropdown
                key={item.id}
                title={item.title}
                date={item.date}
                onClick={() => {}}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-9 md:mt-10">
          <PlusBtn title={"더보기"} onClick={() => {}} />
        </div>
        <h1 className="text-mobile_h1_contents_title mt-12 md:text-h1_contents_title text-text1 md:mt-[68px]">
          이전 모집 공고
        </h1>
        <div className="flex flex-col mt-5 gap-3 md:gap-[14px]">
          {RECRUITMENT_CARDS.map((item) => {
            return (
              <RecruitmentCard
                key={item.id}
                title={item.title}
                date={item.date}
                onClick={() => {}}
                status={item.status === "모집중" ? "enable" : "disable"}
              />
            );
          })}
        </div>
        <div className="flex justify-center pb-[80px] md:pb-[124px] mt-9 md:mt-10">
          <PlusBtn title={"더보기"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ClubActivities;
