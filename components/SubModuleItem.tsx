import { BadgeCheckIcon } from "@heroicons/react/solid";
import { CourseSubModule } from "../lib/courses";

export const SubModuleItem = ({
  subModule,
}: {
  subModule: CourseSubModule;
}) => {
  return (
    <div>
      <h5 className="font-semibold text-sm">{subModule.heading}</h5>
      <ul>
        {subModule.contents.map((content, index) => (
          <li key={index} className="flex items-center space-x-2">
            <BadgeCheckIcon className="h-4 w-4 text-orange-500" />
            <span>{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
