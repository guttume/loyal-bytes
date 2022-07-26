import Link from "next/link";

export const HurryUp = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-blue-50 p-4 lg:rounded-lg shadow-md lg:flex items-center justify-between lg:px-16 lg:py-12">
      <div className="text-center lg:text-left">
        <p className="font-bold text-lg mb-3">Hurry up!</p>
        <p>We have limited seats. Apply now for courses and avail discounts.</p>
      </div>
      <div className="mt-6 flex lg:block justify-center">
        <Link href={"/courses"}>
          <a className="btn btn-white">View All Courses</a>
        </Link>
      </div>
    </div>
  );
};
