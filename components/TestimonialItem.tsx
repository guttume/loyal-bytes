import { useRouter } from "next/router";

export const TestimonialItem = ({
  children,
  imageUrl,
  company,
  title,
  designation,
}: {
  children: any;
  imageUrl: string;
  company: string;
  title: string;
  designation: string;
}) => {
  const route = useRouter();
  const currentPage = route.pathname.replace(/\//, '').replace(/\.html/, '')

  return (
    <div className={`items-center w-full h-full max-w-3xl mx-auto mb-8 ${currentPage == 'testimonials' && 'rounded shadow'}`}>
      {/* <div className="w-32 px-4 mx-auto lg:w-1/3">
        <img src={imageUrl} className="w-full h-auto" />
      </div> */}
      <div className="p-2 space-y-4 lg:p-4">
        <div className="space-y-1">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs font-semibold text-gray-500">
            {designation} | <span className="text-gray-400">{company}</span>
          </p>
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};
