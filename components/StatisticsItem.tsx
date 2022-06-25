import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  PlusIcon,
  UserAddIcon
} from "@heroicons/react/solid";
import { SVGProps } from "react";

interface StatsProps {
  icon: keyof IconComponents;
  color: string;
  numberText: string;
  text: string;
}

export interface IconComponents {
  user: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  cap: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  client: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  badge: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const StatisticsItem = ({ icon, color, numberText, text }: StatsProps) => {
  const components = {
    user: UserAddIcon,
    cap: AcademicCapIcon,
    client: BriefcaseIcon,
    badge: BadgeCheckIcon,
  };

  let IconComponent = components[icon];

  return (
    <div className="flex space-x-4 items-center p-4 rounded-lg shadow-lg">
      <div className={`${color} w-12 h-12 rounded-full flex justify-center items-center`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="flex items-center">
          <span className="text-xl font-extrabold">{numberText}</span>
          <span className="ml-2">
            <PlusIcon className="w-5 h-5" />
          </span>
        </div>
        <span className="font-semibold text-sm">{text}</span>
      </div>
    </div>
  );
};
