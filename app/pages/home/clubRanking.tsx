"use client";

import { useContext, useState } from "react";
import SearchTermContext from "@/context/searchTermContext";

import PullDown from "@/components/pulldown/pullDown";

import { Affiliation_Type, Area_Type } from "@/data/pulldown";

const ClubRanking = () => {
  const { searchTerm } = useContext(SearchTermContext);

  return (
    <section className="flex justify-between px-8 py-10">
      <h2>동아리 랭킹</h2>
      <div className="flex gap-[16px]">
        <PullDown optionData={Affiliation_Type} />
        <PullDown optionData={Area_Type} />
      </div>
    </section>
  );
};

export default ClubRanking;
