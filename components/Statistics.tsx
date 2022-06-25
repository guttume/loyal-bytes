import { StatisticsItem } from "./StatisticsItem";

export const Statistics = () => {
  return (
    <div className="grid grid-cols-2 px-4 w-full">
      <StatisticsItem
        key={"professionals"}
        icon="user"
        color="bg-green-500"
        numberText="30,000"
        text="Professionals"
      />
      <StatisticsItem
        key={"classes"}
        icon="cap"
        color="bg-sky-500"
        numberText="2,500"
        text="Classes"
      />
      <StatisticsItem
        key={"clients"}
        icon="client"
        color="bg-purple-500"
        numberText="300"
        text="Clients"
      />
      <StatisticsItem
        key={"courses"}
        icon="badge"
        color="bg-orange-500"
        numberText="30"
        text="Courses"
      />
    </div>
  );
};
