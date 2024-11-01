import RecruitmentItem from "@/components/recruitmentItem";

const PopularRecruitment = () => {
  return (
    <section className="mx-auto mt-[60px] bg-background">
      <h2 className="text-h1_contents_title">인기 모집공고</h2>
      <div className="grid grid-cols-4 gap-x-[16px] gap-y-[28px] py-[30px]">
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
        <RecruitmentItem></RecruitmentItem>
      </div>
    </section>
  );
};

export default PopularRecruitment;
