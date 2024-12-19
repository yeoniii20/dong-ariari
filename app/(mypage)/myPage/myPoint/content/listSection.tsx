import ListCard, { ListSectionProps } from "./listCard";

const ListSection = ({
  dataList = [],
  isLast,
}: { dataList?: ListSectionProps[] } & { isLast: boolean }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <div
          key={index}
          className={`${index === dataList.length - 1 ? "border-b-2" : ""}`}
        >
          <ListCard
            date={data.date}
            title={data.title}
            point={data.point}
            isLast={isLast}
          />
        </div>
      ))}
    </div>
  );
};

export default ListSection;
