"use client";

import { useContext, useState } from "react";
import SearchTermContext from "@/context/searchTermContext";

import PullDown from "@/components/pulldown/pullDown";

import {
  Affiliation_Type,
  Area_Type,
  Field_Type,
  Target_Type,
} from "@/data/pulldown";
import CardList from "@/components/card/cardList";
import SubTap from "@/components/tab/subTap";

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
    // imageSrc: "",
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
  const { searchTerm } = useContext(SearchTermContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <section className="py-7 ">
      <div className="flex justify-between items-center">
        <div className="text-[28px] font-bold md: text-[18px]">
          실시간 동아리 랭킹
        </div>
        <div className="flex gap-[16px]">
          <PullDown optionData={Affiliation_Type} type="singleSelect" />
          <PullDown optionData={Field_Type} type="singleSelect" />
          <PullDown optionData={Area_Type} type="multiSelect" />
          <PullDown optionData={Target_Type} type="multiSelect" />

          <SubTap options={[{ label: "연합" }, { label: "교내" }]} />
        </div>
      </div>

      <div className="py-10">
        <CardList cards={dummyCardData} />
      </div>
    </section>
  );
};

export default ClubRanking;
