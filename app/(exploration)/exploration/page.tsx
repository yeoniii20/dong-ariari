"use client";

import React from "react";
import ClubInfoCard from "@/components/card/clubInfoCard";
import ClubIntroduction from "@/components/card/clubIntroduction";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";
import { CLUB_PROFILE_DATA } from "@/data/clubProfile";

const Exploration = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mt-5 md:mt-8 md:gap-[22px]">
        <h1 className="text-text1 text-mobile_h1_contents_title md:text-h1_contents_title ">
          동아리 탐색
        </h1>
        <p className="text-subtext2 text-mobile_body2_m md:text-h4">
          총 100개의 동아리가 있어요.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 mt-5 gap-6 md:grid-cols-2 md:gap-[18px] md:mt-2.5">
          {CLUB_PROFILE_DATA.map((club) => (
            <div
              key={club.id}
              className="flex flex-col gap-[14px] md:gap-[22px] md:mt-[18px]"
            >
              <ClubInfoCard
                clubName={club.clubName}
                clubImage={club.clubImage}
                affiliation={club.affiliation}
                field={club.field}
                region={club.region}
                target={club.target}
                heartNumber={club.heartNumber}
                clubPageUrl={club.clubPageUrl}
              />
              <ClubIntroduction
                introductionText={club.introductionText}
                badgeType={club.badgeType}
              />
            </div>
          ))}
        </div>
        <div className="self-center mt-9 mb-[80px] md:mt-10 md:mb-[124px]">
          <PlusBtn title={"더보기"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Exploration;
