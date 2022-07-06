// @ts-ignore
export const TestimonialItem = ({ children, imageUrl, dateText, title }) => {
  return (
    <div className="w-full lg:w-[740px] lg:pr-16 lg:mx-auto flex shadow-md rounded-lg">
      <div className="w-1/3">
        <img src={imageUrl} />
      </div>
      <div className="w-2/3 p-4 space-y-2">
        <p className="text-sm text-gray-400">{dateText}</p>
        <p>{title}</p>
        <p className="hidden lg:block">{children}</p>
      </div>
    </div>
  );
};
