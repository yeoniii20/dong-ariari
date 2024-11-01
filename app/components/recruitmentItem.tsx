"use client";

import logo from "@/images/logo/logo.svg";
import Image from "next/image";
import FavoriteToggle from "@/components/favoriteToggle";

const RecruitmentItem = ({}) => {
  const handleItemClick = () => {
    console.log("item clicked");
  };

  return (
    <div
      className="flex flex-col w-full cursor-pointer hover:scale-110 transition-transform"
      onClick={handleItemClick}
    >
      <div className="relative w-100 flex justify-center align-center aspect-square bg-menuborder">
        <Image
          src={logo}
          alt="동아리 사진"
          layout="responsive"
          objectFit="cover"
          className="h-auto my-auto pointer-events-none user-select-none"
        ></Image>
        <div className="absolute flex justify-center bottom-[16px]">
          <div className="bg-black/50 px-[12px] py-[6px] rounded-full user-select-none">
            <p className="text-body1_sb text-background">D-12</p>
          </div>
        </div>
      </div>

      <div className="px-[14px] py-[22px]">
        <div className="flex justify-between align-center">
          <p className="text-h3 text-text1">동아리 이름</p>
          <FavoriteToggle isActive={false} />
        </div>
        <p className="text-body1_r text-subtext1 mt-[14px]">
          모집공고 제목 혹은 <br />
          동아리 한줄 소개 작성
        </p>
        <p className="text-body2_m text-subtext1 mt-[20px]">
          소속 | 분야 | 지역 | 대상
        </p>
      </div>
    </div>
  );
};

export default RecruitmentItem;
