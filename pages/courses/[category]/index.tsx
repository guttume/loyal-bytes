import { ArrowCircleRightIcon, ServerIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { images } from "../../../components";
import { getAllCategories, getCoursesForCategory } from "../../../lib/courses";

export default function Category({ courses }: { courses: Array<string> }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-100px)] relative overflow-clip">
      <div className="absolute transform -translate-x-1/2 w-[650px]">
        <img src={images.homePageRings} alt="rings" />
      </div>
      <section className="p-8 lg:p-12 pb-16">
        <h1 className="text-center text-5xl capitalize font-bold">
          {typeof category === "string" && category.toUpperCase()}
        </h1>
        <div className="mt-4 mb-12 flex justify-center">
          <img src={images.testimonials.bar} alt="bar" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course}
              className="flex bg-gray-200 px-4 py-8 justify-between items-center rounded-xl"
            >
              <div className="flex-1">
                <span
                  className="h-8 w-8 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: `#5E78B2` }}
                >
                  <ServerIcon
                    className="h-5 w-5"
                    style={{ color: "#A2B3DC" }}
                  />
                </span>
              </div>
              <Link
                href={`/courses/${category}/${course.replace(/\.js$/, "")}`}
              >
                <a className="w-full text-lg font-bold pl-4">
                  {course
                    .replace(/\.js$/, "")
                    .split("-")
                    .map(
                      (word) =>
                        `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
                    )
                    .join(" ")}
                </a>
              </Link>
              <div className="flex-1">
                <span className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
                  <ArrowCircleRightIcon className="h-5 w-5 text-orange-500" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllCategories();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const courses = getCoursesForCategory(params?.category);

  return {
    props: {
      courses,
    },
  };
};
