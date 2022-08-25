import { BadgeCheckIcon } from "@heroicons/react/solid";
import { CourseSubModule } from "../lib/courses";

export const SubModuleItem = ({
  subModule,
}: {
  subModule: CourseSubModule;
}) => {
  return (
    <div>
      <h5 className="text-sm font-semibold">{subModule.heading}</h5>
      <ul>
        {subModule.contents.map((content, index) => (
          <li key={index} className="flex items-center space-x-2">
            <BadgeCheckIcon className="w-4 h-4 text-orange-500" />
            <span>{`${content[0].toUpperCase() + content.slice(1)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
