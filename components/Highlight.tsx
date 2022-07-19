import { UserIcon } from "@heroicons/react/solid";

interface HighlightProps {
  color: string;
  heading: string;
  subheading: string;
}

export const Highlight = ({ color, heading, subheading }: HighlightProps) => {
  return (
    <div className="bg-white rounded shadow-sm lg:w-48 space-y-6 py-8 px-4">
      <div className="flex justify-center">
        <span
          className={`${color} h-8 w-8 flex justify-center items-center rounded-full`}
        >
          <UserIcon className="h-5 w-5 text-white" />
        </span>
      </div>
      <p className="text-center">{heading}</p>
      <p className="text-center">{subheading}</p>
    </div>
  );
};
