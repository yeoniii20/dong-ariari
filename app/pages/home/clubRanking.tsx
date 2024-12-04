"use client";

import { useMediaQuery } from "react-responsive";

import PullDown from "@/components/pulldown/pullDown";
import SubTap from "@/components/tab/subTap";
import ClubRankingCard from "@/components/card/clubRankingCard";
import ClubRankingList from "@/components/card/clubLankingList";

import { Affiliation_Type, Area_Type, Field_Type } from "@/data/pulldown";
import { useState } from "react";

const dummyCardData = [
  { id: 1, rank: 1, title: "Card 1", description: "짧은 동아리 소개." },
  {
    id: 2,
    rank: 2,
    title: "Card 2",
    description: "긴 동아리 소개 긴 동아리 소개 긴 동아리 소개 긴 동아리 소개",
  },
  { id: 3, rank: 3, title: "Card 3", description: "짧은 동아리 소개" },
  {
    id: 4,
    rank: 4,
    title: "Card 4",
    description: "긴 동아리 소개 긴 동아리 소개 긴 동아리 소개 긴 동아리 소개",
  },
  {
    id: 5,
    rank: 5,
    title: "Card 5",
    description: "짧은 동아리 소개",
  },
  {
    id: 6,
    rank: 6,
    title: "Card 6",
    description: "짧은 동아리 소개",
  },
  {
    id: 7,
    rank: 7,
    title: "Card 6",
    description: "짧은 동아리 소개",
  },
  {
    id: 8,
    rank: 8,
    title: "Card 6",
    description: "짧은 동아리 소개",
  },
  {
    id: 9,
    rank: 9,
    title: "Card 6",
    description: "짧은 동아리 소개",
  },
];

const ClubRanking = () => {
  const isTab = useMediaQuery({ query: "(min-width: 768px)" });
  const [fieldType, setFieldType] = useState<string[]>([]);
  const [affiliationType, setAffiliationType] = useState<string[]>([]);

  return (
    <section className="py-7 ">
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-bold md:text-[28px]">
          실시간 동아리 랭킹
        </div>
        <div className="hidden md:flex md:gap-[16px]">
          <PullDown
            optionData={Field_Type}
            optionSize="small"
            handleOption={setFieldType}
            selectedOption={fieldType}
          />
          <SubTap optionData={Affiliation_Type.slice(1, 3)} />
        </div>
      </div>
      <div className="flex mt-[16px] gap-[10px] md:hidden">
        <PullDown
          optionData={Affiliation_Type}
          optionSize="small"
          handleOption={setAffiliationType}
          selectedOption={affiliationType}
        />
        <PullDown
          optionData={Field_Type}
          optionSize="small"
          handleOption={setFieldType}
          selectedOption={fieldType}
        />
      </div>

      <div className="py-5">
        <ClubRankingCard clubs={dummyCardData.slice(0, isTab ? 3 : 1)} />
        <ClubRankingList
          clubs={dummyCardData.slice(isTab ? 3 : 1, isTab ? 10 : 7)}
        />
      </div>
    </section>
  );
};

export default ClubRanking;
