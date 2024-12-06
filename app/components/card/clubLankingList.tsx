"use client";

import Image from "next/image";
import no_image from "@/images/noImage/no-image.jpg";

interface Club {
  id: number;
  title: string;
  description: string;
  rank: number;
  imageSrc?: string;
}

interface ClubRankingListProps {
  clubs: Club[];
}

const ClubRankingList = ({ clubs }: ClubRankingListProps) => {
  return (
    <div
      className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-300 
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-searchbar
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-menuborder"
    >
      <div
        className="grid gap-4 mb-[8px]"
        style={{
          gridTemplateColumns: "repeat(3, minmax(204px, 1fr))",
        }}
      >
        {clubs.map((club) => (
          <div
            key={club.id}
            className="min-w-[204px] rounded-lg flex-shrink-0 cursor-pointer "
          >
            <div className="flex items-center gap-[18px] md:gap-[30px]">
              <div className="flex items-center gap-[14px] md:gap-[26px]">
                <Image
                  src={club.imageSrc || no_image}
                  alt={club.title}
                  className="w-[56px] h-[56px] rounded-full object-cover md:w-[98px] md:h-[98px]"
                />
                <div className="text-base font-semibold md:text-2xl">
                  {club.rank}
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="text-[15px] font-semibold truncate mb-1 md:text-xl md:mb-2">
                  {club.title}
                </div>
                <p className="w-[80%] text-xs truncate text-subtext2 md:text-base">
                  {club.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubRankingList;
