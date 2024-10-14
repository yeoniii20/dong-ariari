import ClubRanking from "@/pages/home/clubRanking";
import LatestRecruitment from "@/pages/home/latestRecruitment";
import PopularRecruitment from "@/pages/home/popularRecruitment";

const Home = () => {
  return (
    <div className="w-full bg-gray-200">
      <ClubRanking />
      <PopularRecruitment />
      <LatestRecruitment />
    </div>
  );
};

export default Home;
