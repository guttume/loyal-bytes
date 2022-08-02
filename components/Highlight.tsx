import { AcademicCapIcon, CalendarIcon, CheckIcon, ClockIcon } from "@heroicons/react/solid";

interface HighlightProps {
  color: string;
  heading: string;
  subheading: string;
}

export const Highlight = ({ color, heading, subheading }: HighlightProps) => {
  const icons: any = {
    'Duration':  <ClockIcon className="h-6 w-6 text-white" />,
    'Batch Days' : <CalendarIcon className="h-6 w-6 text-white" />,
    'Learning mode':  <AcademicCapIcon className="h-6 w-6 text-white" />,
    'Passing score':  <CheckIcon className="h-6 w-6 text-white" />,
  }
  return (
    <div className="bg-white rounded shadow-sm lg:w-48 space-y-6 py-8 px-4">
      <div className="flex justify-center">
        <span
          className={`${color} h-12 w-12 flex justify-center items-center rounded-full`}
        >
         {icons[heading]}
        </span>
      </div>
      <p className="text-center font-bold text-blue-700">{heading}</p>
      <p className="text-center">{subheading}</p>
    </div>
  );
};
