interface DayBadgeProps {
  date: string;
}

const calculateRemainingDays = (date: string): string => {
  const today = new Date();
  const targetDate = new Date(date);
  const differenceInTime = targetDate.getTime() - today.getTime();
  const remainingDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return remainingDays < 0 ? "마감" : `D - ${remainingDays}`;
};

const DdayBadge = ({ date }: DayBadgeProps) => {
  return (
    <div
      className="flex py-1 px-3 rounded-20 bg-black_50 backdrop-blur-sm
           md:py-[6px]"
    >
      <p className="text-mobile_body3_sb text-background md:text-body1_sb">
        {calculateRemainingDays(date)}
      </p>
    </div>
  );
};

export default DdayBadge;
