"use client";

import { useState } from "react";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";
import PointStatus from "./components/pointStatus";
import HeaderSection from "./content/headerSection";
import ListSection from "./content/listCard";
import { POINT_DATA_LIST } from "@/data/myPoint";

const ITEMS_PER_PAGE = 20;

const MyPoint = () => {
  const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="mt-[46px]">
      <HeaderSection />
      <div className="flex flex-col gap-6 mt-5 md:mt-[22px] md:flex-row md:items-start">
        <PointStatus username={"Suyoooi"} point={20} />
        <div className="flex flex-col md:flex-grow md:mb-[124px] mb-[80px]">
          {POINT_DATA_LIST.slice(0, visibleItems).map((data, index) => (
            <ListSection
              key={index}
              date={data.date}
              title={data.title}
              point={data.point}
              isLast={
                index === POINT_DATA_LIST.slice(0, visibleItems).length - 1
              }
            />
          ))}
          {visibleItems < POINT_DATA_LIST.length && (
            <div className="self-center mt-9 md:mt-10">
              <PlusBtn title={"더보기"} onClick={handleLoadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPoint;
