"use client";

import ClubInfoCard from "@/components/card/clubInfoCard";
import test_image from "@/images/logo/ariari.svg";
import test_image2 from "@/images/icon/region.svg";
import test_image3 from "@/images/icon/target.svg";
import ClubIntroduction from "@/components/card/clubIntroduction";
import PlusBtn from "@/components/button/withIconBtn/plusBtn";

export const CLUB_PROFILE_DATA = [
  {
    clubName: "동아리 A",
    clubImage: test_image,
    affiliation: "대학 동아리",
    field: "프로그래밍",
    region: "서울",
    target: "대학생",
    heartNumber: 25,
    introductionText: "introductionText",
    badgeType: "skill" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 B",
    clubImage: test_image2,
    affiliation: "대학 동아리",
    field: "디자인",
    region: "부산",
    target: "대학생",
    heartNumber: 15,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 C",
    clubImage: test_image,
    affiliation: "직장 동아리",
    field: "요리",
    region: "대구",
    target: "직장인",
    heartNumber: 8,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 D",
    clubImage: test_image,
    affiliation: "청소년 동아리",
    field: "축구",
    region: "인천",
    target: "청소년",
    heartNumber: 30,
    introductionText: "introductionText",
    badgeType: "interest" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 E",
    clubImage: test_image,
    affiliation: "학교 동아리",
    field: "음악",
    region: "광주",
    target: "고등학생",
    heartNumber: 12,
    introductionText: "introductionText",
    badgeType: "health" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 F",
    clubImage: test_image3,
    affiliation: "지역 동아리",
    field: "봉사",
    region: "대전",
    target: "성인",
    heartNumber: 20,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 G",
    clubImage: test_image,
    affiliation: "대학 동아리",
    field: "사진",
    region: "서울",
    target: "대학생",
    heartNumber: 18,
    introductionText: "introductionText",
    badgeType: "selfDevelopment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 H",
    clubImage: test_image,
    affiliation: "직장 동아리",
    field: "헬스",
    region: "부산",
    target: "직장인",
    heartNumber: 10,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 I",
    clubImage: test_image,
    affiliation: "청소년 동아리",
    field: "독서",
    region: "대구",
    target: "청소년",
    heartNumber: 5,
    introductionText: "introductionText",
    badgeType: "experience" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 J",
    clubImage: test_image,
    affiliation: "학교 동아리",
    field: "댄스",
    region: "인천",
    target: "고등학생",
    heartNumber: 22,
    introductionText: "introductionText",
    badgeType: "health" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 K",
    clubImage: test_image,
    affiliation: "대학 동아리",
    field: "마케팅",
    region: "서울",
    target: "대학생",
    heartNumber: 19,
    introductionText: "introductionText",
    badgeType: "interest" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 L",
    clubImage: test_image,
    affiliation: "지역 동아리",
    field: "봉사",
    region: "광주",
    target: "성인",
    heartNumber: 25,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 M",
    clubImage: test_image,
    affiliation: "학교 동아리",
    field: "미술",
    region: "대전",
    target: "고등학생",
    heartNumber: 9,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 N",
    clubImage: test_image,
    affiliation: "대학 동아리",
    field: "음악",
    region: "부산",
    target: "대학생",
    heartNumber: 11,
    introductionText: "introductionText",
    badgeType: "interest" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 O",
    clubImage: test_image,
    affiliation: "직장 동아리",
    field: "비즈니스",
    region: "대구",
    target: "직장인",
    heartNumber: 16,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 P",
    clubImage: test_image,
    affiliation: "청소년 동아리",
    field: "농구",
    region: "인천",
    target: "청소년",
    heartNumber: 13,
    introductionText: "introductionText",
    badgeType: "experience" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 Q",
    clubImage: test_image,
    affiliation: "학교 동아리",
    field: "영어",
    region: "광주",
    target: "고등학생",
    heartNumber: 21,
    introductionText: "introductionText",
    badgeType: "employment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 R",
    clubImage: test_image3,
    affiliation: "대학 동아리",
    field: "프로그래밍",
    region: "서울",
    target: "대학생",
    heartNumber: 28,
    introductionText: "introductionText",
    badgeType: "relationship" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 S",
    clubImage: test_image,
    affiliation: "직장 동아리",
    field: "골프",
    region: "부산",
    target: "직장인",
    heartNumber: 14,
    introductionText: "introductionText",
    badgeType: "selfDevelopment" as const,
    clubPageUrl: "/",
  },
  {
    clubName: "동아리 T",
    clubImage: test_image,
    affiliation: "청소년 동아리",
    field: "토론",
    region: "대구",
    target: "청소년",
    heartNumber: 7,
    introductionText: "introductionText",
    badgeType: "skill" as const,
    clubPageUrl: "/",
  },
];

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
            <div className="flex flex-col gap-[14px] md:gap-[22px] md:mt-[18px]">
              <ClubInfoCard
                key={club.clubName}
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
