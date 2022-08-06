import { ChevronDownIcon, ViewGridIcon } from "@heroicons/react/solid";

export const MenuButton = () => {
  return (
    <button className="flex items-center space-x-2 bg-orange-500 px-4 py-3 text-white rounded-md shadow-md">
      <span>
        <ViewGridIcon className="w-5 h-5" />
      </span>
      <span className="text-xs uppercase font-bold tracking-wider">
          <a href="/courses.html">Courses</a>
      </span>
      <span className="hidden">
        <ChevronDownIcon className="w-5 h-5" />
      </span>
    </button>
  );
};
