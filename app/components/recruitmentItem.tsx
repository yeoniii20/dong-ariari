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
      className="group relative flex flex-col w-full cursor-pointer hover:scale-110 transition-transform"
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
        <div className="absolute bottom-[-0.5px] w-full h-3/5 bg-gradient-to-t from-card_pressed to-transparent delay-0 duration-300 opacity-0 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 w-full flex justify-center flex-row items-end pb-[15px]">
          <div className="bg-black/50 px-[12px] py-[6px] rounded-full user-select-none">
            <p className="text-body1_sb text-background">D-12</p>
          </div>
        </div>
      </div>

      <div className="px-[14px] py-[22px] transition duration-300 group-hover:bg-card_pressed">
        <div className="flex justify-between align-center">
          <p className="text-h3 text-text1 group-hover:text-background transition duration-300">
            동아리 이름
          </p>
          <FavoriteToggle isActive={false} />
        </div>
        <p className="text-body1_r text-subtext1 mt-[14px] group-hover:text-background transition duration-300">
          모집공고 제목 혹은 <br />
          동아리 한줄 소개 작성
        </p>
        <p className="text-body2_m text-subtext1 mt-[20px] group-hover:text-background transition duration-300">
          소속 | 분야 | 지역 | 대상
        </p>
      </div>
    </div>
  );
};

export default RecruitmentItem;
