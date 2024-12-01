"use client";

import React, { useState } from "react";
import Image from "next/image";
import test_image from "@/images/test/test_image.jpg";
import Keyword from "@/components/button/keyword";
import { MdFavorite } from "react-icons/md";
import DayFloatingBar from "@/components/bar/floatingBar/dayFloatinBar";
import RecruitmentGuideFloatingBar from "@/components/bar/floatingBar/recruitmentGuideFloatingBar";
import PointStatusFloatingBar from "@/components/bar/floatingBar/pointStatusFloatingBar";
import MobilePointStatusFloatingBar from "@/components/bar/floatingBar/mobilePointStatusFloatingBar";
import RecruitmentBottomBar from "@/components/bar/floatingBar/recruitmentBottomBar";

const ClubInfo = () => {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  const onHeartClick = () => {
    setIsHeart(!isHeart);
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-14">
      <div className="w-full max-w-[792px]">
        <Image
          src={test_image}
          alt={"test_image"}
          width={792}
          height={792}
          layout="responsive"
          className="rounded-48 object-cover"
        />
      </div>
      <div className="flex flex-col mt-[18px] md:pt-[6px]">
        <div className="block md:hidden">
          <div className="flex flex-col gap-[18px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={test_image}
                  alt={"Test Image"}
                  width={68}
                  height={68}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-mobile_h1_contents_title text-text1">
                    동아리 이름
                  </h1>
                  <p className="text-subtext2 text-mobile_body3_m">
                    소속 | 분야 | 지역 | 대상
                  </p>
                </div>
              </div>
              <p></p>
              <div className="cursor-pointer" onClick={onHeartClick}>
                {isHeart ? (
                  <MdFavorite size={24} color="#D1F75D" />
                ) : (
                  <MdFavorite size={24} color="#E3E3E3" />
                )}
              </div>
            </div>
            <p className="text-mobile_body1_r text-subtext1">
              동아리 소개 입니다.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-[94px] h-[94px]">
            <Image
              src={test_image}
              alt={"Test Image"}
              width={94}
              height={94}
              className="rounded-full object-cover"
            />
            <div
              className="absolute bottom-0 right-0 cursor-pointer"
              onClick={onHeartClick}
            >
              {isHeart ? (
                <MdFavorite size={24} color="#D1F75D" />
              ) : (
                <MdFavorite size={24} color="#E3E3E3" />
              )}
            </div>
          </div>
          <h1 className="text-h1_contents_title mb-[15px] mt-[26px]">
            동아리 이름
          </h1>
          <p className="text-body1_r">동아리 소개를 작성해주세요.</p>
          <div className="w-[340px] mt-10">
            <Keyword />
          </div>
          <div className="h-0.5 bg-menuborder mt-8 mb-7" />
          <div className="felx text-body1_m text-subtext1 space-y-[14px]">
            <div className="flex flex-row gap-[65px]">
              <p className="w-[56px]">모집 인원</p>
              <p>6명</p>
            </div>
            <div className="flex flex-row gap-[65px]">
              <p className="w-[56px]">모집 기간</p>
              <p>24.10.09 ~ 10.24</p>
            </div>
            <div className="flex flex-row gap-[65px]">
              <p className="w-[56px]">이메일</p>
              <p>12345@gmail.com</p>
            </div>
          </div>
        </div>
        <RecruitmentBottomBar />
      </div>
      {/* <RecruitmentGuideFloatingBar deadline={new Date("2024-12-31T23:59:59")} /> */}
      {/* <DayFloatingBar deadline={new Date("2024-12-31T23:59:59")} /> */}
      {/* <PointStatusFloatingBar /> */}
      {/* <MobilePointStatusFloatingBar /> */}
    </div>
  );
};

export default ClubInfo;
