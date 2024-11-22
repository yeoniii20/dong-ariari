"use client";

import LargeBtn from "@/components/button/basicBtn/largeBtn";
import SmallBtn from "@/components/button/basicBtn/smallBtn";
import TransparentLargeBtn from "@/components/button/basicBtn/transparentLargeBtn";
import TransparentSmallBtn from "@/components/button/basicBtn/transparentSmallBtn";
import WhiteButton from "@/components/button/basicBtn/whiteBtn";
import DeleteBtn from "@/components/button/iconBtn/deleteBtn";
import FilterBtn from "@/components/button/iconBtn/filterBtn";
import KeywordBtn from "@/components/button/iconBtn/keywordBtn";
import LoginBtn from "@/components/button/iconBtn/loginBtn";
import Notification from "@/components/button/iconBtn/notification";
import RoundVectorBtn from "@/components/button/iconBtn/roundVectorBtn";
import SearchBtn from "@/components/button/iconBtn/searchBtn";
import SendBtn from "@/components/button/iconBtn/sendBtn";
import SahreBtn from "@/components/button/iconBtn/shareBtn";
import SquareVectorBtn from "@/components/button/iconBtn/squareVectorBtn";
import WriteBtn from "@/components/button/iconBtn/writeBtn";
import DarkBtn from "@/components/button/withIconBtn/darkBtn";
import IconBtn from "@/components/button/withIconBtn/IconBtn";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";

const RecruitmentDetail = () => {
  return (
    <div className="bg-pink-100">
      <KeywordBtn />
      <SahreBtn onClick={() => {}} />
      <SendBtn onClick={() => {}} />
      <WriteBtn onClick={() => {}} />
      <SmallBtn title={"동아리 관리"} onClick={() => {}} />
      <SmallBtn title={"동아리 관리"} onClick={() => {}} round={true} />
      <LargeBtn title={"제출하기"} onClick={() => {}} />
      <LargeBtn title={"제출하기"} onClick={() => {}} round={true} />
      <TransparentSmallBtn title={"동아리 관리"} onClick={() => {}} />
      <TransparentSmallBtn
        title={"동아리 관리"}
        onClick={() => {}}
        round={true}
      />
      <TransparentLargeBtn title={"동아리 관리"} onClick={() => {}} />
      <TransparentLargeBtn
        title={"동아리 관리"}
        onClick={() => {}}
        round={true}
      />
      <WhiteButton title={"button"} onClick={() => {}} />
      <PlusBtn title={"button"} onClick={() => {}} />
      <IconBtn
        type={"reset"}
        size={"small"}
        title={"button"}
        onClick={() => {}}
      />
      <IconBtn
        type={"declaration"}
        size={"large"}
        title={"button"}
        onClick={() => {}}
      />
      <Notification size={"large"} />
      <Notification size={"small"} />
      <SquareVectorBtn onClick={() => {}} />
      <RoundVectorBtn onClick={() => {}} />
      <SearchBtn onClick={() => {}} />
      <FilterBtn onClick={() => {}} />
      <LoginBtn onClick={() => {}} />
      <DeleteBtn onClick={() => {}} />
      <DarkBtn title={"text"} onClick={() => {}} />
    </div>
  );
};

export default RecruitmentDetail;
