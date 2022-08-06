import { CourseSubModule } from "../lib/courses";
import { SubModuleItem } from "./SubModuleItem";

export const SubModule = ({ data }: { data: Array<CourseSubModule> }) => {
  return (
    <div className="bg-orange-50 shadow-inner -mt-4 -z-10 p-8 space-y-6">
      {data.map((subModule, index) => (
        <SubModuleItem key={index} subModule={subModule} />
      ))}
    </div>
  );
};
