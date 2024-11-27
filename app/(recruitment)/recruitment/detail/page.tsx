"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import test_image from "@/images/test/test_image.jpg";
import Keyword from "@/components/button/keyword";
import SahreBtn from "@/components/button/iconBtn/shareBtn";
import LargeBtn from "@/components/button/basicBtn/largeBtn";
import { MdFavorite } from "react-icons/md";
import BookmarkBtn from "@/components/button/iconBtn/bookmarkBtn";

const RecruitmentDetailPage = () => {
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const [isScrap, setIsScrap] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const onHeartClick = () => {
    setIsHeart(!isHeart);
  };

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
    <div className="flex gap-14 ">
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
      <div className="flex flex-col w-[400px] pt-[6px]">
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
        <div className="flex space-x-3  mt-10">
          <SahreBtn onClick={() => {}} />
          <BookmarkBtn
            onClick={onBookmarkClick}
            count={count}
            isScrap={isScrap}
          />
          <LargeBtn title={"지원하기 D-3"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetailPage;
