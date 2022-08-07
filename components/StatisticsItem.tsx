import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  PlusIcon,
  UserAddIcon
} from "@heroicons/react/solid";
import { SVGProps, useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import useIntersectionObserver from "../hooks";

interface StatsProps {
  icon: keyof IconComponents;
  color: string;
  numberText: string;
  text: string;
  shadowColor: string;
}

export interface IconComponents {
  user: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  cap: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  client: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  badge: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const StatisticsItem = ({ icon, color, numberText, text, shadowColor }: StatsProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const textNumber = +(numberText.split(',').join(''))

  const { number } = useSpring({
    from: { number: isVisible ? 0 : textNumber },
    number: textNumber,
    delay: 100,
    config: config.molasses,
  })

  const components = {
    user: UserAddIcon,
    cap: AcademicCapIcon,
    client: BriefcaseIcon,
    badge: BadgeCheckIcon,
  };

  let IconComponent = components[icon];

  return (
    <div ref={ref} className={`flex space-x-4 items-center p-4 rounded-lg shadow-xl ${shadowColor}`}>
      <div className={`${color} w-12 h-12 rounded-full flex justify-center items-center`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="flex items-center">
          <animated.span className="text-xl lg:text-3xl font-extrabold">{number.to(n => n.toFixed(0))}</animated.span>
          <span className="ml-2">
            <PlusIcon className="w-5 h-5" />
          </span>
        </div>
        <span className="font-semibold text-sm">{text}</span>
      </div>
    </div>
  );
};
