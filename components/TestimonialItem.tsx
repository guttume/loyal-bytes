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
  return (
    <div className="w-full max-w-3xl mx-auto h-full items-center py-8 mb-8 rounded-lg shadow-md">
      {/* <div className="lg:w-1/3 w-32 mx-auto px-4">
        <img src={imageUrl} className="w-full h-auto" />
      </div> */}
      <div className="lg:p-4 p-2 space-y-4">
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
