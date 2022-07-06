import { StatisticsItem } from "./StatisticsItem";

export const Statistics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 px-12 lg:mt-12 lg:gap-20 w-full">
      <StatisticsItem
        key={"professionals"}
        icon="user"
        color="bg-green-500"
        shadowColor="shadow-green-100"
        numberText="30,000"
        text="Professionals"
      />
      <StatisticsItem
        key={"classes"}
        icon="cap"
        color="bg-sky-500"
        shadowColor="shadow-sky-100"
        numberText="2,500"
        text="Classes"
      />
      <StatisticsItem
        key={"clients"}
        icon="client"
        color="bg-purple-500"
        shadowColor="shadow-purple-100"
        numberText="300"
        text="Clients"
      />
      <StatisticsItem
        key={"courses"}
        icon="badge"
        color="bg-orange-500"
        shadowColor="shadow-orange-100"
        numberText="30"
        text="Courses"
      />
    </div>
  );
};
