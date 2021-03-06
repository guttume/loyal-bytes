import Link from "next/link";

// @ts-ignore
export const PopularCourseItem = ({ imageUrl, title, color, children }) => {
  return (
    <div className="relative border border-gray-500 rounded-lg lg:h-[500px]">
      <div className="absolute top-0 right-0">
        <div className="lg:w-[378px] lg:h-[268px]">
          <img src={imageUrl} />
        </div>
      </div>
      <div className="mt-56 p-8 text-center space-y-4">
        <h3 className="font-bold text-xl mt-4">{title}</h3>
        <p>{children}</p>
        <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
          <a className={`btn ${color} inline-block`}>Join now</a>
        </Link>
      </div>
    </div>
  );
};
