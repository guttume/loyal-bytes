import { StatisticsItem } from "./StatisticsItem";

export const Statistics = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 px-8 lg:px-12 lg:mt-12 lg:gap-20 w-full">
      <StatisticsItem
        key={"professionals"}
        icon="user"
        color="bg-green-500"
        shadowColor="shadow-green-100"
        numberText="38390"
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
        numberText="369"
        text="Clients"
      />
      <StatisticsItem
        key={"courses"}
        icon="badge"
        color="bg-orange-500"
        shadowColor="shadow-orange-100"
        numberText="35"
        text="Courses"
      />
    </div>
  );
};
