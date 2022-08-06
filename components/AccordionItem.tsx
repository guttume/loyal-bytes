import { ChevronDownIcon } from "@heroicons/react/solid";
import { CourseModule } from "../lib/courses";
import { images } from "./Images";
import { SubModule } from "./Submodule";

interface AccordionItemProps {
  isActive: boolean;
  toggle: (index: number) => void;
  index: number;
  item: CourseModule;
}

export const AccordionItem = ({
  isActive,
  toggle,
  index,
  item,
}: AccordionItemProps) => {
  return (
    <div onClick={() => toggle(index)} className="select-none cursor-pointer">
      <div className="flex justify-between bg-orange-100 rounded-lg items-center px-4 lg:px-12 py-6">
        <div className="lg:w-8">
          <img src={images.moduleIcon} alt="" />
        </div>
        <h4 className="font-semibold">{item.title}</h4>
        <span className="h-8 w-8 bg-orange-500 flex items-center justify-center rounded-full">
          <ChevronDownIcon className="h-5 w-5 text-orange-200" />
        </span>
      </div>
      {isActive && (
        <div>
          <SubModule data={item.submodules} />
        </div>
      )}
    </div>
  );
};
