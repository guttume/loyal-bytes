import { ChevronDownIcon, ViewGridIcon } from "@heroicons/react/solid";

export const MenuButton = () => {
  return (
    <a href="/courses.html" className="flex items-center px-4 py-3 space-x-2 text-white bg-orange-500 rounded-md shadow-md">
      <span>
        <ViewGridIcon className="w-5 h-5" />
      </span>
      <span className="text-xs font-bold tracking-wider uppercase">
          Courses
      </span>
      <span className="hidden">
        <ChevronDownIcon className="w-5 h-5" />
      </span>
    </a>
  );
};
