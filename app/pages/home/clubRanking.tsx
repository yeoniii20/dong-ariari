"use client";

import { useContext } from "react";
import SearchTermContext from "@/context/searchTermContext";

const ClubRanking = () => {
  const { searchTerm } = useContext(SearchTermContext);

  console.log("context에 저장된 검색어 :", searchTerm);

  return (
    <section className="py-10">
      <h2>동아리 랭킹</h2>
    </section>
  );
};

export default ClubRanking;
