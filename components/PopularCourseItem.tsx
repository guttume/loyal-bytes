import Link from "next/link";

// @ts-ignore
export const PopularCourseItem = ({ imageUrl, title, color, children }) => {
  return (
    <div className="border border-gray-500 rounded-[40px] hover:animate-bounce">
      <div className="mt-1">
        <div className="lg:w-full">
          <img src={imageUrl} alt="image" className="rounded-[40px]"/>
        </div>
      </div>
      <div className="p-8 text-center space-y-4">
        <h3 className="font-bold text-xl mt-4">{title}</h3>
        <p>{children}</p>
        <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
          <a className={`btn ${color} block mx-auto rounded-lg w-full max-w-[256px]`}>Join now</a>
        </Link>
      </div>
    </div>
  );
};
