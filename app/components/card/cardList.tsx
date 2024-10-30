"use client";

import Image from "next/image";
import no_image from "@/images/noImage/no-image.jpg";

interface Card {
  id: number;
  title: string;
  description: string;
  rank: number;
  imageSrc?: string;
}

interface CardListProps {
  cards: Card[];
}

const gradientClasses = [
  "bg-gradient-to-r from-primary via-primary to-[#D9D9D9]",
  "bg-gradient-to-r from-sub1 via-sub1 to-[#D9D9D9]",
  "bg-gradient-to-r from-sub2 via-sub2 to-[#D9D9D9]",
];

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => {
        const isTopRank = index < 3;
        const gradientClass = isTopRank
          ? `${gradientClasses[index]} text-white mb-[8px]`
          : "bg-white";

        return (
          <div key={card.id} className={`w-full rounded-lg ${gradientClass}`}>
            <div
              className={`${isTopRank && "p-8"}  flex items-center gap-[30px]`}
            >
              {isTopRank ? (
                <div className="text-[58px]">{card.rank}</div>
              ) : (
                <div className="flex items-center gap-[27px]">
                  <Image
                    src={card.imageSrc || no_image}
                    alt={`${card.title} 이미지`}
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                  <div className="text-2xl font-semibold">{card.rank}</div>
                </div>
              )}

              <div className="flex-1 overflow-hidden gap-2">
                <div
                  className={`${
                    isTopRank ? "text-[22px]" : "text-xl"
                  } font-semibold truncate`}
                >
                  {card.title}
                </div>
                <p
                  className={`text-base truncate ${
                    isTopRank ? "text-white" : "text-subtext2"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
