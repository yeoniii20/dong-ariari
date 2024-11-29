"use client";

import React, { useEffect, useState } from "react";
import MediumBtn from "@/components/button/basicBtn/mediumBtn";
import BookmarkBtn from "@/components/button/iconBtn/bookmarkBtn";
import SahreBtn from "@/components/button/iconBtn/shareBtn";
import LargeBtn from "@/components/button/basicBtn/largeBtn";

const RecruitmentBottomBar = () => {
  const [count, setCount] = useState<number>(0);
  const [isScrap, setIsScrap] = useState<boolean>(false);

  const onBookmarkClick = () => {
    setIsScrap(!isScrap);
  };

  useEffect(() => {
    if (isScrap) {
      setCount(1);
    } else {
      setCount(0);
    }
  }, [isScrap]);

  return (
    <div className="flex w-full space-x-3 mt-10">
      {/* 작은 버튼들은 고정된 크기를 유지 */}
      <div className="flex-shrink-0">
        <SahreBtn onClick={() => {}} />
      </div>
      <div className="flex-shrink-0">
        <BookmarkBtn
          onClick={onBookmarkClick}
          count={count}
          isScrap={isScrap}
        />
      </div>
      {/* MediumBtn과 LargeBtn을 조건에 따라 배치 */}
      <div className="hidden md:flex flex-shrink-0">
        <MediumBtn title={"지원하기 D-3"} onClick={() => {}} />
      </div>
      <div className="block md:hidden flex-grow">
        {/* LargeBtn이 부모의 남은 공간을 차지 */}
        <LargeBtn title={"지원하기 D-3"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default RecruitmentBottomBar;
